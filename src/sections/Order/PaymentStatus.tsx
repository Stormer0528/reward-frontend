import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { OrderStatus } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { Iconify } from 'src/components/Iconify';

export default function PaymentStatus() {
  const router = useRouter();
  const { order } = useOrderContext();

  const handleClose = () => {
    router.push(paths.dashboard.root);
  };

  return (
    <>
      <Box textAlign="center">
        {order.status === OrderStatus.Paid && (
          <>
            <Iconify icon="fluent-emoji-flat:thumbs-up" width={80} height={80} />
            <Typography variant="h6">Thanks for your payment</Typography>
          </>
        )}

        {order.status === OrderStatus.Canceled && (
          <>
            <Iconify icon="ix:namur-failure-filled" width={80} height={80} color="red" />
            <Typography variant="h6">
              The transaction canceled. Please contact our support team for assistance.
            </Typography>
          </>
        )}

        {order.status === OrderStatus.Expired && (
          <>
            <Iconify icon="flat-color-icons:expired" width={80} height={80} />
            <Typography variant="h6">Your session has expired</Typography>
          </>
        )}

        {order.status === OrderStatus.Completed && (
          <>
            <Iconify icon="nrk:media-completed" width={80} height={80} color="#00a873" />
            <Typography variant="h6">Your payment has been completed</Typography>
          </>
        )}
      </Box>

      <Stack direction="row" justifyContent="flex-end" mt={4}>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
      </Stack>
    </>
  );
}
