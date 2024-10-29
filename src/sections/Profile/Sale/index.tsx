import type { Member } from 'src/__generated__/graphql';
import type { SortOrder } from 'src/routes/hooks/useQuery';

import { useMemo, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { useQuery } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import { SearchInput } from 'src/components/SearchInput';
import {
  useTable,
  TableNoData,
  TableSkeleton,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { useFetchSales } from 'src/sections/Sales/useApollo';

import SaleTableRow from './SaleTableRow';
import SaleTableFiltersResult from './SaleTableFiltersResult';

import type { ISalePrismaFilter, ISaleTableFilters } from './types';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'assetId', label: 'Asset ID', width: 130, sortable: true },
  { id: 'productName', label: 'Product Name', sortable: true },
  { id: 'paymentMethod', label: 'Payment Method', sortable: true },
  { id: 'amount', label: 'Amount', width: 140, sortable: true },
  { id: 'hashPower', label: 'Hash Power', width: 130, sortable: true },
  { id: 'orderedAt', label: 'Ordered At', width: 130, sortable: true },
];

const defaultFilter: ISaleTableFilters = {
  search: '',
  status: 'all',
  memberId: '',
};

interface Props {
  me: Member;
}

export default function SaleListView({ me }: Props) {
  const table = useTable({ defaultDense: true });

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] = useQuery<ISaleTableFilters>();

  const {
    page = { page: 1, pageSize: 10 },
    sort = { createdAt: 'asc' },
    filter = defaultFilter,
  } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: ISalePrismaFilter = {};
    if (filter.search) {
      filterObj.OR = [
        { paymentMethod: { contains: filter.search, mode: 'insensitive' } },
        { member: { username: { contains: filter.search, mode: 'insensitive' } } },
        { member: { email: { contains: filter.search, mode: 'insensitive' } } },
        { member: { mobile: { contains: filter.search, mode: 'insensitive' } } },
        { package: { productName: { contains: filter.search, mode: 'insensitive' } } },
      ];
    }

    if (filter.status === 'inactive') {
      filterObj.status = false;
    } else {
      filterObj.status = true;
    }

    filterObj.memberId = me.id;

    return filterObj;
  }, [filter, me]);

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const canReset = !!filter.search;

  const { loading, sales, rowCount, fetchSales } = useFetchSales();

  const notFound = (canReset && !sales?.length) || !sales?.length;

  const handleSearchChange = useCallback(
    (value: string) => {
      setQuery({ ...query, filter: { ...filter, search: value } });
    },
    [setQuery, query, filter]
  );

  useEffect(() => {
    fetchSales({
      variables: {
        page: page && `${page.page},${page.pageSize}`,
        filter: graphQueryFilter,
        sort: graphQuerySort,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Card>
      <SearchInput search={filter.search} onSearchChange={handleSearchChange} />

      {canReset && !loading && (
        <SaleTableFiltersResult results={rowCount!} sx={{ p: 2.5, pt: 0 }} />
      )}

      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <ScrollBar>
          <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
            <TableHeadCustom
              order={sort && sort[Object.keys(sort)[0]]}
              orderBy={sort && Object.keys(sort)[0]}
              headLabel={TABLE_HEAD}
              rowCount={loading ? 0 : sales!.length}
              onSort={(id) => {
                const isAsc = sort && sort[id] === 'asc';
                const newSort = { [id]: isAsc ? 'desc' : ('asc' as SortOrder) };
                setQuery({ ...query, sort: newSort });
              }}
            />
            {loading ? (
              <>
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
              </>
            ) : (
              <TableBody>
                {sales!.map((row) => (
                  <SaleTableRow key={row!.id} row={row!} />
                ))}

                <TableNoData notFound={notFound} />
              </TableBody>
            )}
          </Table>
        </ScrollBar>
      </TableContainer>

      <TablePaginationCustom
        count={loading ? 0 : rowCount!}
        page={loading ? 0 : page!.page - 1}
        rowsPerPage={page?.pageSize}
        onPageChange={(_, curPage) => {
          setPage(curPage + 1);
        }}
        onRowsPerPageChange={(event) => {
          setPageSize(parseInt(event.target.value, 10));
        }}
        //
        dense={table.dense}
        onChangeDense={table.onChangeDense}
      />
    </Card>
  );
}
