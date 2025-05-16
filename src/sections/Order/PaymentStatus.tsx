import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { OrderStatus } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';

interface Props {
  status: OrderStatus;
}

export default function PaymentStatus({ status }: Props) {
  return (
    <Box textAlign="center">
      {status === OrderStatus.Paid && (
        <>
          <Iconify icon="fluent-emoji-flat:thumbs-up" width={80} height={80} />
          <Typography variant="h6">Thanks for your payment</Typography>
        </>
      )}

      {status === OrderStatus.Canceled && (
        <>
          <Iconify icon="ix:namur-failure-filled" width={80} height={80} color="red" />
          <Typography variant="h6">
            The transaction canceled. Please contact our support team for assistance.
          </Typography>
        </>
      )}

      {status === OrderStatus.Expired && (
        <>
          <Iconify icon="flat-color-icons:expired" width={80} height={80} />
          <Typography variant="h6">Your session has expired</Typography>
        </>
      )}

      {status === OrderStatus.Completed && (
        <>
          <Iconify icon="nrk:media-completed" width={80} height={80} color="#00a873" />
          <Typography variant="h6">Your payment has been completed</Typography>
        </>
      )}
    </Box>
  );
}
