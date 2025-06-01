import countries from 'country-list';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { ApolloError } from '@apollo/client';
import { states, type State } from 'states-us';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { removeSpecialCharacters } from 'src/utils/helper';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import Calculator from './Calculator';
import { Schema, type SchemaType } from './schema';
import { useFetchPackages } from '../Sales/useApollo';
import { useFetchPayments } from '../Payment/useApollo';
import { useCreateSignUpOrder } from '../Order/useApollo';
import { useSignUp, useSendEmailVerificationLink } from './useApollo';

// ----------------------------------------------------------------------

export function SignUpView() {
  const router = useRouter();
  const location = useLocation();
  const calculator = useBoolean();

  const [packageId, setPackageId] = useState<string>();

  const referralID = new URLSearchParams(location.search).get('sponsor');
  const localStorageReferralID = localStorage.getItem('payout_reference');
  const refID = referralID || localStorageReferralID || '';

  const defaultValues = {
    city: '',
    note: '',
    uname: '',
    email: '',
    state: '',
    assetId: '',
    zipCode: '',
    password: '',
    primaryAddress: '',
    secondaryAddress: '',
    sponsorUserId: refID,
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

  const { submitSignUp } = useSignUp();
  const { payments } = useFetchPayments();
  const { user, signOut } = useAuthContext();
  const { createSignUpOrder } = useCreateSignUpOrder();
  const { packages, fetchPackages } = useFetchPackages();
  const { sendVerificationLink } = useSendEmailVerificationLink();

  const handleSignOut = useCallback(async () => {
    try {
      signOut();
    } catch (error) {
      console.error(error);
    }
  }, [signOut]);

  const onSubmit = handleSubmit(
    async ({ confirmPassword, firstName, lastName, sponsorUserId, uname, ...rest }) => {
      try {
        if (user) {
          await handleSignOut();
        }

        localStorage.setItem('payout_reference', refID || sponsorUserId!);

        if (!packageId) {
          toast.error('PackageId is required');
          return;
        }

        const { data } = await submitSignUp({
          variables: {
            data: {
              ...rest,
              username: removeSpecialCharacters(uname),
              fullName: `${firstName} ${lastName}`,
              sponsorUserId,
              packageId,
            },
          },
        });

        if (data) {
          await sendVerificationLink({ variables: { data: { email: rest.email } } });

          const searchParams = new URLSearchParams({ email: rest.email }).toString();

          if (rest.paymentMethod === 'Crypto') {
            const { data: order } = await createSignUpOrder({
              variables: { data: { memberId: data.signUpMember.id, packageId } },
            });

            if (order) {
              window.open(`${paths.pages.order.detail(order.createSignUpOrder.id)}`);

              router.push(`${paths.auth.verifyResult}?${searchParams}`);
            }
          } else {
            router.push(`${paths.auth.verifyResult}?${searchParams}`);
          }
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
    }
  );

  useEffect(() => {
    fetchPackages({
      variables: { filter: { status: true, enrollVisibility: true }, sort: '-amount' },
    });

    localStorage.setItem('payout_reference', refID);
  }, [fetchPackages, refID]);

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
        <Field.Autocomplete
          name="country"
          label="Country"
          defaultValue="United States of America"
          freeSolo
          fullWidth
          options={countries.getNames()}
          getOptionLabel={(option) => option}
        />

        <Field.Autocomplete
          name="state"
          label="States"
          freeSolo
          fullWidth
          options={states.map((state: State) => state.name)}
          getOptionLabel={(option: any) => option}
          isOptionEqualToValue={(option, value) => option === value}
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Text name="city" label="City" />

        <Field.Text name="zipCode" label="Zip Code" />
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Field.Select
          name="packageId"
          label="Package"
          fullWidth
          slotProps={{ input: { sx: { width: 'auto', minWidth: '100%' } } }}
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
        <IconButton onClick={calculator.onTrue}>
          <Iconify icon="solar:calculator-linear" width={24} height={24} />
        </IconButton>
      </Stack>

      <Field.Text
        name="note"
        label="Note"
        multiline
        rows={3}
        placeholder="Write a comment here (optional)"
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
        <Stack width={1}>
          <Typography>This will be your affiliate ID: </Typography>
        </Stack>
        <Stack width={1}>
          <Field.Text
            name="uname"
            label="Affiliate ID"
            placeholder="5 characters or more"
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
            placeholder="Do you have a coin? Enter the ID here"
          />
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Field.Password name="password" label="Password" placeholder="8+ characters" required />

        <Field.Password name="confirmPassword" label="Confirm new password" required />
      </Stack>

      <Box display="flex" justifyContent="flex-end" gap={2} alignItems="center">
        <Link onClick={handleSignOut} variant="subtitle2" sx={{ cursor: 'pointer' }}>
          Click here to sign out
        </Link>
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
    <Container sx={{ pb: 5 }}>
      {renderHead}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Calculator open={calculator} />
    </Container>
  );
}
