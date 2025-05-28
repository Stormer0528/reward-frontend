import type { IStatisticsFilters } from 'src/types/statistics';

import { useState, useEffect } from 'react';
import { useBoolean } from 'minimal-shared/hooks';
import { useLazyQuery, useQuery as useGraphQuery } from '@apollo/client';

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';

import { useQuery } from 'src/routes/hooks';

import { fDateTime } from 'src/utils/format-time';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';
import { LoadingScreen } from 'src/components/loading-screen';

import {
  FETCH_STATISTICS_QUERY,
  FETCH_MEMBERSTATISTICS_QUERY,
} from 'src/sections/Statistics/query';

import { TablePaginationCustom } from '../Table';

// ----------------------------------------------------------------------

export default function CollapsibleTable() {
  const { data: statisticsData } = useGraphQuery(FETCH_STATISTICS_QUERY, {
    variables: {
      page: '1,100',
      sort: 'createdAt',
    },
  });

  const tableData = statisticsData?.statistics;

  return (
    <Grid container spacing={1}>
      <Paper
        variant="outlined"
        sx={{
          width: '100%',
          m: 0.5,
          mt: 2,
          p: 2,
          borderRadius: 1.5,
        }}
      >
        <Typography variant="subtitle1">TXC Payout</Typography>
        {tableData?.statistics!.length ? (
          <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
            <ScrollBar>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">New Blocks</TableCell>
                    <TableCell align="left">Total Blocks</TableCell>
                    <TableCell align="left">Total Hash Power</TableCell>
                    <TableCell align="left">Total Members</TableCell>
                    <TableCell align="left">TXC Shared</TableCell>
                    <TableCell align="left">Diff</TableCell>
                    <TableCell align="left">From</TableCell>
                    <TableCell align="left">To</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {tableData?.statistics!.map((row) => (
                    <CollapsibleTableRow key={row!.id} row={row!} />
                  ))}
                </TableBody>
              </Table>
            </ScrollBar>
          </TableContainer>
        ) : (
          <LoadingScreen />
        )}
      </Paper>
    </Grid>
  );
}

// ----------------------------------------------------------------------

type CollapsibleTableRowProps = {
  row: ReturnType;
};

function CollapsibleTableRow({ row }: CollapsibleTableRowProps) {
  const [statisticsId, setStatisticsId] = useState<string>();
  const collapsible = useBoolean();

  const [query, { setPage, setPageSize }] = useQuery<IStatisticsFilters>();

  const { page = { page: 1, pageSize: 10 } } = query;

  const [fetchMemberStatistics, { loading, data: memberStatisticsData }] = useLazyQuery(
    FETCH_MEMBERSTATISTICS_QUERY,
    {
      variables: {
        filter: { statisticsId },
        page: page && `${page.page},${page.pageSize}`,
        sort: 'createdAt',
      },
    }
  );

  const memberStatistics = loading ? [] : memberStatisticsData?.memberStatistics!.memberStatistics!;

  const showChild = (id: string) => {
    collapsible.onToggle();

    setStatisticsId(id);
  };

  useEffect(() => {
    if (statisticsId) {
      fetchMemberStatistics();
    }
  }, [statisticsId, fetchMemberStatistics]);

  return (
    <>
      <TableRow hover>
        <TableCell>
          <IconButton
            color={collapsible.value ? 'inherit' : 'default'}
            onClick={() => showChild(row.id)}
            sx={{ p: 0 }}
            size="small"
          >
            <Iconify
              icon={collapsible.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            />
          </IconButton>
        </TableCell>
        <TableCell align="left">{new Date(row.issuedAt).toISOString().split('T')[0]}</TableCell>
        <TableCell align="left">{row.newBlocks}</TableCell>
        <TableCell align="left">{row.totalBlocks}</TableCell>
        <TableCell align="left">{row.totalHashPower}</TableCell>
        <TableCell align="left">{row.totalMembers}</TableCell>
        <TableCell align="left">{row.txcShared}</TableCell>
        <TableCell align="left">{row.newBlocks * 254 - row.txcShared}</TableCell>
        <TableCell align="left">{fDateTime(row.from)}</TableCell>
        <TableCell align="left">{fDateTime(row.to)}</TableCell>
        <TableCell align="left">{row.status ? 'Confirmed' : 'Pending'}</TableCell>
      </TableRow>

      {memberStatistics && (
        <TableRow>
          <TableCell sx={{ py: 0 }} colSpan={12}>
            <Collapse in={collapsible.value} unmountOnExit>
              <Paper
                variant="outlined"
                sx={{
                  p: 1,
                  borderRadius: 1.5,
                  ...(collapsible.value && {
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                }}
              >
                <Typography variant="subtitle1" sx={{ m: 2 }}>
                  History
                </Typography>

                <Table size="small" aria-label="memberStatistics" sx={{ width: '100%' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="left">Username</TableCell>
                      <TableCell align="left">TXC Cold</TableCell>
                      <TableCell align="left">Hash Power</TableCell>
                      <TableCell align="left">Reward</TableCell>
                      <TableCell align="left">Percent</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {memberStatistics!.map((item: any) => (
                      <TableRow hover key={item.id}>
                        <TableCell component="th" scope="row">
                          {new Date(item.issuedAt).toISOString().split('T')[0]}
                        </TableCell>
                        <TableCell align="left">{item.member.username}</TableCell>
                        <TableCell align="left">{item.member.txcCold}</TableCell>
                        <TableCell align="left">{item.hashPower}</TableCell>
                        <TableCell align="left">{item.txcShared}</TableCell>
                        <TableCell align="left">{item.percent}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePaginationCustom
                  count={loading ? 0 : memberStatisticsData!.memberStatistics!.total!}
                  page={loading ? 0 : page!.page - 1}
                  rowsPerPage={page?.pageSize}
                  onPageChange={(_, curPage) => {
                    setPage(curPage + 1);
                  }}
                  onRowsPerPageChange={(event) => {
                    setPageSize(parseInt(event.target.value, 10));
                  }}
                />
              </Paper>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
