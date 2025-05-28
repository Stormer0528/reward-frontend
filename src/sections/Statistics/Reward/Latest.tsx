import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchLatestReward } from '../useApollo';

export default function Latest() {
  const { loading, latest, fetchReward } = useFetchLatestReward();

  useEffect(() => {
    fetchReward();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader title="Latest Reward" />

      <ScrollBar sx={{ minHeight: 260 }}>
        <Box
          sx={{
            p: 3,
            py: 1,
            gap: 3,
            minWidth: 360,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {loading ? (
            <Paper sx={{ p: 3 }}>
              <Skeleton variant="text" sx={{ fontSize: 25 }} />
              <Skeleton variant="text" sx={{ fontSize: 25 }} />
              <Skeleton variant="text" sx={{ fontSize: 25 }} />
              <Skeleton variant="text" sx={{ fontSize: 25 }} />
              <Skeleton variant="text" sx={{ fontSize: 25 }} />
            </Paper>
          ) : (
            <Stack sx={{ mt: 2 }}>
              {latest.map((item) => (
                <Stack
                  sx={{
                    gap: 1,
                    minWidth: 120,
                    px: 3,
                    py: 1,
                    alignItems: 'center',
                  }}
                  direction="row"
                  divider={<Divider sx={{ borderStyle: 'dashed', p: 0 }} />}
                >
                  <Stack width={0.3} direction="row" columnGap={1} sx={{ alignItems: 'center' }}>
                    <Tooltip title="New Blocks" arrow placement="top">
                      <Iconify icon="clarity:block-line" width={18} />
                    </Tooltip>
                    <Typography variant="body1">{item.newBlocks}</Typography>
                  </Stack>
                  <Stack width={0.3} direction="row" columnGap={1} sx={{ alignItems: 'center' }}>
                    <Tooltip title="Total Miners" arrow placement="top">
                      <Iconify icon="stash:user-group" width={18} />
                    </Tooltip>
                    <Typography variant="body1">{item.totalMembers}</Typography>
                  </Stack>
                  <Stack width={0.5} direction="row" columnGap={1} sx={{ alignItems: 'center' }}>
                    <Tooltip title="TXC Shared" arrow placement="top">
                      <Avatar
                        src={`${CONFIG.ASSET_DIR}/assets/icons/brands/txc.png`}
                        sx={{ width: 15, height: 15 }}
                      />
                    </Tooltip>
                    <Typography variant="body1">{item.txcShared}</Typography>
                  </Stack>
                  <Stack width={0.3} direction="row" columnGap={1} sx={{ alignItems: 'center' }}>
                    <Tooltip title="Issued At" arrow placement="top">
                      <Iconify icon="stash:data-date-duotone" width={18} />
                    </Tooltip>
                    <Typography variant="body1">{formatDate(item.issuedAt)}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </Box>
      </ScrollBar>
    </Card>
  );
}
