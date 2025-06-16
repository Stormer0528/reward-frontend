import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useOrderContext } from 'src/libs/Order/Context/useOrderContext';

import { useCheckOrder } from './useApollo';

export function Timer() {
  const router = useRouter();

  const { order: current } = useOrderContext();
  const { order, checkOrder } = useCheckOrder();

  const [timeLeft, setTimeLeft] = useState<number>(-dayjs().diff(current?.expiredAt, 'seconds'));

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
    <Typography>
      {Math.floor(timeLeft / 60)} min {timeLeft % 60}s
    </Typography>
  );
}
