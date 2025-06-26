import type { ColDef } from '@ag-grid-community/core';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Statistics } from 'src/sections/Statistics/type';

import dayjs from 'dayjs';
import { useMemo, useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import { Stack } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useQuery } from 'src/routes/hooks';

import { fNumber } from 'src/utils/formatNumber';
import { fDate, formatDate, customizeDate } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';

import { ActionRender } from './ActionRender';
import { useFetchStatistics } from '../useApollo';

type BasicStatistics = Omit<Statistics, 'memberStatistics'>;

export default function StatisticsTable() {
  const [from, setFrom] = useState<any>();
  const [to, setTo] = useState<any>(dayjs());

  const [query, { setFilter }] = useQuery();

  const { page = '1,50', sort = 'issuedAt', filter } = query;

  const { loading, rowCount, statistics } = useFetchStatistics({
    filter: { issuedAt: { gte: customizeDate(from), lte: customizeDate(to) } },
    page,
    sort,
  });

  const colDefs = useMemo<ColDef<BasicStatistics>[]>(
    () => [
      {
        field: 'newBlocks',
        headerName: 'New Blocks',
        width: 150,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
      },
      {
        field: 'totalHashPower',
        headerName: 'Total Hash',
        headerClass: 'ag-right-aligned-header',
        width: 250,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicStatistics>) =>
          fNumber(data?.totalHashPower),
      },
      {
        field: 'totalMembers',
        headerName: 'Total Members',
        headerClass: 'ag-right-aligned-header',
        width: 250,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicStatistics>) =>
          fNumber(data?.totalMembers),
      },
      {
        field: 'txcShared',
        headerName: 'TXC Shared',
        headerClass: 'ag-right-aligned-header',
        width: 250,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicStatistics>) =>
          Number(data?.txcShared) / 10 ** 8,
      },
      {
        headerName: 'Your Reward',
        headerClass: 'ag-right-aligned-header',
        width: 250,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<Statistics>) =>
          (data?.memberStatistics?.reduce((prev, save) => prev + Number(save.txcShared), 0) ?? 0) /
          10 ** 8,
      },
      {
        field: 'issuedAt',
        headerName: 'Date',
        headerClass: 'ag-right-aligned-header',
        flex: 1,
        minWidth: 200,
        resizable: true,
        editable: false,
        sortable: false,
        initialSort: 'desc',
        cellClass: 'tabular-nums ag-right-aligned-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<BasicStatistics>) =>
          formatDate(data?.issuedAt),
      },
      {
        colId: 'action',
        width: 50,
        pinned: 'right',
        resizable: false,
        editable: false,
        sortable: false,
        cellClass: 'ag-action-cell',
        cellRenderer: ActionRender,
      },
    ],

    []
  );

  const onChangeFrom = (newValue: any) => {
    setFrom(fDate(newValue));
    setFilter({ ...filter, from: fDate(newValue) });
  };

  const onChangeTo = (newValue: any) => {
    setTo(fDate(newValue));
    setFilter({ ...filter, to: fDate(newValue) });
  };

  useEffect(() => {
    setFrom(filter?.from ?? '2024-04-01');
    setTo(filter?.to);
  }, [filter]);

  return (
    <>
      <Card sx={{ p: 2, borderRadius: '16px 16px 0 0' }}>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <DesktopDatePicker
            label="Start Date"
            format="YYYY-MM-DD"
            minDate={dayjs('2024-04-01')}
            value={dayjs(from)}
            slotProps={{ textField: { fullWidth: true } }}
            onChange={onChangeFrom}
            sx={{ width: 300 }}
          />
          <DesktopDatePicker
            label="End Date"
            format="YYYY-MM-DD"
            minDate={dayjs('2024-04-01')}
            value={dayjs(to)}
            slotProps={{ textField: { fullWidth: true } }}
            onChange={onChangeTo}
            sx={{ width: 300 }}
          />
        </Stack>
      </Card>
      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '0 0 16px 16px',
          height: { xs: 'calc(100vh - var(--layout-header-mobile-height) - 100px)', md: 2 },
        }}
      >
        <AgGrid<BasicStatistics>
          gridKey="daily-reward"
          loading={loading}
          rowData={statistics}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </>
  );
}
