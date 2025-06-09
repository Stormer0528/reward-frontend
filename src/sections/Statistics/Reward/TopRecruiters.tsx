import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { fNumber } from 'src/utils/formatNumber';
import { customizeFullName } from 'src/utils/helper';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';
import { ScrollBar } from 'src/components/ScrollBar';

import { useFetchTopRecruiters } from '../useApollo';

export default function Latest() {
  const { loading, topRecruiters, fetchTopRecruiters } = useFetchTopRecruiters();

  useEffect(() => {
    fetchTopRecruiters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader title="Top Recruiters" />

      <ScrollBar sx={{ minHeight: 260 }}>
        <Box
          sx={{
            py: 1,
            gap: 3,
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
              {topRecruiters.map((item, index) => (
                <Stack
                  key={item.fullName}
                  sx={{
                    gap: 1,
                    minWidth: 120,
                    px: 3,
                    py: 1,
                    alignItems: 'center',
                  }}
                  direction="row"
                  justifyContent="space-between"
                  divider={<Divider sx={{ borderStyle: 'dashed', p: 0 }} />}
                >
                  <Stack direction="row" columnGap={1} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        color: 'primary.main',
                        justifyContent: 'center',
                        background: `url(${CONFIG.ASSET_DIR}/assets/medals/${index + 1}.png)`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <Image
                        src={item.avatar ?? `${CONFIG.ASSET_DIR}/assets/avatar.jpg`}
                        sx={{ width: 28, height: 28, borderRadius: 50, mt: 0.4 }}
                      />
                    </Box>
                    <Typography variant="subtitle1">{customizeFullName(item.fullName)}</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ alignItems: 'center' }} columnGap={1}>
                    <Typography variant="body1" className="tabular-nums">
                      {fNumber(item.totalIntroducers)}
                    </Typography>
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
