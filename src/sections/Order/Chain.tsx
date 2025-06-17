import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { PaymentChain } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import type { CHAIN_TYPE, PAYMENT_TYPE } from './type';

const payments: CHAIN_TYPE = {
  USDC: [
    {
      chain: PaymentChain.Eth,
      label: 'Ethereum',
      icon: `${CONFIG.site.basePath}/assets/ETH.png`,
      backgroundColor: '#ffffff',
      disable: false,
    },
    {
      chain: PaymentChain.Base,
      label: 'Base',
      icon: `${CONFIG.site.basePath}/assets/BASE.jpg`,
      backgroundColor: '#ffffff',
      disable: false,
    },
  ],
  USDT: [
    {
      chain: PaymentChain.Eth,
      label: 'Ethereum',
      icon: `${CONFIG.site.basePath}/assets/ETH.png`,
      backgroundColor: '#ffffff',
      disable: false,
    },
    {
      chain: PaymentChain.Base,
      label: 'Base',
      icon: `${CONFIG.site.basePath}/assets/BASE.jpg`,
      backgroundColor: '#ffffff',
      disable: false,
    },
  ],
  PYUSD: [
    {
      chain: PaymentChain.Eth,
      label: 'Ethereum',
      icon: `${CONFIG.site.basePath}/assets/ETH.png`,
      backgroundColor: '#ffffff',
      disable: false,
    },
  ],
};

interface Props {
  paymentType: PAYMENT_TYPE;
  setPaymentType: Function;
}

export function Chain({ paymentType, setPaymentType }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.neutral', borderRadius: 1, px: 2 }}>
      {payments[paymentType.paymentToken].map((payment) => (
        <Box
          key={payment.chain}
          sx={{
            p: 1,
            my: 2,
            ...(paymentType?.paymentChain === payment.chain
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
              setPaymentType({ ...paymentType, paymentChain: payment.chain });
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
              ...(paymentType?.paymentChain !== payment.chain && {
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
