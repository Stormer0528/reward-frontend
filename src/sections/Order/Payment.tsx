import type { PAYMENT_METHOD_TYPE } from './type';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { CONFIG } from 'src/config';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';
import { OrderStatus, PaymentChain, PaymentToken } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useCancelOrder, useSetOrderPayment } from './useApollo';

const payments: PAYMENT_METHOD_TYPE[] = [
  // {
  //   value: PaymentToken.Txc,
  //   label: 'Texitcoin',
  //   icon: `${CONFIG.ASSET_DIR}/assets/TXC.png`,
  //   backgroundColor: '#eeeeee',
  //   disable: true,
  // },
  // {
  //   value: PaymentToken.Eth,
  //   label: 'Ethereum',
  //   icon: `${CONFIG.ASSET_DIR}/assets/ETH.png`,
  //   backgroundColor: '#ffffff',
  // },
  {
    value: PaymentToken.Usdc,
    label: 'USDC (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.ASSET_DIR}/assets/USDC.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    value: PaymentToken.Usdt,
    label: 'USDT (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.ASSET_DIR}/assets/USDT.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    value: PaymentToken.Pyusd,
    label: 'PYUSD (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.ASSET_DIR}/assets/PYUSD.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    value: 'PEER',
    label: 'PEER',
    chain: PaymentChain.Eth,
    backgroundColor: '#ffffff',
    disable: false,
  },
];

export default function Payment() {
  const [paymentType, setPaymentType] = useState<any>();
  const theme = useTheme();

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
        } else {
          router.push('waiting');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleCancel = async () => {
    try {
      const { data } = await cancelOrder({ variables: { data: { id: order!.id } } });

      if (data) {
        router.push(`${paths.pages.order.root}/${order!.id}/status`, {
          state: { status: OrderStatus.Canceled },
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Typography variant="h6" mb={4}>
        Select Payment Method
      </Typography>

      <Box sx={{ backgroundColor: 'background.neutral', borderRadius: 1, px: 2 }}>
        {payments.map((payment) => (
          <Box
            key={payment.value}
            sx={{
              p: 1,
              my: 2,
              ...(paymentType?.paymentToken === payment.value
                ? {
                    border: `1px solid ${theme.palette.success.main}`,
                  }
                : { border: `1px solid ${payment.backgroundColor}` }),
              borderRadius: 1,
              backgroundColor: payment.backgroundColor,
              cursor: 'pointer',
              transition: 'border 0.2s ease 0.1s',
            }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            onClick={() => {
              if (!payment.disable && setPaymentType) {
                setPaymentType({ paymentToken: payment.value, paymentChain: payment.chain });
              } else {
                toast.info('This payment is currently unavailable');
              }
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {payment.value === 'PEER' ? (
                <Iconify
                  icon="iconoir:peerlist-solid"
                  width={42}
                  color={theme.palette.primary.main}
                />
              ) : (
                <Avatar src={payment.icon} />
              )}
              <Typography>{payment.label}</Typography>
            </Stack>

            <Iconify
              icon="uim:check-circle"
              color={theme.palette.success.main}
              sx={{
                ...(paymentType?.paymentToken !== payment.value && {
                  opacity: 0,
                }),
                transition: 'opacity 0.2s ease 0.1s',
              }}
            />
          </Box>
        ))}
      </Box>

      <Stack direction="row" mt={4} justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          loading={loading}
          onClick={async () => {
            if (!paymentType) {
              toast.error('Payment is required');
              return;
            }

            await handleSetPayment();
          }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}
