import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/useBoolean';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { useApollo } from './useApollo';
import VerifyModal from './VerifyModal';
import Calculator from '../SignUp/Calculator';

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  const { submitLogin } = useApollo();

  const [errorMsg, setErrorMsg] = useState('');

  const open = useBoolean();
  const password = useBoolean();
  const calculator = useBoolean();

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleClick = () => {
    router.push(`${paths.pages.intro.root}#sign-up`);

    const maxAttempts = 20;
    let attempts = 0;

    const scrollToSignUp = () => {
      const el = document.getElementById('sign-up');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scrollToSignUp, 100);
      }
    };

    scrollToSignUp();
  };

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h5">Sign in to your account</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`Don't have an account?`}
        </Typography>

        <Stack direction="row" columnGap={2}>
          <Link sx={{ cursor: 'pointer' }} variant="subtitle2" onClick={handleClick}>
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
      <Field.Text name="email" label="Email address" InputLabelProps={{ shrink: true }} />

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

        <Field.Text
          name="password"
          label="Password"
          placeholder="6+ characters"
          type={password.value ? 'text' : 'password'}
          InputLabelProps={{ shrink: true }}
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
        loadingIndicator="Sign in..."
      >
        Sign in
      </LoadingButton>
    </Stack>
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await submitLogin({ variables: { data } });
      const token = response.data?.memberLogin.accessToken ?? '';

      if (response.data?.memberLogin.passwordExpired) {
        toast.warning('Your Password Token has expired. Please reset your password');

        setTimeout(() => {
          navigate(paths.auth.updatePassword, { state: { token } });
        }, 2000);
      } else if (response.data?.memberLogin.status === 'success') {
        signIn(token);
      } else {
        localStorage.setItem(CONFIG.storageTokenKey, token);
        open.onTrue();
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

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

      <Calculator open={calculator} />

      <VerifyModal open={open} signIn={signIn} />
    </>
  );
}
