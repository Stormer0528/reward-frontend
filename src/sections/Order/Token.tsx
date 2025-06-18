import type { TOKEN_TYPE, PAYMENT_TYPE } from './type';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { PaymentChain, PaymentToken } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

const payments: TOKEN_TYPE[] = [
  {
    token: PaymentToken.Txc,
    label: 'Texitcoin',
    icon: `${CONFIG.ASSET_DIR}/assets/TXC.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    token: PaymentToken.Usdc,
    label: 'USDC',
    icon: `${CONFIG.ASSET_DIR}/assets/USDC.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    token: PaymentToken.Usdt,
    label: 'USDT',
    icon: `${CONFIG.ASSET_DIR}/assets/USDT.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    token: PaymentToken.Pyusd,
    label: 'PYUSD',
    icon: `${CONFIG.ASSET_DIR}/assets/PYUSD.png`,
    backgroundColor: '#ffffff',
    disable: false,
  },
  {
    token: 'PEER',
    label: 'PEER',
    backgroundColor: '#ffffff',
    disable: false,
  },
];

interface Props {
  paymentType: PAYMENT_TYPE;
  setPaymentType: React.Dispatch<any>;
}

export function Token({ paymentType, setPaymentType }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.neutral', borderRadius: 1, px: 2 }}>
      {payments.map((payment) => (
        <Box
          key={payment.token}
          sx={{
            p: 1,
            my: 2,
            ...(paymentType?.paymentToken === payment.token
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
              if (payment.token === PaymentToken.Txc) {
                setPaymentType({ paymentToken: payment.token, paymentChain: PaymentChain.Txc });
              } else {
                setPaymentType({ paymentToken: payment.token });
              }
            } else {
              toast.info('This payment is currently unavailable');
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {payment.token === 'PEER' ? (
              <Iconify
                icon="iconoir:peerlist-solid"
                width={42}
                color={theme.palette.primary.main}
              />
            ) : (
              <Avatar src={payment.icon} />
            )}
            <Typography fontWeight={500}>{payment.label}</Typography>
          </Stack>

          <Iconify
            icon="uim:check-circle"
            color={theme.palette.success.main}
            sx={{
              ...(paymentType?.paymentToken !== payment.token && {
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
