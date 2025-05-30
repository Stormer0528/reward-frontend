import type { ForgotPasswordSchemaType } from './schema';

import { useForm } from 'react-hook-form';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { SentIcon, PasswordIcon } from 'src/assets/icons';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { ForgotPasswordSchema } from './schema';
import { useForgotPassword } from './useApollo';

// ----------------------------------------------------------------------

export function ForgotPasswordView() {
  const isSuccess = useBoolean();

  const methods = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const { submitForgotPassword, loading } = useForgotPassword();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await submitForgotPassword(data);
      isSuccess.onTrue();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  });

  const renderHead = () => (
    <>
      <PasswordIcon sx={{ mx: 'auto' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Forgot your password?</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Please enter the email address associated with your account and we&apos;ll email you a
          link to reset your password.
        </Typography>
      </Stack>
    </>
  );

  const renderForm = () => (
    <Stack spacing={3}>
      <Field.Text autoFocus name="email" label="Email address" placeholder="example@gmail.com" />

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Sending request..."
      >
        Send request
      </Button>

      <Link
        component={RouterLink}
        href={paths.auth.signIn}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          gap: 0.5,
          mx: 'auto',
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" width={16} />
        Return to sign in
      </Link>
    </Stack>
  );

  const renderSuccess = () => (
    <>
      <SentIcon sx={{ mx: 'auto' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Password reset email is sent</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A code to reset your password and your registration information has just been sent to your
          e-mail address.
          <br /> Please check your e-mail. <br />
          <i>*Note that the reset code is re-generated on each request*</i>
        </Typography>
      </Stack>
    </>
  );

  return isSuccess.value ? (
    renderSuccess()
  ) : (
    <>
      {renderHead()}
      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>
    </>
  );
}
