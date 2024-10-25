import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/useBoolean';

import { PAYMENT_TYPE } from 'src/consts';

import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useSignUp } from './useApollo';
import { useFetchPackages } from '../Sales/useApollo';

// ----------------------------------------------------------------------

export type SignUpSchemaType = zod.infer<typeof SignUpSchema>;

export const SignUpSchema = zod
  .object({
    firstName: zod.string({ required_error: 'First Name is required' }),
    lastName: zod.string({ required_error: 'Last Name is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address is provided' }),
    mobile: zod.string(),
    city: zod.string(),
    zipCode: zod.string(),
    state: zod.string(),
    primaryAddress: zod.string(),
    packageId: zod.string(),
    sponsorUserId: zod.string(),
    secondaryAddress: zod.string(),
    paymentMethod: zod.string(),
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm Password is required!' }),
    assetId: zod.string({ required_error: 'Coin ID is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

export function SignUpView() {
  const [errorMsg, setErrorMsg] = useState('');
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
    mobile: '',
    sponsorUserId: refID,
    email: '',
    packageId: '',
    assetId: '',
    password: '',
    paymentMethod: '',
    primaryAddress: '',
    secondaryAddress: '',
    state: '',
    zipCode: '',
    city: '',
  };

  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { packages, fetchPackages } = useFetchPackages();
  const { submitSignUp } = useSignUp();

  const onSubmit = handleSubmit(
    async ({ confirmPassword, firstName, lastName, sponsorUserId, ...rest }) => {
      try {
        localStorage.setItem('payout_reference', refID || sponsorUserId);

        const { data } = await submitSignUp({
          variables: {
            data: {
              username: rest.email.split('@')[0],
              fullName: `${firstName} ${lastName}`,
              sponsorUserId: refID || sponsorUserId,
              ...rest,
            },
          },
        });

        if (data) {
          const searchParams = new URLSearchParams({ email: rest.email }).toString();
          router.push(`${paths.verifyEmail}?${searchParams}`);
        }
      } catch (error) {
        console.error(error);
        setErrorMsg(error instanceof Error ? error.message : error);
      }
    }
  );

  useEffect(() => {
    fetchPackages({ variables: { filter: { status: true, enrollVisibility: true } } });

    localStorage.setItem('payout_reference', refID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5">Fill out the form and let us blast off...</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Already have an account?
        </Typography>

        <Link component={RouterLink} href={paths.auth.signIn} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
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
        <Field.Text name="sponsorUserId" label="Sponsor ID" disabled={Boolean(refID)} />
        <Field.Text
          name="assetId"
          label="Coin ID"
          placeholder="enter the 6-digit Coin ID"
          required
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="primaryAddress" label="Address" />
        <Field.Text name="secondaryAddress" label="Address 2" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="city" label="City" />
        <Field.Text name="state" label="State" />
        <Field.Text name="zipCode" label="Zip Code" />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Select
          name="packageId"
          label="Pacakage"
          inputProps={{ sx: { width: 'auto', minWidth: '100%' } }}
        >
          {packages.map((option) => (
            <MenuItem key={option?.id} value={option?.id}>
              {`$${option?.amount} @ ${option?.productName}`}
            </MenuItem>
          ))}
        </Field.Select>

        <Field.Select name="paymentMethod" label="Payment Method">
          {PAYMENT_TYPE.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Field.Select>
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

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Join Now..."
      >
        Join Now
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}
