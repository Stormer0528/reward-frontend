import type { SignInSchemaType } from './schema';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { useLogin } from './useApollo';
import VerifyModal from './VerifyModal';
import { SignInSchema } from './schema';
import Calculator from '../../SignUp/Calculator';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [errorMsg, setErrorMsg] = useState('');

  const { signIn } = useAuthContext();
  const { submitLogin } = useLogin();

  const open = useBoolean();
  const calculator = useBoolean();

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await submitLogin(data);
      const token = response.data?.memberLogin.accessToken ?? '';

      // TODO: Need to confirm 2FA and clean up reset password logic
      if (response.data?.memberLogin.passwordExpired) {
        toast.warning('Your Password Token has expired. Please reset your password');
        router.replace(paths.auth.updatePassword, { state: { token } });
      } else if (response.data?.memberLogin.status === 'success') {
        await signIn(token);
        toast.success(`Welcome to ${CONFIG.APP_NAME}`);
        const returnTo = searchParams.get('returnTo') || paths.dashboard.root;
        router.replace(returnTo);
      } else {
        localStorage.setItem(CONFIG.STORAGE_TOKEN_KEY, token);
        open.onTrue();
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      }
    }
  });

  const renderHead = () => (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5">Sign in to MineTXC</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Don&apos;t have an account?
        </Typography>

        <Stack direction="row" columnGap={2}>
          <Link component={RouterLink} href={`${paths.pages.intro}#sign-up`} variant="subtitle2">
            Join Now
          </Link>

          <Typography
            variant="subtitle2"
            color="blue"
            onClick={calculator.onTrue}
            sx={{ cursor: 'pointer' }}
          >
            Calculator
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text name="email" label="Email address" slotProps={{ inputLabel: { shrink: true } }} />

      <Stack spacing={1.5}>
        <Link
          component={RouterLink}
          href={paths.auth.forgotPassword}
          variant="body2"
          color="inherit"
          sx={{ alignSelf: 'flex-end' }}
        >
          Forgot password?
        </Link>

        <Field.Password name="password" label="Password" placeholder="6+ characters" />
      </Stack>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Sign in..."
      >
        Sign in
      </Button>
    </Stack>
  );

  return (
    <>
      {renderHead()}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <Calculator open={calculator} />

      <VerifyModal open={open} />
    </>
  );
}
