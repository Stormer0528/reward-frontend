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
import { formatID, makeDecimal } from 'src/utils/helper';

import { CHAIN_UNIT } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

import { useFetchMyAddress } from 'src/sections/Order/useApollo';

import Setting from './Setting';
import { useFetchMemberOvewview } from '../useApollo';

interface Props {
  me: Member;
}

export default function Personal({ me }: Props) {
  const open = useBoolean();
  const [children, setChildren] = useState<any>();

  const { overview } = useFetchMemberOvewview(me.id);
  const { addresses, fetchMyAddress } = useFetchMyAddress();

  useEffect(() => {
    setChildren(
      me?.placementChildren?.reduce(
        (prev, save) => ({ ...prev, [save?.placementPosition ?? '']: save?.fullName }),
        {}
      )
    );

    fetchMyAddress();
  }, [me, fetchMyAddress]);

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
          <Typography variant="body1" fontWeight="bold" mt={2}>
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

          <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

          {/* Address info */}

          <Typography variant="body1" fontWeight="bold" mt={2}>
            Wallet
          </Typography>

          {addresses.length
            ? addresses?.map((item) => (
                <>
                  <Stack direction="row" spacing={2} pb={1}>
                    <Stack width={0.5}>
                      <Typography variant="body2" fontWeight="bold">
                        Address:
                      </Typography>
                    </Stack>
                    <Stack width={1}>{item?.address}</Stack>
                  </Stack>

                  <Stack direction="row" spacing={2} pb={1}>
                    <Stack width={0.5}>
                      <Typography variant="body2" fontWeight="bold">
                        Chain:
                      </Typography>
                    </Stack>
                    <Stack width={1}>{item?.chain}</Stack>
                  </Stack>

                  <Stack direction="row" spacing={2} pb={1}>
                    <Stack width={0.5}>
                      <Typography variant="body2" fontWeight="bold">
                        Balance:
                      </Typography>
                    </Stack>
                    <Stack width={1}>
                      {item?.balance
                        ? makeDecimal(
                            item.balance / 10 ** CHAIN_UNIT[item?.chain!],
                            CHAIN_UNIT[item?.chain!]
                          )
                        : 0}
                    </Stack>
                  </Stack>
                </>
              ))
            : 'You have not address yet'}
        </Card>
      </Grid>

      <Setting open={open} setting={me?.setting ?? ({} as SettingType)} />
    </>
  );
}
