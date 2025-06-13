import type { OrderContextValue } from '../type';

import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { paths } from 'src/routes/paths';

import { useFetchOrderById } from 'src/sections/Order/useApollo';

import { OrderContext } from './OrderContext';

type Props = {
  children: React.ReactNode;
};

export function OrderProvider({ children }: Props) {
  const { id } = useParams();

  const { order } = useFetchOrderById({ id: id! });

  const memoizedValue: OrderContextValue = useMemo(() => ({ order }), [order]);

  if (!order) {
    return <Navigate to={paths.notFound} />;
  }

  return <OrderContext value={memoizedValue}>{children}</OrderContext>;
}
