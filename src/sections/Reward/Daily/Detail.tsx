import type { UseBooleanReturn } from 'minimal-shared/hooks';
import type { Statistics } from 'src/sections/Statistics/type';

import { Suspense } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { truncateMiddle } from 'src/utils/helper';
import { fDateTime } from 'src/utils/format-time';

import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchMemberStatisticsWallets } from '../useApollo';

interface Props {
  open: UseBooleanReturn;
  current: Statistics;
}

const loadingScreen = (
  <>
    {new Array(3).fill('').map(() => (
      <Grid container spacing={2} mb={0.5}>
        <Grid size={3} fontSize={14}>
          <Skeleton />
        </Grid>
        <Grid size={9} fontSize={14}>
          <Skeleton />
        </Grid>
      </Grid>
    ))}
  </>
);

export function Wallets({ current }: { current: Statistics }) {
  const { wallets } = useFetchMemberStatisticsWallets({
    filter: { issuedAt: current.issuedAt },
  });

  return (
    <>
      {wallets?.map((wallet: any) => (
        <>
          <Grid container spacing={1}>
            <Grid size={3} fontSize={14} color="text.disabled">
              Address
            </Grid>
            <Grid size={9} fontSize={14}>
              {truncateMiddle(wallet.memberWallet?.address ?? '', 30)}
            </Grid>
            <Grid size={3} fontSize={14} color="text.disabled">
              TXC
            </Grid>
            <Grid size={9} fontSize={14}>
              {Number(wallet.txc) / 10 ** 8}
            </Grid>
            <Grid size={3} fontSize={14} color="text.disabled">
              Percent
            </Grid>
            <Grid size={9} fontSize={14}>
              {Number(wallet.memberWallet?.percent) / 100} %
            </Grid>
          </Grid>

          <Divider sx={{ my: 1, borderStyle: 'dashed' }} />
        </>
      ))}
    </>
  );
}

export function WalletsDrawer({ open, current }: Props) {
  return (
    <Drawer
      open={open.value}
      onClose={() => open.onFalse()}
      anchor="right"
      slotProps={{ backdrop: { invisible: true }, paper: { sx: { width: 400 } } }}
    >
      <ScrollBar
        sx={{
          borderRadius: 1,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" px={2} pt={2}>
          <Typography variant="h6">Statistics</Typography>
          <Typography variant="body2">{`${fDateTime(current.issuedAt)}`}</Typography>
        </Stack>

        <Stack sx={{ mt: 2, px: 2, py: 1, bgcolor: 'background.neutral' }}>
          <Typography variant="h6">Info</Typography>
        </Stack>

        <Grid container p={2} spacing={1}>
          <Grid size={4} fontSize={14} color="text.disabled">
            New Blocks
          </Grid>
          <Grid size={8} fontSize={14}>
            {current.newBlocks}
          </Grid>
          <Grid size={4} fontSize={14} color="text.disabled">
            Total Blocks
          </Grid>
          <Grid size={8} fontSize={14}>
            {current.totalBlocks}
          </Grid>
          <Grid size={4} fontSize={14} color="text.disabled">
            Total Members
          </Grid>
          <Grid size={8} fontSize={14}>
            {current.totalMembers}
          </Grid>
          <Grid size={4} fontSize={14} color="text.disabled">
            Rewarded TXC
          </Grid>
          <Grid size={8} fontSize={14}>
            {Number(current.txcShared) / 10 ** 8}
          </Grid>
          <Grid size={4} fontSize={14} color="text.disabled">
            Hash Power
          </Grid>
          <Grid size={8} fontSize={14}>
            {current.totalHashPower}
          </Grid>
        </Grid>

        <Stack sx={{ mt: 2, px: 2, py: 1, bgcolor: 'background.neutral' }}>
          <Typography variant="h6">Wallets</Typography>
        </Stack>

        <Stack sx={{ p: 2 }}>
          <Suspense fallback={loadingScreen}>
            <Wallets current={current} />
          </Suspense>
        </Stack>
      </ScrollBar>
    </Drawer>
  );
}
