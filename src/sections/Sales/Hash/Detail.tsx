import QRCode from 'react-qr-code';
import { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { truncateMiddle } from 'src/utils/helper';

import { CONFIG } from 'src/config';
import { PAYMENT_METHOD } from 'src/consts';
import { type PaymentType, WaitTransactionStatus } from 'src/__generated__/graphql';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useCreateOrder, useCreateSignUpOrder, useCheckAddressWaitStatus } from '../useApollo';

interface Props {
  email?: string;
  timeLeft: number;
  walletId: string;
  packageId: string;
  setStep: Function;
  setStatus: Function;
  setOrderId: Function;
  setWalletId: Function;
  setTimeLeft: Function;
  paymentType: PaymentType;
}

export default function Detail({
  email,
  setStep,
  timeLeft,
  walletId,
  packageId,
  setStatus,
  setOrderId,
  setWalletId,
  setTimeLeft,
  paymentType,
}: Props) {
  const theme = useTheme();

  const [copy, setCopy] = useState<string>();
  const [qrCode, setQrCode] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const [address, setAddress] = useState<string>('');

  const { loading, createOrder } = useCreateOrder();
  const { status, checkAddressWaitStatus } = useCheckAddressWaitStatus();
  const { loading: signUpLoading, createSignUpOrder } = useCreateSignUpOrder();

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
        label: truncateMiddle(address, 30),
        value: address,
        icon: 'entypo:wallet',
      },
      {
        label: balance / PAYMENT_METHOD[paymentType].balance,
        value: balance / PAYMENT_METHOD[paymentType].balance,
        icon: 'lsicon:amount-dollar-filled',
      },
    ],
    [address, balance, paymentType]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (walletId && timeLeft % 10 === 0) {
        checkAddressWaitStatus({ variables: { data: { id: walletId } } });

        if (status && status !== WaitTransactionStatus.Wait) {
          setStatus(status);
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
  }, [status, walletId, timeLeft]);

  useEffect(() => {
    const create = async () => {
      try {
        if (!walletId) {
          if (email) {
            const { data } = await createSignUpOrder({
              variables: { data: { email, packageId, paymentType } },
            });

            setOrderId(data?.createSignUpOrder.id);
            setWalletId(data?.createSignUpOrder.waitAddressId ?? '');
            setBalance(data?.createSignUpOrder.waitAddress?.totalBalance);
            setAddress(data?.createSignUpOrder.waitAddress?.address ?? '');
            setQrCode(`${data?.createSignUpOrder.waitAddress?.address}`);
          } else {
            const { data } = await createOrder({ variables: { data: { packageId, paymentType } } });

            setOrderId(data?.createOrder.id);
            setWalletId(data?.createOrder.waitAddressId ?? '');
            setBalance(data?.createOrder.waitAddress?.totalBalance);
            setAddress(data?.createOrder.waitAddress?.address ?? '');
            setQrCode(`${data?.createOrder.waitAddress?.address}`);
          }
        }
      } catch (error) {
        toast.error('Something went wrong!');
      }
    };

    create();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageId, paymentType, createOrder]);

  return (
    <Box>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', mb: 2 }}>
        {loading || signUpLoading ? (
          <Iconify icon="eos-icons:bubble-loading" />
        ) : (
          <>
            <QRCode value={qrCode} size={256} level="H" />
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
                src={`${CONFIG.site.basePath}/assets/${paymentType}.png`}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
          </>
        )}
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
            <Iconify icon={item.icon} color="#ffffff" sx={{ display: 'block', margin: 'auto' }} />
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
  );
}
