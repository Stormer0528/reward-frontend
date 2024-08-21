import type { Member } from 'src/__generated__/graphql';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

interface Props {
  me: Member;
}

export default function Personal({ me }: Props) {
  return (
    <Grid xl={12}>
      <Card sx={{ mr: 2, mt: 2, p: 3 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          About
        </Typography>
        <Grid container>
          <Grid md={12} xl={6}>
            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Full Name:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.fullName}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Username:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.username}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Sponsor:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.sponsor?.fullName}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Email:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.email}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Mobile:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.mobile}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Address:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.primaryAddress}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Address 2:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.secondaryAddress}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  City:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.city}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  ZIP Code:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.zipCode}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  State:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.state}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.3}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Asset ID:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.assetId}</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={12} xl={6}>
            {me?.memberWallets?.map((item) => (
              <Stack sx={{ pb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {item?.payout?.method}
                </Typography>
                <Typography variant="body2">{item?.address}</Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
