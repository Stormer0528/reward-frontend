import type { Member } from 'src/__generated__/graphql';

import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

interface Props {
  me: Member;
}

export default function Personal({ me }: Props) {
  const [children, setChildren] = useState<any>();

  useEffect(() => {
    setChildren(
      me?.placementChildren?.reduce(
        (prev, save) => ({ ...prev, [save?.placementPosition ?? '']: save?.fullName }),
        {}
      )
    );
  }, [me]);

  return (
    <Grid xl={12}>
      <Card sx={{ mt: 2, p: 3 }}>
        <Stack direction="row" justifyContent="space-between" sx={{ pb: 2 }} columnGap={2}>
          <Typography variant="h6">{me?.fullName}</Typography>
          <Typography variant="body2" sx={{ pt: 0.4 }}>
            {me?.userId.toString().padStart(7, '0')}
          </Typography>
        </Stack>

        <Stack>
          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Username:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.username}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Sponsor:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.sponsor?.fullName}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Email:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.email}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Mobile:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.mobile}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Address:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.primaryAddress}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Address 2:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.secondaryAddress}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                City:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.city}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                ZIP Code:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.zipCode}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                State:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.state}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Asset ID:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.assetId}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Placement Parent:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{me?.placementParent?.fullName}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Miner Left:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{children?.LEFT}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
            <Stack width={0.5}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Miner Right:
              </Typography>
            </Stack>
            <Stack width={1}>
              <Typography variant="body2">{children?.RIGHT}</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

        <Stack sx={{ mt: 2 }}>
          {me?.memberWallets?.map((item) => (
            <Stack sx={{ pb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {item?.payout?.method}
              </Typography>
              <Typography variant="body2">{item?.address}</Typography>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Grid>
  );
}
