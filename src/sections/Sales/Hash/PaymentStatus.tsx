import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { WaitTransactionStatus } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useCompleteOrder } from '../useApollo';

interface Props {
  status: string;
  orderId: string;
  paymentId: string;
}

export default function PaymentStatus({ status, orderId, paymentId }: Props) {
  const { completeOrder } = useCompleteOrder();

  useEffect(() => {
    const asyncComplete = async () => {
      try {
        await completeOrder({ variables: { data: { orderId, paymentId } } });
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (status === WaitTransactionStatus.Received) {
      asyncComplete();
    }
  }, [status, orderId, paymentId, completeOrder]);

  return (
    <Box textAlign="center">
      {status === WaitTransactionStatus.Received && (
        <>
          <Iconify icon="fluent-emoji-flat:thumbs-up" width={80} height={80} />
          <Typography variant="h6">Thanks for your payment</Typography>
        </>
      )}

      {status === WaitTransactionStatus.Failed && (
        <>
          <Iconify icon="ix:namur-failure-filled" width={80} height={80} color="red" />
          <Typography variant="h6">
            The transaction failed. Please contact our support team for assistance.
          </Typography>
        </>
      )}

      {status === 'EXPIRED' && (
        <>
          <Iconify icon="flat-color-icons:expired" width={80} height={80} />
          <Typography variant="h6">Your session has expired</Typography>
        </>
      )}
    </Box>
  );
}
