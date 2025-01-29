import type { Promo } from 'src/__generated__/graphql';

import states from 'states-us';
import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { removeSpecialCharacters } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { Schema, type SchemaType } from './schema';
import { useFetchPackages } from '../Sales/useApollo';
import { useFetchPayments } from '../Payment/useApollo';
import { useSignUp, useFetchPromos } from './useApollo';

// ----------------------------------------------------------------------

export function SignUpView() {
  const [errorMsg, setErrorMsg] = useState('');
  const [state, setState] = useState<string>();
  const [packageId, setPackageId] = useState<string>();
  const [country, setCountry] = useState<string>();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const referralID = queryParams.get('sponsor');
  const localStorageReferralID = localStorage.getItem('payout_reference');
  const refID = referralID || localStorageReferralID || '';

  const router = useRouter();

  const password = useBoolean();

  const defaultValues = {
    firstName: '',
    lastName: '',
    username: '',
    sponsorUserId: refID,
    email: '',
    assetId: null,
    promoCode: '',
    password: '',
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
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { payments } = useFetchPayments();
  const { promos, fetchPromos } = useFetchPromos();
  const { packages, fetchPackages } = useFetchPackages();
  const { submitSignUp } = useSignUp();

  const onSubmit = handleSubmit(
    async ({ confirmPassword, firstName, lastName, sponsorUserId, username, ...rest }) => {
      try {
        localStorage.setItem('payout_reference', refID || sponsorUserId);

        if (!packageId) {
          toast.error('PackageId is required');
        }

        const { data } = await submitSignUp({
          variables: {
            data: {
              ...rest,
              username: removeSpecialCharacters(username),
              state,
              country,
              fullName: `${firstName} ${lastName}`,
              sponsorUserId: refID || sponsorUserId,
              packageId: packageId!,
            },
          },
        });

        if (data) {
          const searchParams = new URLSearchParams({ email: rest.email }).toString();
          router.push(`${paths.auth.verifyEmail}?${searchParams}`);
        }
      } catch (error) {
        console.error(error);
        setErrorMsg(error instanceof Error ? error.message : error);
      }
    }
  );

  useEffect(() => {
    fetchPackages({
      variables: { filter: { status: true, enrollVisibility: true }, sort: '-amount' },
    });

    fetchPromos({ variables: { filter: { status: true } } });

    localStorage.setItem('payout_reference', refID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePackageChange = (value: string) => {
    setPackageId(value);
  };

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5, outline: 'none' }} id="sign-up" tabIndex={-1}>
      <Typography variant="h2" textAlign="center">
        Fill out the form and let us blast off...
      </Typography>
    </Stack>
  );

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
        <Field.Select name="promoCode" label="Promo">
          {promos.map((option: Promo) => (
            <MenuItem key={option.id} value={option.code}>
              {option.description}
            </MenuItem>
          ))}
        </Field.Select>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={1}>
          <Field.Select
            name="packageId"
            label="Package"
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

          <IconButton
            onClick={() => {
              window.open(paths.pages.calculator.root, '_blank');
            }}
          >
            <Iconify icon="system-uicons:calculator" width={30} />
          </IconButton>
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>This will be your affiliate ID: </Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="username"
            label="Affiliate ID"
            placeholder="5 characters or more"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>How would you like to pay?</Typography>
        </Stack>
        <Stack width={1}>
          <Field.Select name="paymentMethod" label="Payment Method" required>
            {payments.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Field.Select>
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>How did you hear about us?</Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="sponsorUserId"
            label="Sponsor ID"
            InputLabelProps={{ shrink: true }}
            placeholder="name or ID of the person"
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>Have a Cold Storage Coin?</Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="assetId"
            label="Coin ID"
            InputLabelProps={{ shrink: true }}
            placeholder="Do you have a coin? Enter the ID here"
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text
          name="password"
          label="Password"
          placeholder="6+ characters"
          type={password.value ? 'text' : 'password'}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Field.Text
          name="confirmPassword"
          label="Confirm New Password"
          type={password.value ? 'text' : 'password'}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="flex-end">
        <LoadingButton
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </Stack>
    </Stack>
  );

  // const renderFooter = (
  //   <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mt: 3 }}>
  //     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //       Already have an account?
  //     </Typography>

  //     <Stack direction="row" columnGap={2}>
  //       <Link component={RouterLink} href={paths.auth.signIn} variant="subtitle2">
  //         Sign in
  //       </Link>

  //       <Link component={RouterLink} href={paths.calculator.root} variant="subtitle2" color="blue">
  //         Calculator
  //       </Link>
  //     </Stack>
  //   </Stack>
  // );

  return (
    <Container sx={{ pb: 5 }}>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </Container>
  );
}
