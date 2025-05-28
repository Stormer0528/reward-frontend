import type { Member } from 'src/__generated__/graphql';
import type { SortOrder } from 'src/routes/hooks/useQuery';
import type { ICommissionPrismaFilter, ICommissionTableFilters } from './types';

import { useMemo, useEffect } from 'react';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { paths } from 'src/routes/paths';
import { useQuery } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { ScrollBar } from 'src/components/ScrollBar';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import {
  useTable,
  TableNoData,
  TableSkeleton,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { useFetchCommissions } from 'src/sections/Commission/useApollo';

import ProductTableRow from './CommissionTableRow';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'ID', label: 'ID', width: 120, sortable: true },
  { id: 'weekStartDate', label: 'Week', sortable: true },
  { id: 'begLR', label: 'BegLR', width: 100, sortable: false },
  { id: 'newLR', label: 'NewLR', width: 100, sortable: false },
  { id: 'maxLR', label: 'MaxLR', width: 100, sortable: false },
  { id: 'pkgLR', label: 'Package', width: 100, sortable: true },
  { id: 'endLR', label: 'EndLR', width: 100, sortable: true },
  { id: 'commission', label: 'Commissions', width: 200, sortable: true },
  { id: 'paymentMethod', label: 'Method', width: 100, sortable: true },
  { id: 'status', label: 'Status', width: 120, sortable: true },
  { id: 'proofNote', label: 'Note', width: 300, sortable: true },
];

const defaultFilter: ICommissionTableFilters = {
  search: '',
  status: 'pending',
};

interface Props {
  me: Member;
}

export default function Commission({ me }: Props) {
  const table = useTable({ defaultDense: true });

  const { fetchCommissions, loading, rowCount, weeklyCommissions } = useFetchCommissions();

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] =
    useQuery<ICommissionTableFilters>();

  const { page = { page: 1, pageSize: 10 }, sort = { ID: 'asc' }, filter = defaultFilter } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: ICommissionPrismaFilter = {};
    if (filter.search) {
      filterObj.OR = [{ member: { username: { contains: filter.search, mode: 'insensitive' } } }];
    }

    return filterObj;
  }, [filter]);

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const canReset = !!filter.search;

  useEffect(() => {
    fetchCommissions({
      variables: {
        page: page && `${page.page},${page.pageSize}`,
        filter: graphQueryFilter,
        sort: graphQuerySort,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const notFound = (canReset && !weeklyCommissions?.length) || !weeklyCommissions?.length;

  return (
    <DashboardContent sx={{ overflowX: 'hidden' }}>
      <Breadcrumbs
        heading="Commission"
        links={[{ name: 'Commission', href: paths.dashboard.commission.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />
      <Card>
        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <ScrollBar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom
                order={sort && sort[Object.keys(sort)[0]]}
                orderBy={sort && Object.keys(sort)[0]}
                headLabel={TABLE_HEAD}
                rowCount={loading ? 0 : weeklyCommissions!.length}
                onSort={(id) => {
                  if (
                    id !== 'action' &&
                    id !== 'begLR' &&
                    id !== 'newLR' &&
                    id !== 'maxLR' &&
                    id !== 'pkgLR' &&
                    id !== 'endLR' &&
                    id !== 'proofNote'
                  ) {
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
                  {weeklyCommissions!.map((row: any) => (
                    <ProductTableRow key={row!.id} row={row!} />
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
    </DashboardContent>
  );
}
