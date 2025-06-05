import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useMemo, useState } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { removeSpecialCharacters } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
// TODO: Move this to section
import SearchMiner from 'src/components/SearchMiner';

import { RHFPackageSelect } from 'src/sections/Package/RHFPackageSelect';

import { useAuthContext } from 'src/auth/hooks';

import { useCreateAddMemberOrder } from '../useApollo';
import { SponsorshipCreateSchema, type SponsorshipCreateSchemaType } from './schema';

export function SponsorshipCreateView() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [state, setState] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [sponsorId, setSponsorId] = useState<string>('');

  const defaultValues = useMemo(
    () => ({
      email: '',
      assetId: null,
      note: '',
      uname: '',
      primaryAddress: '',
      secondaryAddress: '',
      state: '',
      zipCode: '',
      city: '',
    }),
    []
  );

  const methods = useForm<SponsorshipCreateSchemaType>({
    resolver: zodResolver(SponsorshipCreateSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { createAddMemberOrder } = useCreateAddMemberOrder();

  const onSubmit = handleSubmit(async ({ firstName, lastName, uname, ...rest }) => {
    try {
      const { data } = await createAddMemberOrder({
        variables: {
          data: {
            ...rest,
            username: removeSpecialCharacters(uname),
            state,
            country,
            ...(user?.isTexitRanger && { sponsorId }),
            fullName: `${firstName} ${lastName}`,
          },
        },
      });

      if (data) {
        router.push(paths.pages.order.detail(data.createAddMemberOrder.id));
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('username')) {
          setError('uname', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error.message);
      }
    }
  });

  const renderForm = (
    <Stack spacing={{ xs: 3, md: 5 }} sx={{ mx: 'auto', maxWidth: { xs: 720, xl: 880 } }}>
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
        {/* TODO: Clean up duplicated code???? */}
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
          <RHFPackageSelect
            name="packageId"
            label="Package"
            fullWidth
            required
            slotProps={{ input: { sx: { width: 'auto', minWidth: '100%' } } }}
            filter={{ status: true, enrollVisibility: true }}
            sort="-amount"
          />
        </Stack>

        <Stack direction="row" width={1} spacing={2}>
          <Field.Text
            name="uname"
            label="Affiliate ID"
            placeholder="5 characters or more"
            slotProps={{ inputLabel: { shrink: true } }}
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
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <Box display="flex" justifyContent="flex-end" gap={2} alignItems="center">
        <Button
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </Form>
  );
}
