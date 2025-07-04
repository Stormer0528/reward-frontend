import type { UseBooleanReturn } from 'src/hooks/useBoolean';

import LoadingButton from '@mui/lab/LoadingButton';

import { OrderStatus } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { ConfirmDialog } from 'src/components/Dialog';

import { useCancelOrder } from './useApollo';

interface Props {
  id: string;
  open: UseBooleanReturn;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setStatus: React.Dispatch<React.SetStateAction<OrderStatus>>;
}

export function ConfirmCancel({ id, open, setStep, setStatus }: Props) {
  const { loading, cancelOrder } = useCancelOrder();

  const handleCancel = async () => {
    try {
      const { data } = await cancelOrder({ variables: { data: { id } } });

      if (data) {
        open.onFalse();
        setStep(2);
        setStatus(OrderStatus.Canceled);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <ConfirmDialog
      open={open.value}
      onClose={open.onFalse}
      title="Confirm"
      content="This order will be canceled. Are you sure?"
      action={
        <LoadingButton variant="contained" color="primary" loading={loading} onClick={handleCancel}>
          OK
        </LoadingButton>
      }
    />
  );
}
