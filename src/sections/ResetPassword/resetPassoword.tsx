import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/useBoolean';

import { SentIcon } from 'src/assets/icons';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { RESET_PASSWORD_TOKEN } from './query';

// ----------------------------------------------------------------------

export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;

export const UpdatePasswordSchema = zod
  .object({
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

interface Props {
  token: string;
}

export function SplitUpdatePasswordView({ token }: Props) {
  const confirm = useBoolean();

  const defaultValues = {
    code: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const [updatePassword, { loading }] = useMutation(RESET_PASSWORD_TOKEN);

  const onSubmit = handleSubmit(async ({ password }) => {
    try {
      const { data } = await updatePassword({ variables: { data: { password, token } } });

      if (data?.resetPasswordByToken.result === 'success') {
        toast.success('Successfully changed!');

        setTimeout(() => {
          window.location.href = paths.signIn;
        }, 1000);
      } else {
        toast.error('Failed');
      }
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <>
      <SentIcon sx={{ mx: 'auto' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Request sent successfully!</Typography>
      </Stack>
    </>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text
        name="password"
        label="Password"
        placeholder="6+ characters"
        type={confirm.value ? 'text' : 'password'}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirm.onToggle} edge="end">
                <Iconify icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Field.Text
        name="confirmPassword"
        label="Confirm new password"
        type={confirm.value ? 'text' : 'password'}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirm.onToggle} edge="end">
                <Iconify icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Update password..."
      >
        Update password
      </LoadingButton>

      <Link
        component={RouterLink}
        href="#"
        color="inherit"
        variant="subtitle2"
        sx={{ mx: 'auto', alignItems: 'center', display: 'inline-flex' }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" width={16} sx={{ mr: 0.5 }} />
        Return to sign in
      </Link>
    </Stack>
  );

  return (
    <>
      {renderHead}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}
