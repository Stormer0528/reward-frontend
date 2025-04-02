import axios from 'axios';
import isEqual from 'lodash/isEqual';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { fData } from 'src/utils/formatNumber';

import { CONFIG } from 'src/config';
import { CONTACT } from 'src/consts';
import { type Member, TeamStrategy, CommissionDefaultEnum } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import TXCWallets from './txcWallets';
import OtherWallets from './otherWallets';
import PasswordModal from './PasswordModal';
import { Schema, type SchemaType } from './schema';
import { getWallets, hasDuplicates } from './helper';
import { useFetchMe, useDisable2FA, useFetchMembers, useUpdateMember } from '../useApollo';

// ----------------------------------------------------------------------

type Props = {
  me: Member;
};

interface Edit {
  id: string;
  username: string;
}

export default function MemberGeneral({ me }: Props) {
  const open = useBoolean();
  const router = useRouter();

  const { user } = useAuthContext();

  const [txcWallets, otherWallets] = getWallets(me.memberWallets);

  const [avatar, setAvatar] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [avatarUrl, setAvatarUrl] = useState<File | string | null>(null);
  const [lastName, setLastName] = useState<string>(me.fullName.split(' ')[1]);
  const [firstName, setFirstName] = useState<string>(me.fullName.split(' ')[0]);

  const { loading: memberLoading, members, fetchMembers } = useFetchMembers();

  const [email, setEmail] = useState<string>();
  const [member, setMember] = useState<Edit>();

  const { fetchMe } = useFetchMe();
  const { loading, updateMember } = useUpdateMember();
  const { loading: disableLoading, disable2FA } = useDisable2FA();

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

      if (txcWallets.filter((item: any) => item.isDefault).length > 1) {
        toast.error('You must select only one default');
      }

      if (total === 100) {
        await updateMember({
          variables: {
            data: {
              id: me.id,
              avatar: avatar ?? me?.avatar,
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
              country,
              syncWithSendy: newMember.syncWithSendy,
              preferredContact: newMember.preferredContact,
              preferredContactDetail: newMember.preferredContactDetail,
              zipCode: newMember.zipCode,
              teamStrategy: newMember.teamStrategy as TeamStrategy,
              commissionDefault: newMember.commissionDefault as CommissionDefaultEnum,
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

  const handleDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    setAvatarUrl(newFile);

    const formData = new FormData();

    acceptedFiles.forEach((file) => formData.append('avatar', file));

    try {
      const { data } = await axios.post(`${CONFIG.SITE_URL}/api/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (data) {
        setAvatar(data.files[0].url);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }, []);

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

  const handleDisable = async () => {
    try {
      const { data } = await disable2FA();

      if (data) {
        localStorage.setItem(CONFIG.storageTokenKey, data.disable2FA.accessToken);

        await fetchMe();
      }
    } catch (error) {
      toast.error(error.message);
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
    <>
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
                <Field.UploadAvatar
                  name="avatar"
                  value={avatarUrl}
                  current={me?.avatar ?? ''}
                  validator={(fileData) => {
                    if (fileData.size > 1000000) {
                      return {
                        code: 'file-too-large',
                        message: `File is larger than ${fData(1000000)}`,
                      };
                    }
                    return null;
                  }}
                  sx={{ width: 120, height: 120 }}
                  onDrop={handleDrop}
                />
                <Stack spacing={3}>
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
                </Stack>
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
                <Autocomplete
                  freeSolo
                  fullWidth
                  options={countries.getNames()}
                  getOptionLabel={(option: any) => option}
                  value={country ?? me.country}
                  renderInput={(params) => (
                    <TextField {...params} name="country" label="Country" margin="none" />
                  )}
                  renderOption={(props, option) => (
                    <li {...props} key={option}>
                      {option}
                    </li>
                  )}
                  onChange={(_, value: any) => setCountry(value)}
                  onInputChange={(_, value: any) => setCountry(value)}
                />
                <Field.Text name="state" label="State" />
                <Field.Text name="city" label="City" />
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
                <Field.Select name="teamStrategy" label="Team Strategy">
                  {Object.values(TeamStrategy).map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field.Select>
                <Field.Select name="commissionDefault" label="Commission Default">
                  {Object.values(
                    me.groupSetting?.commissionDefaults.length
                      ? me.groupSetting.commissionDefaults
                      : CommissionDefaultEnum
                  ).map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field.Select>
              </Box>
            </Card>
          </Grid>
          <Grid md={12} xl={6}>
            <TXCWallets wallets={txcWallets} />
            <OtherWallets wallets={otherWallets} />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="flex-start" spacing={2} sx={{ mt: 2 }}>
          {me?.id === user?.id && (
            <>
              {me.OTPEnabled ? (
                <LoadingButton
                  type="button"
                  variant="contained"
                  loading={disableLoading}
                  onClick={handleDisable}
                >
                  Disable 2FA
                </LoadingButton>
              ) : (
                <Button type="button" variant="contained" onClick={open.onTrue}>
                  2FA Settings
                </Button>
              )}
            </>
          )}
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Form>

      <PasswordModal open={open} />
    </>
  );
}
