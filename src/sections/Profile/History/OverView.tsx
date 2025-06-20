import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { fNumber } from 'src/utils/formatNumber';

import { CASH_POTENTIAL_URL } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

import { useAuthContext } from 'src/auth/hooks';

import { useFetchMemberOverview } from '../useApollo';

export function ProfileHistoryOverView() {
  const { user } = useAuthContext();
  const { overview, loading } = useFetchMemberOverview(user!.id);

  return (
    <Card sx={{ mb: 2, py: 3, textAlign: 'center' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={0.8}>
          <Typography variant="h4">
            {loading ? <CustomSkeleton /> : fNumber(overview?.currentHashPower ?? 0)}
          </Typography>

          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Hash Power
          </Box>
        </Stack>

        <Stack width={0.8}>
          <Typography variant="h4">
            {loading ? <CustomSkeleton /> : fNumber(overview?.cashCommissionPotential ?? 0)}
          </Typography>

          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
              Cash Potential
            </Box>
            {user?.isTexitRanger && (
              <Iconify
                icon="emojione:star"
                cursor="pointer"
                sx={{ '&:hover': { transform: 'scale(1.5)' } }}
                color="#000000"
                onClick={() => window.open(CASH_POTENTIAL_URL, '_blank')}
              />
            )}
          </Stack>
        </Stack>

        <Stack width={1}>
          <Typography variant="h4">
            {loading ? <CustomSkeleton /> : fNumber((overview?.totalTXCShared ?? 0) / 10 ** 8)}
          </Typography>
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Total TXC Reward
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}

const CustomSkeleton = styled(Skeleton)(() => ({
  width: '60%',
  margin: '0 auto',
}));
