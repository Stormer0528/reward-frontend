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

import { useBoolean } from 'src/hooks/useBoolean';

import { formatID } from 'src/utils/helper';

import { OrderStatus, PaymentToken, type Order as OrderType } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { LoadingScreen } from 'src/components/loading-screen';

import Detail from './Detail';
import { Token } from './Token';
import { Chain } from './Chain';
import PaymentStatus from './PaymentStatus';
import { ConfirmCancel } from './ConfirmCancel';
import { useFetchOrderById, useSetOrderPayment } from './useApollo';

export default function Order() {
  const theme = useTheme();
  const router = useRouter();
  const isCancel = useBoolean();

  const { id } = useParams();

  const [step, setStep] = useState<number>(-1);
  const [payment, setPayment] = useState<any>();
  const [timeLeft, setTimeLeft] = useState<number>(-1);
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.New);

  const { loading, order, fetchOrderById } = useFetchOrderById();
  const { loading: setLoading, setOrderPayment } = useSetOrderPayment();

  const handleSetPayment = async () => {
    try {
      const { data } = await setOrderPayment({
        variables: {
          data: {
            id: id!,
            ...(payment?.paymentToken === 'PEER'
              ? {
                  isP2P: true,
                }
              : {
                  paymentChain: payment?.paymentChain!,
                  paymentToken: payment?.paymentToken!,
                }),
          },
        },
      });

      if (data) {
        if (payment.paymentToken === 'PEER') {
          setStep(2);
          setStatus(OrderStatus.Completed);
        } else if (payment.paymentToken === PaymentToken.Txc) {
          setStep(1);
        } else {
          setStep((prev) => prev + 1);
        }
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

      if (order.status === OrderStatus.Completed) {
        setStep(2);
        setStatus(OrderStatus.Completed);
      }
    }
  }, [order]);

  if (loading || setLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Box mb={3}>
        <Typography variant="subtitle1">{formatID(order?.ID ?? '', 'O')}</Typography>
        {step === -1 && <Typography variant="h6">Select Currency</Typography>}
        {step === 0 && <Typography variant="h6">Select Chain</Typography>}
        {step === 1 && (
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{payment.paymentChain}</Typography>
            <Box border={`2px solid ${theme.palette.success.main}`} borderRadius={0.5} p={1}>
              {loading || setLoading ? (
                <Skeleton />
              ) : (
                <Typography>
                  {dayjs.duration(timeLeft, 'seconds').hours() > 0
                    ? `${dayjs.duration(timeLeft, 'seconds').hours()} hr `
                    : ''}
                  {dayjs.duration(timeLeft, 'seconds').minutes()} min{' '}
                  {dayjs.duration(timeLeft, 'seconds').seconds()}s
                </Typography>
              )}
            </Box>
          </Stack>
        )}
      </Box>

      {step === -1 && (
        <Token order={order as OrderType} paymentType={payment} setPaymentType={setPayment} />
      )}
      {step === 0 && <Chain paymentType={payment} setPaymentType={setPayment} />}

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
          <Button variant="outlined" onClick={isCancel.onTrue}>
            Cancel
          </Button>
        )}

        {step === -1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              if (payment.paymentToken === 'PEER' || payment.paymentToken === PaymentToken.Txc) {
                await handleSetPayment();
              } else {
                setStep(0);
              }
            }}
          >
            Next
          </Button>
        )}

        {step === 0 && (
          <>
            <Button variant="outlined" onClick={() => setStep(-1)}>
              Back
            </Button>
            <LoadingButton
              variant="contained"
              color="primary"
              loading={setLoading}
              onClick={async () => {
                if (!payment) {
                  toast.error('Payment is required');
                  return;
                }

                await handleSetPayment();
              }}
            >
              Next
            </LoadingButton>
          </>
        )}
      </Stack>

      <ConfirmCancel id={id!} open={isCancel} setStep={setStep} setStatus={setStatus} />
    </>
  );
}
