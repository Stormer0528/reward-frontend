import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';
import { SentIcon } from 'src/assets/icons';
import { PASSWORD_REGEXP } from 'src/consts';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useUpdatePassword } from '../Profile/useApollo';

// ----------------------------------------------------------------------

export type UpdatePasswordSchemaType = zod.infer<typeof UpdatePasswordSchema>;

export const UpdatePasswordSchema = zod
  .object({
    oldPassword: zod.string({ message: 'Old password is required!' }),
    newPassword: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(8, { message: 'Password must be at least 8 characters!' })
      .regex(PASSWORD_REGEXP, {
        message:
          'Password must include uppercase, lowercase, number, and special character! Available special characters: ! @ # $ % ^ & * ( ) _ + [ ] { } | ; : , . < > ?',
      }),
    confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

export function UpdatePasswordView() {
  const location = useLocation();

  const confirm = useBoolean();

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const methods = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const { loading, updatePassword } = useUpdatePassword();

  const onSubmit = handleSubmit(async ({ oldPassword, newPassword }) => {
    try {
      localStorage.setItem(CONFIG.STORAGE_TOKEN_KEY, location.state.token);

      const { data } = await updatePassword({
        variables: { data: { oldPassword, newPassword } },
      });

      if (data?.updatePasswordMember.result === 'success') {
        toast.success('Successfully changed!');

        localStorage.removeItem(CONFIG.STORAGE_TOKEN_KEY);

        setTimeout(() => {
          window.location.href = paths.auth.signIn;
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
        <Typography variant="h5">Update your password</Typography>
      </Stack>
    </>
  );

  const renderForm = (
    <Stack spacing={3}>
      {/* TODO: Duplicated input */}
      <Field.Text
        name="oldPassword"
        label="Old password"
        type={confirm.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirm.onToggle} edge="end">
                  <Iconify icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Field.Text
        name="newPassword"
        label="New password"
        type={confirm.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirm.onToggle} edge="end">
                  <Iconify icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Field.Text
        name="confirmPassword"
        label="Confirm new password"
        type={confirm.value ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirm.onToggle} edge="end">
                  <Iconify icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Update password..."
      >
        Update password
      </Button>

      <Link
        component={RouterLink}
        href={paths.auth.signIn}
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
