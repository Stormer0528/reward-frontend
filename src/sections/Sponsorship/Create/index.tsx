import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useMemo, useState } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { removeSpecialCharacters } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
// TODO: Move this to section
import SearchMiner from 'src/components/SearchMiner';

import { useFetchPackages } from 'src/sections/Package/useApollo';
import PlacementSelector from 'src/sections/Placement/components/placementSelector';

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

  const { packages } = useFetchPackages({
    filter: { status: true, enrollVisibility: true },
    sort: '-amount',
  });

  const onSubmit = handleSubmit(async ({ firstName, lastName, uname, ...rest }) => {
    try {
      const { data } = await createAddMemberOrder({
        variables: {
          data: {
            ...rest,
            username: removeSpecialCharacters(uname),
            state,
            country,
            fullName: `${firstName} ${lastName}`,
            ...(user?.isTexitRanger && { sponsorId }),
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
    <>
      <Box
        rowGap={2}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
      >
        <Field.Text name="firstName" label="First Name" required />
        <Field.Text name="lastName" label="Last Name" required />
        <Field.Text name="email" label="Email Address" required />
        <Field.Phone name="mobile" label="Phone" />
        <Field.Text name="primaryAddress" label="Address" />
        <Field.Text name="secondaryAddress" label="Address 2" />
        <Field.Text name="city" label="City" />

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

        <Field.Text name="zipCode" label="Zip Code" />

        <Field.Text
          name="assetId"
          label="Coin ID"
          placeholder="Do you have a Coin ID? Enter the ID here"
        />

        <Field.Text name="uname" label="Affiliate ID" placeholder="5 characters or more" required />

        {user?.isTexitRanger && (
          <SearchMiner label="Sponsor" setMemberId={setSponsorId} currentMember={user} />
        )}

        <Field.Select name="packageId" label="Package" fullWidth required>
          {packages.map((option) => (
            <MenuItem key={option?.id} value={option?.id}>
              {`$${option?.amount} @ ${option?.productName}`}
            </MenuItem>
          ))}
        </Field.Select>

        <PlacementSelector />

        <Field.Select name="placementPosition" label="Placement Position">
          <MenuItem key="LEFT" value="LEFT">
            LEFT
          </MenuItem>
          <MenuItem key="RIGHT" value="RIGHT">
            RIGHT
          </MenuItem>
        </Field.Select>
      </Box>

      <Field.Text
        name="note"
        label="Note"
        multiline
        rows={3}
        placeholder="Write a comment here (optional)"
        sx={{ mt: 2 }}
      />

      <Box display="flex" justifyContent="flex-end" gap={2} alignItems="center" mt={2}>
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
    </>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderForm}
    </Form>
  );
}
