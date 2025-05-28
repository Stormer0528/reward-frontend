import type { UseBooleanReturn } from 'minimal-shared/hooks';

import { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/SnackBar';

import { useCreateOrder } from 'src/sections/Order/useApollo';

import { useFetchPackages } from '../useApollo';

interface Props {
  open: UseBooleanReturn;
  available: number;
}

export default function Packages({ open, available }: Props) {
  const router = useRouter();

  const [packageId, setPackageId] = useState<string>();

  const { loading, createOrder } = useCreateOrder();
  const { packages, fetchPackages } = useFetchPackages();

  const handleCreateOrder = async () => {
    try {
      if (packageId) {
        const { data } = await createOrder({ variables: { data: { packageId } } });

        if (data) {
          open.onFalse();
          router.push(paths.pages.order.detail(data.createOrder.id));
        }
      } else {
        toast.error('You must select a package');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(
    () => {
      if (open.value) {
        fetchPackages({
          variables: {
            filter: { status: true, orderVisibility: true, point: { lte: available } },
            sort: '-amount',
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open, available]
  );

  return (
    <Dialog open={open.value} onClose={open.onFalse} fullWidth>
      <DialogTitle>Select Package</DialogTitle>
      <DialogContent>
        <Paper sx={{ py: 2 }}>
          <TextField
            label="Package"
            select
            fullWidth
            onChange={(e) => setPackageId(e.target.value)}
          >
            {packages?.map((pack) => (
              <MenuItem key={pack.id} value={pack.id}>
                {pack.productName}
              </MenuItem>
            ))}
          </TextField>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={open.onFalse}>
          Close
        </Button>
        <LoadingButton
          variant="contained"
          color="primary"
          loading={loading}
          onClick={handleCreateOrder}
        >
          Next
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
