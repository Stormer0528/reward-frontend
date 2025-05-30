import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { PaymentChain, PaymentToken } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import type { PAYMENT_TYPE, PAYMENT_METHOD_TYPE } from './type';

const payments: PAYMENT_METHOD_TYPE[] = [
  {
    value: PaymentToken.Txc,
    label: 'Texitcoin',
    chain: PaymentChain.Txc,
    icon: `${CONFIG.site.basePath}/assets/TXC.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  // {
  //   value: PaymentToken.Eth,
  //   label: 'Ethereum',
  //   icon: `${CONFIG.site.basePath}/assets/ETH.png`,
  //   backgroundColor: '#ffffff',
  // },
  {
    value: PaymentToken.Usdc,
    label: 'USDC (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.site.basePath}/assets/USDC.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    value: PaymentToken.Usdt,
    label: 'USDT (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.site.basePath}/assets/USDT.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    value: PaymentToken.Pyusd,
    label: 'PYUSD (ETH)',
    chain: PaymentChain.Eth,
    icon: `${CONFIG.site.basePath}/assets/PYUSD.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
];

interface Props {
  paymentType: PAYMENT_TYPE;
  setPaymentType: Function;
}

export default function Payment({ paymentType, setPaymentType }: Props) {
  const theme = useTheme();

  return (
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
            if (!payment.disable) {
              setPaymentType({ paymentToken: payment.value, paymentChain: payment.chain });
            } else {
              toast.info('This payment is currently unavailable');
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={payment.icon} />
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
  );
}
