import type { Member } from 'src/__generated__/graphql';

import { z as zod } from 'zod';
import isEqual from 'lodash/isEqual';
import { useForm } from 'react-hook-form';
import { useMemo, useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApolloError, useMutation, useLazyQuery, useQuery as useGraphQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import MemberWallets from './MemberWallets';
import { UPDATE_MEMBER, FETCH_MEMBERS_QUERY, FETCH_PAYOUTS_QUERY } from '../query';

// ----------------------------------------------------------------------

type Props = {
  me: Member;
};

interface Edit {
  id: string;
  username: string;
}

// ----------------------------------------------------------------------
export type MemberGeneralSchemaType = zod.infer<typeof MemberGeneralSchema>;

const MemberGeneralSchema = zod.object({
  username: zod.string({ required_error: 'Username is required' }),
  fullName: zod.string(),
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address is provided' }),
  mobile: zod.string({ required_error: 'Mobile is required' }),
  city: zod.string().optional().nullable(),
  zipCode: zod.string().optional().nullable(),
  state: zod.string().optional().nullable(),
  primaryAddress: zod.string({ required_error: 'Address is required' }),
  secondaryAddress: zod.string().optional().nullable(),
  sponsorId: zod.string().optional().nullable(),
  assetId: zod.string({ required_error: 'AssetID is required' }),
  memberWallets: zod.array(
    zod.object({
      payoutId: zod.string({ required_error: 'Payout is required' }),
      address: zod.string({ required_error: 'Address is required' }),
      percent: zod.number({ required_error: 'Percent is required' }),
    })
  ),
});

export default function MemberGeneral({ me }: Props) {
  const router = useRouter();

  const [firstName, setFirstName] = useState<string>(me.fullName.split(' ')[0]);
  const [lastName, setLastName] = useState<string>(me.fullName.split(' ')[1]);

  const { data: payoutsData } = useGraphQuery(FETCH_PAYOUTS_QUERY, {
    variables: {},
  });

  const [fetchMembers, { loading: memberLoading, data: memberData }] =
    useLazyQuery(FETCH_MEMBERS_QUERY);

  const payouts = payoutsData?.payouts.payouts ?? [];
  const members = memberData?.members.members ?? [];

  const [email, setEmail] = useState<string>();
  const [member, setMember] = useState<Edit>();

  const [submit, { loading }] = useMutation(UPDATE_MEMBER);

  const defaultValues = useMemo(() => {
    const { fullName } = me;
    const { data } = MemberGeneralSchema.safeParse(me);

    return data
      ? { ...data, firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1] }
      : ({} as MemberGeneralSchemaType);
  }, [me]);

  const methods = useForm<MemberGeneralSchemaType>({
    resolver: zodResolver(MemberGeneralSchema),
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

      if (hasDuplicates(newMember.memberWallets)) {
        toast.warning('Duplicated wallet address!');
        return;
      }

      const total = newMember.memberWallets.reduce(
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
              zipCode: newMember.zipCode,
              wallets: newMember.memberWallets.map(({ percent, ...rest }) => ({
                percent: percent * 100,
                ...rest,
              })),
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
            </Box>
          </Card>
        </Grid>
        <Grid md={12} xl={6}>
          <MemberWallets payouts={payouts} wallets={me?.memberWallets ?? []} />
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
