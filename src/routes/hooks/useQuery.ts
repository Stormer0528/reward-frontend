import type { FilterModel, SortModelItem } from '@ag-grid-community/core';

import { parse, stringify } from 'qs';
import { useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';

// ----------------------------------------------------------------------
interface QueryParams<FilterType> {
  readonly sort?: string; // This can be used for graphql params
  readonly page?: string; // This can be used for graphql params
  sortModel?: SortModelItem[]; // This is used for Ag-Grid
  pageModel?: { page: number; pageSize: number };
  filter?: FilterType; // This is used for Ag-Grid
  // [key: string]: any;
}
// ----------------------------------------------------------------------
export function useQuery<FilterType = FilterModel>(): [
  QueryParams<FilterType>,
  {
    setQueryParams: (params: QueryParams<FilterType>) => void;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setSort: (sort: SortModelItem[]) => void;
    setFilter: (filter: FilterType) => void;
  },
] {
  const { search } = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo<QueryParams<FilterType>>(() => {
    const { filter, sort, page, ...rest } = parse(search.substring(1), {
      allowEmptyArrays: true,
      strictNullHandling: true,
    });
    const result: QueryParams<FilterType> = {
      ...rest,
      filter: filter as FilterType,
      sort: sort as string,
      page: page as string,
    };

    if (sort) {
      result.sortModel = (sort as string).split(',').map((sortStr) => ({
        colId: sortStr.replace('-', ''),
        sort: sortStr.startsWith('-') ? 'desc' : 'asc',
      }));
    }

    if (page) {
      const [curPage, pageSize] = (page as string).split(',').map((value) => parseInt(value, 10));
      result.pageModel = { page: curPage, pageSize };
    }

    return result;
  }, [search]);

  const setQueryParams = useCallback(
    ({ pageModel, sortModel, ...rest }: Omit<QueryParams<FilterType>, 'sort' | 'page'>) => {
      const queryObject: any = { ...rest };

      if (sortModel) {
        queryObject.sort =
          sortModel
            .map(({ colId, sort: order }) => `${order === 'asc' ? '' : '-'}${colId}`)
            .join(',') || undefined;
      }

      if (pageModel) {
        queryObject.page = `${pageModel.page},${pageModel.pageSize}`;
      }

      navigate({
        search: stringify(queryObject, { allowEmptyArrays: true, strictNullHandling: true }),
      });
    },
    [navigate]
  );

  const setPage = useCallback(
    (page: number) => {
      setQueryParams({
        ...queryParams,
        pageModel: { page, pageSize: queryParams.pageModel?.pageSize ?? 50 },
      });
    },
    [queryParams, setQueryParams]
  );

  const setPageSize = useCallback(
    (pageSize: number) => {
      setQueryParams({
        ...queryParams,
        pageModel: { page: 1, pageSize },
      });
    },
    [queryParams, setQueryParams]
  );

  const setSort = useCallback(
    (sortModel: SortModelItem[]) => {
      setQueryParams({ ...queryParams, sortModel });
    },
    [queryParams, setQueryParams]
  );

  const setFilter = useCallback(
    (filter: FilterType) => {
      setQueryParams({
        ...queryParams,
        filter,
        pageModel: { page: 1, pageSize: queryParams.pageModel?.pageSize ?? 50 },
      });
    },
    [queryParams, setQueryParams]
  );

  return useMemo(
    () => [queryParams, { setQueryParams, setPage, setPageSize, setSort, setFilter }],
    [queryParams, setQueryParams, setPage, setPageSize, setSort, setFilter]
  );
}
