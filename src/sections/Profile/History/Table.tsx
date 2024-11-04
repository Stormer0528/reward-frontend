import { useParams } from 'react-router-dom';
import { useQuery as useGraphQuery } from '@apollo/client';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import TableContainer from '@mui/material/TableContainer';

import { useQuery } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import {
  useTable,
  TableNoData,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/Table';

import { FETCH_MEMBERSTATISTICS_QUERY } from 'src/sections/Reward/query';

import MemberStatisticsTableRow from './MemberStatisticsTableRow';

import type { IMemberStatisticsTableFilters } from '../types';

const TABLE_HEAD = [
  { id: 'issuedAt', label: 'Date', width: 200, sortable: true },
  { id: 'username', label: 'Username', width: 200, sortable: true },
  { id: 'hashPower', label: 'Hash Power', width: 200, sortable: true },
  { id: 'reward', label: 'Rewarded TXC', width: 200, sortable: true },
  { id: 'percent', label: 'Percent', width: 130, sortable: true },
];

export default function MemberStatistics() {
  const { id: memberId } = useParams();

  const table = useTable({ defaultDense: true });

  const [query, { setPage, setPageSize }] = useQuery<IMemberStatisticsTableFilters>();

  const { page = { page: 1, pageSize: 10 } } = query;

  const { loading, data } = useGraphQuery(FETCH_MEMBERSTATISTICS_QUERY, {
    variables: {
      page: page && `${page.page},${page.pageSize}`,
      filter: { memberId },
      sort: 'issuedAt',
    },
  });

  const tableData = data?.memberStatistics ?? { memberStatistics: [], total: 0 };

  const notFound = !tableData?.memberStatistics?.length;

  return (
    <Card sx={{ mr: 2, mt: 2 }}>
      <CardHeader title="Reward" sx={{ mb: 3 }} />

      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <ScrollBar>
          {loading ? (
            <Paper sx={{ display: 'block', width: '95%', margin: 'auto' }}>
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
              <Skeleton variant="text" sx={{ width: '100%', height: 40 }} />
            </Paper>
          ) : (
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom
                headLabel={TABLE_HEAD}
                rowCount={loading ? 0 : tableData?.memberStatistics?.length}
              />
              <TableBody>
                {tableData.memberStatistics!.map((row) => (
                  <MemberStatisticsTableRow
                    key={row!.id}
                    row={row!}
                    selected={table.selected.includes(row!.id)}
                  />
                ))}

                <TableNoData notFound={notFound} />
              </TableBody>
            </Table>
          )}
        </ScrollBar>
      </TableContainer>

      <TablePaginationCustom
        count={loading ? 0 : tableData.total!}
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
