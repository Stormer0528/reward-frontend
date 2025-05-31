import type { ResetPasswordSchemaType } from './schema';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import NewPasswordIcon from 'src/assets/icons/new-password-icon';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { ResetPasswordSchema } from './schema';
import { useResetPassword } from './useApollo';

// ----------------------------------------------------------------------

interface Props {
  token: string;
}

// ----------------------------------------------------------------------

export function ResetPasswordView({ token }: Props) {
  const { submitResetPassword, loading } = useResetPassword();

  const methods = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ password }) => {
    try {
      const { data } = await submitResetPassword({ password, token });

      if (data?.resetPasswordByToken.result === 'success') {
        toast.success('Successfully changed!');
        // TODO: Show success render which has back link to signin
        setTimeout(() => {
          window.location.href = paths.auth.signIn;
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = () => (
    <>
      <NewPasswordIcon sx={{ mx: 'auto' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Reset password</Typography>
      </Stack>
    </>
  );

  const renderForm = () => (
    <Stack spacing={3}>
      <Field.Password name="password" label="New password" placeholder="6+ characters" />

      <Field.Password name="confirmPassword" label="Confirm password" />

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Updating password..."
      >
        Update password
      </Button>

      {/* TODO: Duplicated link in forgot password page */}
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

  return (
    <>
      {renderHead()}
      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>
    </>
  );
}
