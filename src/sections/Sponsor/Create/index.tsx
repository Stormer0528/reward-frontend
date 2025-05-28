import type { UseBooleanReturn } from 'minimal-shared/hooks';
import type { UseTabsReturn } from 'src/hooks/use-tabs';

import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { removeSpecialCharacters } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import SearchMiner from 'src/components/SearchMiner';

import { useFetchPackages } from 'src/sections/Sales/useApollo';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useCreateAddMemberOrder } from '../useApollo';

interface Props {
  add: UseBooleanReturn;
  tabs: UseTabsReturn;
}

export default function AddMiner({ add, tabs }: Props) {
  const router = useRouter();
  const { user } = useAuthContext();

  const [state, setState] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [sponsorId, setSponsorId] = useState<string>('');
  const [packageId, setPackageId] = useState<string>();

  const location = useLocation();

  const defaultValues = {
    email: '',
    assetId: null,
    note: '',
    uname: '',
    primaryAddress: '',
    secondaryAddress: '',
    state: '',
    zipCode: '',
    city: '',
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { packages, fetchPackages } = useFetchPackages();
  const { createAddMemberOrder } = useCreateAddMemberOrder();

  const onSubmit = handleSubmit(async ({ firstName, lastName, uname, ...rest }) => {
    try {
      if (!packageId) {
        toast.error('PackageId is required');
        return;
      }

      const { data } = await createAddMemberOrder({
        variables: {
          data: {
            ...rest,
            username: removeSpecialCharacters(uname),
            state,
            country,
            ...(user?.isTexitRanger && { sponsorId }),
            fullName: `${firstName} ${lastName}`,
            packageId,
          },
        },
      });

      if (data) {
        tabs.onChange(null as any, 'added');
        add.onFalse();
        router.push(paths.pages.order.detail(data.createAddMemberOrder.id));
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('username')) {
          setError('uname', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error.message);
      } else {
        toast.error(err);
      }
    }
  });

  useEffect(() => {
    fetchPackages({
      variables: { filter: { status: true, enrollVisibility: true }, sort: '-amount' },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePackageChange = (value: string) => {
    setPackageId(value);
  };

  const renderForm = (
    <Stack spacing={3}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="firstName" label="First Name" required />
        <Field.Text name="lastName" label="Last Name" required />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="email" label="Email Address" required />
        <Field.Phone name="mobile" label="Phone" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="primaryAddress" label="Address" />
        <Field.Text name="secondaryAddress" label="Address 2" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Autocomplete
          freeSolo
          fullWidth
          options={countries.getNames()}
          getOptionLabel={(option: any) => option}
          defaultValue="United States of America"
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

        <Autocomplete
          freeSolo
          fullWidth
          options={states}
          getOptionLabel={(option: any) => option.name}
          renderInput={(params) => (
            <TextField {...params} name="state" label="States" margin="none" />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option!.name}>
              {option.name}
            </li>
          )}
          onChange={(_, value: any) => setState(value.name)}
          onInputChange={(_, value: any) => setState(value)}
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="city" label="City" />

        <Field.Text name="zipCode" label="Zip Code" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Stack width={1}>
          <Field.Select
            name="packageId"
            label="Package"
            fullWidth
            inputProps={{ sx: { width: 'auto', minWidth: '100%' } }}
            value={location.state?.packageId ?? packageId}
            onChange={(event) => handlePackageChange(event.target.value)}
            required
          >
            {packages.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {`$${option?.amount} @ ${option?.productName}`}
              </MenuItem>
            ))}
          </Field.Select>
        </Stack>

        <Stack direction="row" width={1} spacing={2}>
          <Field.Text
            name="uname"
            label="Affiliate ID"
            placeholder="5 characters or more"
            InputLabelProps={{ shrink: true }}
            required
          />

          {user?.isTexitRanger && (
            <SearchMiner label="Sponsor" setMemberId={setSponsorId} currentMember={user?.sponsor} />
          )}
        </Stack>
      </Stack>

      <Field.Text
        name="note"
        label="Note"
        multiline
        rows={3}
        placeholder="Write a comment here (optional)"
        InputLabelProps={{ shrink: true }}
      />

      <Box display="flex" justifyContent="flex-end" gap={2} alignItems="center">
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </Box>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </Form>
  );
}
