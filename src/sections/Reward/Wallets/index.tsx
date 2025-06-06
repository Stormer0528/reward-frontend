import type { ColDef } from '@ag-grid-community/core';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { RewardByWallet } from '../type';

import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { fDateTime } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchRewardByWallet } from '../useApollo';

export default function Wallets() {
  const [from, setFrom] = useState<any>(dayjs('2024-04-01'));
  const [to, setTo] = useState<any>(dayjs());

  const { loading, rewardByWallets } = useFetchRewardByWallet({ from, to });

  const colDefs = useMemo<ColDef<RewardByWallet>[]>(
    () => [
      {
        field: 'wallet.payout.method',
        headerName: 'Method',
        width: 300,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums',
      },
      {
        field: 'wallet.address',
        headerName: 'Address',
        flex: 1,
        width: 300,
        resizable: true,
        editable: false,
        sortable: false,
      },
      {
        field: 'txc',
        headerName: 'TXC Shared',
        width: 300,
        resizable: true,
        editable: false,
        sortable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<RewardByWallet>) =>
          Number(data?.txc) / 10 ** 8,
      },
    ],
    []
  );

  return (
    <>
      <Card sx={{ p: 2, borderRadius: '16px 16px 0 0' }}>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <DesktopDatePicker
            label="Start Date"
            format="YYYY-MM-DD"
            minDate={dayjs('2024-04-01')}
            defaultValue={dayjs('2024-04-01')}
            slotProps={{ textField: { fullWidth: true } }}
            onChange={(newValue) => setFrom(fDateTime(newValue))}
            sx={{ width: 300 }}
          />
          <DesktopDatePicker
            label="End Date"
            format="YYYY-MM-DD"
            minDate={dayjs('2024-04-01')}
            defaultValue={dayjs()}
            slotProps={{ textField: { fullWidth: true } }}
            onChange={(newValue) => setTo(fDateTime(newValue))}
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
        }}
      >
        <AgGrid<RewardByWallet>
          gridKey="reward-wallets"
          loading={loading}
          rowData={rewardByWallets}
          columnDefs={colDefs}
          pagination={false}
        />
      </Card>
    </>
  );
}
