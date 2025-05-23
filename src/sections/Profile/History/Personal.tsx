import type { Member, Setting as SettingType } from 'src/__generated__/graphql';

import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/useBoolean';

import { formatDate } from 'src/utils/format-time';
import { formatID, truncateMiddle } from 'src/utils/helper';

import { Iconify } from 'src/components/Iconify';

import Setting from './Setting';
import { useFetchMemberOvewview } from '../useApollo';

interface Props {
  me: Member;
}

export default function Personal({ me }: Props) {
  const copy = useBoolean();
  const open = useBoolean();
  const [children, setChildren] = useState<any>();

  const { overview } = useFetchMemberOvewview(me.id);

  const handleCopy = async (addressValue: string) => {
    try {
      await navigator.clipboard.writeText(addressValue);
      copy.onTrue();

      setTimeout(() => {
        copy.onFalse();
      }, 3000);
    } catch (err) {
      console.error('Failed to copy test: ', err);
    }
  };

  useEffect(() => {
    setChildren(
      me?.placementChildren?.reduce(
        (prev, save) => ({ ...prev, [save?.placementPosition ?? '']: save?.fullName }),
        {}
      )
    );
  }, [me]);

  return (
    <>
      <Grid xl={12}>
        <Card sx={{ mt: 2, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" sx={{ pb: 2 }} columnGap={2}>
            <Typography variant="h6">{me?.fullName}</Typography>
            <Stack direction="row" spacing={1} justifyContent="end" alignItems="center">
              <Typography variant="body2" sx={{ pt: 0.4 }}>
                {formatID(me.ID!)}
              </Typography>
              <IconButton onClick={open.onTrue}>
                <Iconify icon="ant-design:setting-twotone" />
              </IconButton>
            </Stack>
          </Stack>

          <Stack>
            {/* Basic info */}
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
                  Country:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.country}</Typography>
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
                  TXC Coin ID:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.assetId}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  ETH Coin ID:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.ethAssetId}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Joined At:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">
                  {me?.createdAt ? formatDate(me.createdAt) : ''}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Commission Default:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.commissionDefault}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Purchase Limit:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{overview?.orderedAvailablePoint}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} pb={1}>
              <Stack width={0.5}>
                <Typography variant="body2" fontWeight="bold">
                  Peer Address:
                </Typography>
              </Stack>

              {me?.peerETHAddress && (
                <Stack width={1} direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">
                    {truncateMiddle(me?.peerETHAddress ?? '', 30)}
                  </Typography>
                  <Iconify
                    sx={{ cursor: 'pointer' }}
                    icon={copy.value ? 'system-uicons:check' : 'stash:copy-light'}
                    onClick={() => handleCopy(me?.peerETHAddress ?? '')}
                  />
                </Stack>
              )}
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

            {/* Group info */}
            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Group:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me?.groupSetting?.name}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Team Strategy:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{me.teamStrategy}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Starting Points:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{`L${me?.commission?.begL ?? 0}, R${me?.commission?.begR ?? 0}`}</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pb: 1 }}>
              <Stack width={0.5}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  New Points:
                </Typography>
              </Stack>
              <Stack width={1}>
                <Typography variant="body2">{`L${me?.commission?.newL ?? 0}, R${me?.commission?.newR ?? 0}`}</Typography>
              </Stack>
            </Stack>

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

          {/* Wallet info */}
          <Stack sx={{ mt: 2 }}>
            {me?.memberWallets?.map((item) => (
              <Stack sx={{ pb: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {item?.payout?.method}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">{item?.address}</Typography>
                  <Typography variant="body2">{item.percent / 100} %</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          {/* Setting info */}
          <Typography variant="body1" fontWeight="bold" my={2}>
            Setting
          </Typography>

          <Stack direction="row" spacing={2} pb={1}>
            <Stack width={0.5}>
              <Typography variant="body2" fontWeight="bold">
                Communication
              </Typography>
            </Stack>
            <Stack width={1}>
              <Iconify
                icon={
                  me?.setting?.communication
                    ? 'ic:twotone-check-box'
                    : 'iconamoon:sign-times-square-duotone'
                }
                color={me?.setting?.communication ? 'green' : 'red'}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>

      <Setting open={open} setting={me?.setting ?? ({} as SettingType)} />
    </>
  );
}
