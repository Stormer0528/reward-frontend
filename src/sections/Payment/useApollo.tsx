import { useRef, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import { FETCH_PAYMENT_QUERY } from './query';

export function useFetchPayments() {
  const [{ page = '1,25', sort = 'createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, data } = useQuery(FETCH_PAYMENT_QUERY, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.paymentMethods.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.paymentMethods.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    payments: data?.paymentMethods.paymentMethods ?? [],
  };
}

export function useFetchPayment(id: string) {
  const { loading, data } = useQuery(FETCH_PAYMENT_QUERY, {
    variables: { filter: { id } },
  });

  return { loading, payment: data?.paymentMethods.paymentMethods ?? [] };
}
