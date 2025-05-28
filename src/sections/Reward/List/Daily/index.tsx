import type {
  IStatisticsTableFilters,
  IStatisticsPrismaFilter,
} from 'src/sections/Reward/List/types';

import dayjs from 'dayjs';
import { useLazyQuery } from '@apollo/client';
import { useMemo, useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useQuery, type SortOrder } from 'src/routes/hooks';

import { customizeDate } from 'src/utils/format-time';

import { STORAGE_TOKEN_KEY } from 'src/consts';

import { ScrollBar } from 'src/components/ScrollBar';
import ExportButton from 'src/components/ExportButton';
import {
  useTable,
  TableNoData,
  TableSkeleton,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { FETCH_STATISTICS_QUERY } from '../../query';
import StatisticsTableRow from './StatisticsTableRow';

const TABLE_HEAD = [
  { id: 'collapsible', label: '', width: 70 },
  { id: 'issuedAt', label: 'Date', sortable: true },
  { id: 'newBlocks', label: 'New Blocks', sortable: true },
  { id: 'totalHashPower', label: 'Total Hash', sortable: true },
  { id: 'totalMembers', label: 'Total Members', sortable: true },
  { id: 'txcShared', label: 'TXC Shared', sortable: true },
  { id: 'reward', label: 'Your Reward', sortable: true },
  { id: 'action', label: 'View', sortable: true, align: 'center' },
];

const defaultFilter: IStatisticsTableFilters = {
  search: '',
};

export default function StatisticsTable() {
  const [from, setFrom] = useState<any>(dayjs('2024-04-01'));
  const [to, setTo] = useState<any>(dayjs());

  const table = useTable({ defaultDense: true });

  const [query, { setQueryParams: setQuery, setPage, setPageSize }] =
    useQuery<IStatisticsTableFilters>();

  const {
    page = { page: 1, pageSize: 10 },
    sort = { issuedAt: 'asc' },
    filter = defaultFilter,
  } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: IStatisticsPrismaFilter = {};
    if (filter.search) {
      filterObj.OR = [];
    }

    filterObj.issuedAt = { gte: customizeDate(from), lte: customizeDate(to) };

    return filterObj;
  }, [filter, from, to]);

  const graphQuerySort = useMemo(() => {
    if (!sort) return undefined;

    return Object.entries(sort)
      .map(([key, value]) => `${value === 'asc' ? '' : '-'}${key}`)
      .join(',');
  }, [sort]);

  const [fetchStatistics, { loading, data }] = useLazyQuery(FETCH_STATISTICS_QUERY);

  const statistics = data?.statistics.statistics ?? [];

  const notFound = !statistics?.length;

  const token = localStorage.getItem(STORAGE_TOKEN_KEY);

  const renderHeader = (
    <Stack direction="row" justifyContent={{ md: 'flex-end' }}>
      <Stack direction={{ md: 'row' }} gap={2}>
        <DesktopDatePicker
          label="Start Date"
          minDate={dayjs('2024-04-01')}
          format="YYYY-MM-DD"
          slotProps={{ textField: { fullWidth: true } }}
          defaultValue={dayjs('2024-04-01')}
          onChange={(newValue) => setFrom(newValue)}
        />
        <DesktopDatePicker
          label="End Date"
          minDate={dayjs('2024-04-01')}
          format="YYYY-MM-DD"
          slotProps={{ textField: { fullWidth: true } }}
          defaultValue={dayjs()}
          onChange={(newValue) => setTo(newValue)}
        />
        <Stack width={0.3} sx={{ p: 1 }}>
          <ExportButton target="rewards/bymember" token={token!} />
        </Stack>
      </Stack>
    </Stack>
  );

  useEffect(() => {
    fetchStatistics({
      variables: {
        page: page && `${page.page},${page.pageSize}`,
        filter: graphQueryFilter,
        sort: graphQuerySort,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, query]);

  return (
    <Grid container spacing={1}>
      <Card
        sx={{
          width: '100%',
          m: 0.5,
          mt: 2,
          borderRadius: 1.5,
        }}
      >
        <Stack sx={{ p: 1 }}>{renderHeader}</Stack>
        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <ScrollBar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom
                order={sort && sort[Object.keys(sort)[0]]}
                orderBy={sort && Object.keys(sort)[0]}
                headLabel={TABLE_HEAD}
                rowCount={loading ? 0 : statistics!.length}
                numSelected={table.selected.length}
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
                  <TableSkeleton />
                  <TableSkeleton />
                  <TableSkeleton />
                  <TableSkeleton />
                  <TableSkeleton />
                </>
              ) : (
                <TableBody>
                  {statistics!.map((row) => (
                    <StatisticsTableRow
                      key={row!.id}
                      row={row!}
                      selected={table.selected.includes(row!.id)}
                    />
                  ))}

                  <TableNoData notFound={notFound} />
                </TableBody>
              )}
            </Table>
          </ScrollBar>
        </TableContainer>

        <TablePaginationCustom
          count={loading ? 0 : data?.statistics!.total!}
          page={loading ? 0 : page!.page - 1}
          rowsPerPage={page?.pageSize}
          onPageChange={(_, curPage) => {
            setPage(curPage + 1);
          }}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 10));
          }}
          dense={table.dense}
          onChangeDense={table.onChangeDense}
        />
      </Card>
    </Grid>
  );
}
