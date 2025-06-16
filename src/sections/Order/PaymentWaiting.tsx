import type { IconifyName } from 'src/components/Iconify';

import dayjs from 'dayjs';
import QRCode from 'react-qr-code';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { truncateMiddle } from 'src/utils/helper';

import { CONFIG } from 'src/config';
import { PAYMENT_METHOD } from 'src/consts';
import { type PaymentToken } from 'src/__generated__/graphql';
import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useCheckOrder, useCancelOrder } from './useApollo';

export default function PaymentWaiting() {
  const theme = useTheme();
  const router = useRouter();

  const { order: current } = useOrderContext();

  const [timeLeft, setTimeLeft] = useState<number>(-dayjs().diff(current?.expiredAt, 'seconds'));

  const [copy, setCopy] = useState<string>();

  const { order, checkOrder } = useCheckOrder();
  const { cancelOrder } = useCancelOrder();

  const handleCopy = async (value: any) => {
    setCopy(value);
    await navigator.clipboard.writeText(value);

    setTimeout(() => {
      setCopy('');
    }, 2000);
  };

  const ITEMS = useMemo(
    () => [
      {
        label: truncateMiddle(current?.paymentAddress ?? '', 30),
        value: current?.paymentAddress,
        icon: 'entypo:wallet',
      },
      {
        label:
          (current?.requiredBalance ?? 0) /
          (PAYMENT_METHOD[current?.paymentToken as PaymentToken]?.balance ?? 1),
        value:
          (current?.requiredBalance ?? 0) /
          PAYMENT_METHOD[current?.paymentToken as PaymentToken]?.balance,
        icon: 'lsicon:amount-dollar-filled',
      },
    ],
    [current]
  );

  const handleCancel = async () => {
    try {
      await cancelOrder({ variables: { data: { id: current!.id } } });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (current && timeLeft % 10 === 0) {
        checkOrder({ variables: { data: { id: current.id } } });
      }

      setTimeLeft((prev: number) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, current, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      router.push(`${paths.pages.order.root}/${current?.id}/status`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
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
      <Box>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', mb: 2 }}>
          <QRCode value={current?.paymentAddress ?? ''} size={256} level="H" />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: theme.palette.background.paper,
              borderRadius: '50%',
              padding: 0.5,
            }}
          >
            <Avatar
              src={`${CONFIG.ASSET_DIR}/assets/${current?.paymentToken}.png`}
              sx={{ width: 50, height: 50 }}
            />
          </Box>
        </Box>

        {ITEMS.map((item) => (
          <Box
            sx={{
              mb: 1,
              pr: 1,
              gap: 1,
              display: 'flex',
              borderRadius: 0.5,
              alignItems: 'center',
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.primary.main,
              }}
            >
              <Iconify
                icon={item.icon as IconifyName}
                color="#ffffff"
                sx={{ display: 'block', margin: 'auto' }}
              />
            </Box>

            <Box sx={{ width: '100%' }}>
              <Typography>{item?.label}</Typography>
            </Box>

            <Iconify
              icon={copy === item.value ? 'line-md:check-all' : 'bxs:copy'}
              color="#00A76F"
              sx={{ cursor: 'pointer' }}
              onClick={() => handleCopy(item.value)}
            />
          </Box>
        ))}
      </Box>
      <Stack direction="row" justifyContent="flex-end" mt={4}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </Stack>
    </>
  );
}
