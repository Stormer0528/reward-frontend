import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean, type UseBooleanReturn } from 'src/hooks/useBoolean';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';
import { Form, Field } from 'src/components/Form';

import { useUpdatePassword } from 'src/sections/Profile/useApollo';

import { Schema, type SchemType } from './schema';

interface Props {
  open: UseBooleanReturn;
}

export default function ResetPassword({ open }: Props) {
  const password = useBoolean();
  const current = useBoolean();
  const confirm = useBoolean();

  const defaultValues = { oldPassword: '', newPassword: '', confirmPassword: '' };

  const methods = useForm<SchemType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { updatePassword } = useUpdatePassword();

  const onSubmit = handleSubmit(async ({ oldPassword, newPassword }) => {
    try {
      const { data } = await updatePassword({
        variables: {
          data: { oldPassword, newPassword },
        },
      });

      if (data) {
        toast.success('password updated successfully!');

        open.onFalse();
      }
    } catch (err) {
      console.log('error => ', err);
    }
  });

  return (
    <Paper sx={{ pb: 3, pt: 0 }}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Box sx={{ py: 2 }} display="grid" rowGap={2}>
          <Field.Text
            name="oldPassword"
            variant="outlined"
            type={current.value ? 'text' : 'password'}
            label="Current Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="solar:user-rounded-bold" width={24} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={current.onToggle} edge="end">
                    <Iconify
                      icon={current.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                      width={24}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Field.Text
            name="newPassword"
            variant="outlined"
            type={password.value ? 'text' : 'password'}
            label="New Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="solar:user-rounded-bold" width={24} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify
                      icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                      width={24}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Field.Text
            name="confirmPassword"
            variant="outlined"
            type={confirm.value ? 'text' : 'password'}
            label="Confirm  Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="solar:user-rounded-bold" width={24} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={confirm.onToggle} edge="end">
                    <Iconify
                      icon={confirm.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                      width={24}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Save changes
        </LoadingButton>
      </Form>
    </Paper>
  );
}
