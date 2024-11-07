import type { Member } from 'src/__generated__/graphql';

import isEqual from 'lodash/isEqual';
import { useForm } from 'react-hook-form';
import { useMemo, useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApolloError, useMutation, useLazyQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { CONTACT, TXC_WALLET, OTHER_WALLET } from 'src/consts';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import TXCWallets from './txcWallets';
import OtherWallets from './otherWallets';
import { Schema, type SchemaType } from './schema';
import { UPDATE_MEMBER, FETCH_MEMBERS_QUERY } from '../query';

// ----------------------------------------------------------------------

type Props = {
  me: Member;
};

interface Edit {
  id: string;
  username: string;
}

const getWallets = (memberWallets: any) => {
  const data = memberWallets.reduce(
    (prev: any, save: any) => ({ ...prev, [save.payout.id]: save }),
    {}
  );

  const txcWallets: any = [];
  const otherWallets: any = [];

  TXC_WALLET.forEach((item: any) => {
    if (data[item.id]) {
      txcWallets.push({
        id: data[item.id].id,
        payoutId: item.id,
        address: data[item.id].address,
        percent: data[item.id].percent,
        note: data[item.id].note,
      });
    }
  });

  OTHER_WALLET.forEach((item: any) => {
    if (data[item.id]) {
      otherWallets.push({
        id: data[item.id].id,
        payoutId: item.id,
        address: data[item.id].address,
        note: data[item.id].note,
      });
    }
  });

  return [txcWallets, otherWallets];
};

export default function MemberGeneral({ me }: Props) {
  const router = useRouter();

  const [txcWallets, otherWallets] = getWallets(me.memberWallets);

  const [firstName, setFirstName] = useState<string>(me.fullName.split(' ')[0]);
  const [lastName, setLastName] = useState<string>(me.fullName.split(' ')[1]);

  const [fetchMembers, { loading: memberLoading, data: memberData }] =
    useLazyQuery(FETCH_MEMBERS_QUERY);

  const members = memberData?.members.members ?? [];

  const [email, setEmail] = useState<string>();
  const [member, setMember] = useState<Edit>();

  const [submit, { loading }] = useMutation(UPDATE_MEMBER);

  const defaultValues = useMemo(() => {
    const { fullName } = me;
    const { data } = Schema.safeParse({ ...me, txcWallets, otherWallets });

    return data
      ? { ...data, firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1] }
      : ({} as SchemaType);
  }, [me, txcWallets, otherWallets]);

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { setError, handleSubmit } = methods;

  const hasDuplicates = (arr: any[]) => {
    const seen = new Set();

    return arr.some((item: any) => {
      if (seen.has(item.address)) {
        return true;
      }

      seen.add(item.address);

      return false;
    });
  };

  const onSubmit = handleSubmit(async (newMember) => {
    try {
      if (isEqual(newMember, defaultValues)) {
        toast.warning('No changes to save');
        return;
      }

      if (hasDuplicates([...newMember.txcWallets, ...newMember.otherWallets])) {
        toast.warning('Duplicated wallet address!');
        return;
      }

      const total = newMember.txcWallets.reduce(
        (prev: number, save: any) => prev + save.percent,
        0
      );

      if (total === 100) {
        await submit({
          variables: {
            data: {
              id: me.id,
              username: newMember.username,
              email: newMember.email,
              fullName: `${firstName} ${lastName}`,
              mobile: newMember.mobile,
              primaryAddress: newMember.primaryAddress,
              secondaryAddress: newMember.secondaryAddress,
              sponsorId: member?.id,
              assetId: newMember.assetId,
              city: newMember.city,
              state: newMember.state,
              syncWithSendy: newMember.syncWithSendy,
              preferredContact: newMember.preferredContact,
              preferredContactDetail: newMember.preferredContactDetail,
              zipCode: newMember.zipCode,
              wallets: [...newMember.txcWallets, ...newMember.otherWallets].map(
                ({ percent, ...rest }) => ({
                  percent: percent * 100,
                  ...rest,
                })
              ),
            },
          },
        });

        toast.success('Update success!');

        router.push(paths.dashboard.profile.root);
      } else {
        toast.warning('Sum of percent muse be 100%');
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;
        if (error.path?.includes('email')) {
          setError('email', { type: 'manual', message: error?.message || '' });
        }
      }
      toast.error(err.message);
    }
  });

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { data } = await fetchMembers({
        variables: { filter: { [event.target.name]: event.target.value } },
      });

      if (data?.members?.members?.length) {
        if (data?.members?.members[0]?.id !== me.id)
          toast.warning(`This ${event.target.name} is already exist`);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  };

  useEffect(() => {
    fetchMembers({
      variables: {
        page: '1,5',
        filter: { OR: [{ username: { contains: member?.username ?? '', mode: 'insensitive' } }] },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member]);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid md={12} xl={6}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <Field.Text name="username" label="Username" />
              <Field.Text
                name="email"
                label="Email"
                defaultValue={me.email}
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleSearchChange(event);

                  setEmail(event.target.value);
                }}
              />
              <Field.Text
                name="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Field.Text
                name="lastName"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Field.Phone name="mobile" label="Mobile" />
              <Autocomplete
                disabled
                fullWidth
                options={members}
                loading={memberLoading}
                loadingText={<LoadingButton loading={memberLoading} />}
                getOptionLabel={(option) => option!.username}
                value={member ?? me!.sponsor}
                renderInput={(params) => (
                  <TextField {...params} label="Sponsor Name" margin="none" />
                )}
                renderOption={(props, option) => (
                  <li {...props} key={option!.username}>
                    {option!.username}
                  </li>
                )}
                onInputChange={(_, username: string) => {
                  setMember({ id: me?.sponsorId ?? '', username });
                }}
                onChange={(_, value) => {
                  setMember({ id: value?.id ?? '', username: value?.username ?? '' });
                }}
              />
              <Field.Text name="primaryAddress" label="Address" />
              <Field.Text name="secondaryAddress" label="Address Line 2" />
              <Field.Text name="city" label="City" />
              <Field.Text name="state" label="State" />
              <Field.Text name="zipCode" label="ZIP Code" />
              <Field.Text name="assetId" label="Asset ID" disabled />
              <Field.Select name="preferredContact" label="Preferred Contact">
                {CONTACT.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Field.Select>
              <Field.Text name="preferredContactDetail" label="Preferred Contact Detail" />
            </Box>
          </Card>
        </Grid>
        <Grid md={12} xl={6}>
          <TXCWallets wallets={txcWallets} />
          <OtherWallets wallets={otherWallets} />
        </Grid>
      </Grid>

      <Stack alignItems="flex-start" sx={{ mt: 2 }}>
        <LoadingButton type="submit" variant="contained" loading={loading}>
          Save Changes
        </LoadingButton>
      </Stack>
    </Form>
  );
}
