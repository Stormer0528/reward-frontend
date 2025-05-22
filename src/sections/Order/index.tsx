import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useParams, useRouter } from 'src/routes/hooks';

import { OrderStatus, type Order as OrderType } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { LoadingScreen } from 'src/components/loading-screen';

import Detail from './Detail';
import Payment from './Payment';
import PaymentStatus from './PaymentStatus';
import { useCancelOrder, useFetchOrderById, useSetOrderPayment } from './useApollo';

import type { PAYMENT_TYPE } from './type';

export default function Order() {
  const theme = useTheme();
  const router = useRouter();

  const { id } = useParams();

  const [step, setStep] = useState<number>(0);
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.New);
  const [timeLeft, setTimeLeft] = useState<number>(-1);
  const [payment, setPayment] = useState<PAYMENT_TYPE>();

  const { cancelOrder } = useCancelOrder();
  const { loading, order, fetchOrderById } = useFetchOrderById();
  const { loading: setLoading, setOrderPayment } = useSetOrderPayment();

  const handleSetPayment = async () => {
    try {
      const { data } = await setOrderPayment({
        variables: {
          data: {
            id: id!,
            paymentChain: payment?.paymentChain!,
            paymentToken: payment?.paymentToken!,
          },
        },
      });

      if (data) {
        setStep((prev) => prev + 1);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancel = async () => {
    try {
      const { data } = await cancelOrder({ variables: { data: { id: id! } } });

      if (data) {
        setStep(2);
        setStatus(OrderStatus.Canceled);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClose = async () => {
    router.back();
  };

  useEffect(() => {
    fetchOrderById({ variables: { data: { id: id! } } });
  }, [id, fetchOrderById]);

  useEffect(() => {
    if (order) {
      setPayment({ paymentChain: order.paymentChain!, paymentToken: order.paymentToken! });

      if (order.status === OrderStatus.Pending) {
        setStep(1);
        setTimeLeft(-dayjs().diff(order.expiredAt, 'seconds'));
      }

      if (order.status === OrderStatus.Paid) {
        setStep(2);
        setStatus(OrderStatus.Paid);
      }

      if (order?.status === OrderStatus.Expired) {
        setStep(2);
        setStatus(OrderStatus.Expired);
      }

      if (order?.status === OrderStatus.Canceled) {
        setStep(2);
        setStatus(OrderStatus.Canceled);
      }
    }
  }, [order]);

  if (loading || setLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Box mb={4}>
        {step === 0 && (
          <Typography variant="h6" mb={4}>
            Select Payment Method
          </Typography>
        )}
        {step === 1 && (
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Detail</Typography>
            <Box
              width={105}
              border={`2px solid ${theme.palette.success.main}`}
              borderRadius={0.5}
              p={1}
            >
              {loading || setLoading ? (
                <Skeleton />
              ) : (
                <Typography>
                  {Math.floor(timeLeft / 60)} min {timeLeft % 60}s
                </Typography>
              )}
            </Box>
          </Stack>
        )}
        {step === 2 && (
          <Typography variant="h6" mb={4}>
            Status
          </Typography>
        )}
      </Box>

      {step === 0 && <Payment paymentType={payment!} setPaymentType={setPayment} />}
      {step === 1 && (
        <Detail
          order={order as OrderType}
          paymentType={payment!}
          timeLeft={timeLeft}
          setStep={setStep}
          setStatus={setStatus}
          setTimeLeft={setTimeLeft}
        />
      )}
      {step === 2 && <PaymentStatus status={status} />}

      <Stack direction="row" mt={4} justifyContent="flex-end" spacing={2}>
        {step === 2 && (
          <Button variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        )}

        {step !== 2 && (
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        )}

        {step === 0 && (
          <LoadingButton
            variant="contained"
            color="primary"
            loading={setLoading}
            onClick={async () => {
              if (step === 0 && !payment) {
                toast.error('Payment is required');
                return;
              }

              if (step === 0) {
                await handleSetPayment();
              }
            }}
          >
            Next
          </LoadingButton>
        )}
      </Stack>
    </>
  );
}
