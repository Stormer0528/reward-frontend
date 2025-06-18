import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { OrderStatus, PaymentToken } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { toast } from 'src/components/SnackBar';

import { Token } from './Token';
import { Chain } from './Chain';
import { useCancelOrder, useSetOrderPayment } from './useApollo';

export default function PaymentSelector() {
  const [step, setStep] = useState(0);
  const [paymentType, setPaymentType] = useState<any>();

  const router = useRouter();

  const { order } = useOrderContext();

  const { loading, setOrderPayment } = useSetOrderPayment();
  const { cancelOrder } = useCancelOrder();

  const handleSetPayment = async () => {
    try {
      const { data } = await setOrderPayment({
        variables: {
          data: {
            id: order!.id,
            ...(paymentType.paymentToken === 'PEER'
              ? { isP2P: true }
              : {
                  paymentChain: paymentType!.paymentChain,
                  paymentToken: paymentType!.paymentToken,
                }),
          },
        },
      });

      if (data) {
        if (paymentType.paymentToken === 'PEER') {
          router.push('status', { state: { status: OrderStatus.Completed } });
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleNextClick = async () => {
    if (step === 0) {
      if (paymentType.paymentToken === 'PEER' || paymentType.paymentToken === PaymentToken.Txc) {
        await handleSetPayment();
        return;
      }

      setStep(1);
      return;
    }
    if (!paymentType) {
      toast.error('Payment is required');
      return;
    }

    await handleSetPayment();
  };

  const handleCancel = async () => {
    try {
      await cancelOrder({ variables: { data: { id: order!.id } } });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Typography variant="h6" mb={4}>
        {step === 0 ? 'Select Currency' : 'Select Chain'}
      </Typography>

      {step === 0 && <Token paymentType={paymentType} setPaymentType={setPaymentType} />}
      {step === 1 && <Chain paymentType={paymentType} setPaymentType={setPaymentType} />}

      <Stack direction="row" mt={4} justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        {step === 1 && (
          <Button variant="soft" onClick={() => setStep(0)}>
            Back
          </Button>
        )}
        <Button variant="contained" color="primary" loading={loading} onClick={handleNextClick}>
          Next
        </Button>
      </Stack>
    </>
  );
}
