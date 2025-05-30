import type { UseBooleanReturn } from 'minimal-shared/hooks';
import type { TwoFactorSchemaType } from './schema';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useAuthContext } from 'src/auth/hooks';

import { TwoFactorSchema } from './schema';
import { useVerify2FAAndToken } from './useApollo';

interface Props {
  open: UseBooleanReturn;
}

export default function VerifyModal({ open }: Props) {
  const { signIn } = useAuthContext();
  const { loading, verify2FAAndToken } = useVerify2FAAndToken();

  const methods = useForm<TwoFactorSchemaType>({
    resolver: zodResolver(TwoFactorSchema),
    defaultValues: { token: '' },
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await verify2FAAndToken(data);

      if (response) {
        signIn(response?.verify2FAToken?.accessToken ?? '');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  });

  return (
    <Dialog fullWidth maxWidth="xs" open={open.value} onClose={open.onFalse}>
      <DialogTitle>Two-factor authentication</DialogTitle>
      <DialogContent sx={{ overflow: 'unset', minWidth: 400 }}>
        <Form methods={methods} onSubmit={onSubmit}>
          <Field.Text name="token" label="Code" variant="outlined" type="text" fullWidth />
          <Stack alignItems="flex-end" sx={{ my: 3 }}>
            <Button
              type="submit"
              variant="contained"
              loading={loading}
              loadingIndicator="Verifying..."
            >
              Verify
            </Button>
          </Stack>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
