import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean, type UseBooleanReturn } from 'src/hooks/useBoolean';

import { TIME_LEFT } from 'src/consts';
import { type PaymentType, WaitTransactionStatus } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';

import Detail from './Detail';
import Payment from './Payment';
import Packages from './Packages';
import PaymentStatus from './PaymentStatus';
import { useCancelOrder } from '../useApollo';

interface Props {
  email?: string;
  open: UseBooleanReturn;
  selectedPackageId?: string;
}

export default function Hash({ open, email, selectedPackageId }: Props) {
  const theme = useTheme();

  const router = useRouter();

  const confirm = useBoolean();

  const [step, setStep] = useState<number>(0);
  const [status, setStatus] = useState<string>('');
  const [orderId, setOrderId] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LEFT);
  const [packageId, setPackageId] = useState<string>();
  const [walletId, setWalletId] = useState<string>('');
  const [paymentType, setPaymentType] = useState<PaymentType>();

  const { cancelOrder } = useCancelOrder();

  useEffect(() => {
    if (timeLeft === 0) {
      setStep((prev) => prev + 1);
      setStatus('EXPIRED');
    }
  }, [timeLeft]);

  useEffect(() => {
    if (selectedPackageId) {
      setStep(1);
    }
  }, [selectedPackageId]);

  return (
    <>
      <Dialog open={open.value} fullWidth maxWidth="xs">
        <DialogTitle>
          {step === 0 && 'Select Package'}
          {step === 1 && 'Select Payment Method'}
          {step === 2 && (
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Detail</Typography>
              <Box
                width={105}
                border={`2px solid ${theme.palette.success.main}`}
                borderRadius={0.5}
                p={1}
              >
                <Typography>
                  {Math.floor(timeLeft / 60)} min {timeLeft % 60}s
                </Typography>
              </Box>
            </Stack>
          )}
          {step === 3 && 'Status'}
        </DialogTitle>
        <DialogContent>
          <Paper sx={{ my: 1 }}>
            {step === 0 && <Packages setPackageId={setPackageId} />}
            {step === 1 && <Payment paymentType={paymentType!} setPaymentType={setPaymentType} />}
            {step === 2 && (
              <Detail
                email={email}
                setStep={setStep}
                timeLeft={timeLeft}
                walletId={walletId}
                setStatus={setStatus}
                packageId={selectedPackageId ?? packageId!}
                setOrderId={setOrderId}
                setWalletId={setWalletId}
                setTimeLeft={setTimeLeft}
                paymentType={paymentType!}
              />
            )}
            {step === 3 && <PaymentStatus status={status} orderId={orderId} paymentId={walletId} />}
          </Paper>
        </DialogContent>
        <DialogActions>
          {step < 2 && (
            <>
              {step > 0 && (
                <Button variant="soft" onClick={() => setStep((prev) => prev - 1)}>
                  Previous
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  if (step === 0 && !packageId) {
                    toast.error('Package is required');
                    return;
                  }

                  if (step === 1 && !paymentType) {
                    toast.error('Payment is required');
                    return;
                  }

                  setStep((prev) => prev + 1);
                }}
              >
                Next
              </Button>
            </>
          )}
          <Button
            variant="outlined"
            onClick={() => {
              confirm.onTrue();
              if (email) {
                router.push(
                  `${paths.auth.verifyResult}?${new URLSearchParams({ email: email!, paymentStatus: status === WaitTransactionStatus.Received ? 'success' : 'failed' }).toString()}`
                );
              }
            }}
          >
            {step === 3 ? 'Close' : 'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={confirm.value} onClose={confirm.onFalse} maxWidth="xs" fullWidth>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>Are you sure you want to cancel your order?</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={async () => {
              open.onFalse();
              confirm.onFalse();
              setStep(0);

              if (step !== 3) {
                await cancelOrder({ variables: { data: { ID: orderId } } });
              }

              setTimeLeft(TIME_LEFT);
              setWalletId('');

              if (email) {
                router.push(
                  `${paths.auth.verifyResult}?${new URLSearchParams({ email: email!, paymentStatus: 'failed' }).toString()}`
                );
              }
            }}
          >
            Yes
          </Button>
          <Button variant="outlined" onClick={confirm.onFalse}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
