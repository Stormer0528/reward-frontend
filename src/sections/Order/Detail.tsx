import QRCode from 'react-qr-code';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { makeDecimal, truncateMiddle } from 'src/utils/helper';

import { CONFIG } from 'src/config';
import { CHAIN_UNIT, PAYMENT_METHOD } from 'src/consts';
import { type Order, OrderStatus } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';

import { useCheckOrder } from './useApollo';

import type { PAYMENT_TYPE } from './type';

interface Props {
  order: Order;
  timeLeft: number;
  setStep: Function;
  setStatus: Function;
  setTimeLeft: Function;
  paymentType: PAYMENT_TYPE;
}

export default function Detail({
  order: current,
  setStep,
  setStatus,
  timeLeft,
  setTimeLeft,
  paymentType,
}: Props) {
  const theme = useTheme();

  const [copy, setCopy] = useState<string>();

  const { order, checkOrder } = useCheckOrder();

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
        label: makeDecimal(
          (current?.requiredBalance ?? 0) /
            (PAYMENT_METHOD[paymentType.paymentToken]?.balance || 0),
          CHAIN_UNIT[paymentType.paymentChain]
        ),
        value:
          (current?.requiredBalance ?? 0) /
          (PAYMENT_METHOD[paymentType.paymentToken]?.balance || 0),
        icon: `${CONFIG.site.basePath}/assets/${paymentType.paymentToken}.png`,
      },
    ],
    [current, paymentType]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (current && timeLeft % 10 === 0) {
        checkOrder({ variables: { data: { id: current.id } } });

        if (order?.status && order?.status !== OrderStatus.Pending) {
          setStatus(order?.status);
          setStep((prev: number) => prev + 1);
        }
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

  return (
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
            src={`${CONFIG.site.basePath}/assets/${paymentType.paymentToken}.png`}
            sx={{ width: 50, height: 50 }}
          />
        </Box>
      </Box>

      {ITEMS.map((item, index) => (
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
            {index === 0 ? (
              <Iconify icon={item.icon} color="#ffffff" sx={{ display: 'block', margin: 'auto' }} />
            ) : (
              <Box
                sx={{
                  background: theme.palette.background.paper,
                  borderRadius: '50%',
                  padding: 0.25,
                  margin: 'auto',
                }}
              >
                <Avatar src={item.icon} sx={{ width: 20, height: 20 }} />
              </Box>
            )}
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography>{item?.label}</Typography>
          </Box>

          <Iconify
            icon={copy === item.value ? 'line-md:check-all' : 'bxs:copy'}
            color={theme.palette.primary.main}
            sx={{ cursor: 'pointer' }}
            onClick={() => handleCopy(item.value)}
          />
        </Box>
      ))}
    </Box>
  );
}
