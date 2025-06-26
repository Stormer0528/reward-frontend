import type { UseBooleanReturn } from 'minimal-shared/hooks';
import type { SchemaType } from './schema';

import { useForm } from 'react-hook-form';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Form } from 'src/components/Form';
import { toast } from 'src/components/SnackBar';

import { useCreateOrder } from 'src/sections/Order/useApollo';
import { RHFPackageSelect } from 'src/sections/Package/RHFPackageSelect';

import { Schema } from './schema';

interface Props {
  open: UseBooleanReturn;
  available: number;
}

export default function Packages({ open, available }: Props) {
  const router = useRouter();

  const { loading, createOrder } = useCreateOrder();

  const defaultValues = {
    packageId: '',
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const { setError, handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ packageId }) => {
    try {
      const { data } = await createOrder({ variables: { data: { packageId } } });

      if (data) {
        open.onFalse();
        router.push(paths.pages.order.detail(data.createAddHashOrder.id));
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('packageId')) {
          setError('packageId', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error.message);
      }
    }
  });

  return (
    <Dialog open={open.value} onClose={open.onFalse} fullWidth>
      <DialogTitle>Select Package</DialogTitle>
      <DialogContent>
        <Paper sx={{ py: 2 }}>
          <Form methods={methods} onSubmit={onSubmit}>
            <RHFPackageSelect
              name="packageId"
              label="Package"
              filter={{ status: true, orderVisibility: true, point: { lte: available } }}
              sort="-amount"
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3, mb: 1 }}>
              <Button variant="outlined" onClick={open.onFalse}>
                Close
              </Button>
              <Button type="submit" variant="contained" color="primary" loading={loading}>
                Next
              </Button>
            </Stack>
          </Form>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
