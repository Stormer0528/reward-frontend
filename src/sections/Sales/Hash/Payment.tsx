import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { ChainType } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

const payments = [
  {
    value: ChainType.Txc,
    label: 'Texitcoin',
    icon: `${CONFIG.site.basePath}/assets/logo-100.png`,
    backgroundColor: '#eeeeee',
  },
  {
    value: ChainType.Eth,
    label: 'Ethereum',
    icon: `${CONFIG.site.basePath}/assets/ethereum.png`,
    backgroundColor: '#ffffff',
  },
];

interface Props {
  paymentType: string;
  setPaymentType: Function;
}

export default function Payment({ paymentType, setPaymentType }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.neutral', borderRadius: 1, p: 1 }}>
      {payments.map((payment) => (
        <Box
          sx={{
            p: 1,
            my: 1,
            ...(paymentType === payment.value
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
            if (payment.value === ChainType.Eth) {
              setPaymentType(payment.value);
            } else {
              toast.info('TXC is currently unavailable');
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
              ...(paymentType !== payment.value && {
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
