import { useMemo, useEffect, useCallback } from 'react';

import { Card, Stack, Table, TableBody, TableContainer } from '@mui/material';

import { useQuery, type SortOrder } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { SearchInput } from 'src/components/SearchInput';
import {
  useTable,
  TableNoData,
  TableSkeleton,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import MemberTableRow from './MemberTableRow';
import MemberTableFiltersResult from './MemberTableFiltersResult';
import { useFetchMe, useFetchMembers } from '../Profile/useApollo';

import type { IMemberPrismaFilter, IMemberTableFilters } from './types';

const TABLE_HEAD = [
  { id: 'username', label: 'Username', sortable: true },
  { id: 'fullName', label: 'Full Name', sortable: true },
  { id: 'createdAt', label: 'Created At', sortable: true },
];

const defaultFilter: IMemberTableFilters = {
  search: '',
  status: 'all',
};

export default function PlacementListViewWithReactFlowProvider() {
  const table = useTable({ defaultDense: true });

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] =
    useQuery<IMemberTableFilters>();

  const { me, fetchMe } = useFetchMe();
  const { loading, members, rowCount, fetchMembers } = useFetchMembers();

  const {
    page = { page: 1, pageSize: 10 },
    sort = { createdAt: 'asc' },
    filter = defaultFilter,
  } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: IMemberPrismaFilter = {};
    if (filter.search) {
      filterObj.OR = [
        { email: { contains: filter.search, mode: 'insensitive' } },
        { assetId: { contains: filter.search, mode: 'insensitive' } },
        { mobile: { contains: filter.search, mode: 'insensitive' } },
        { username: { contains: filter.search, mode: 'insensitive' } },
        { fullName: { contains: filter.search, mode: 'insensitive' } },
        { primaryAddress: { contains: filter.search, mode: 'insensitive' } },
        { memberWallets: { some: { address: { contains: filter.search, mode: 'insensitive' } } } },
      ];
    }

    if (filter.status === 'inactive') {
      filterObj.deletedAt = { not: null };
    }

    filterObj.sponsorId = me?.id;

    return filterObj;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const canReset = !!filter.search;

  useEffect(() => {
    fetchMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMembers({
      variables: {
        page: page && `${page.page},${page.pageSize}`,
        filter: graphQueryFilter,
        sort: graphQuerySort,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me, query]);

  const notFound = (canReset && !members?.length) || !members?.length;

  const handleSearchChange = useCallback(
    (value: string) => {
      setQuery({ ...query, filter: { ...filter, search: value } });
    },
    [setQuery, query, filter]
  );

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Miner"
        links={[{ name: 'Sponsor' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Card>
        <Stack>
          <SearchInput search={filter.search} onSearchChange={handleSearchChange} />
        </Stack>

        {canReset && !loading && (
          <MemberTableFiltersResult results={rowCount} sx={{ p: 2.5, pt: 0 }} />
        )}

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
            <TableHeadCustom
              order={sort && sort[Object.keys(sort)[0]]}
              orderBy={sort && Object.keys(sort)[0]}
              headLabel={TABLE_HEAD}
              rowCount={loading ? 0 : members!.length}
              onSort={(id) => {
                if (id !== 'action') {
                  const isAsc = sort && sort[id] === 'asc';
                  const newSort = { [id]: isAsc ? 'desc' : ('asc' as SortOrder) };
                  setQuery({ ...query, sort: newSort });
                }
              }}
            />
            {loading ? (
              <>
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
                <TableSkeleton height={26} />
              </>
            ) : (
              <TableBody>
                {members!.map((row) => (
                  <MemberTableRow key={row!.id} row={row!} />
                ))}

                <TableNoData notFound={notFound} />
              </TableBody>
            )}
          </Table>
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
    </DashboardContent>
  );
}
