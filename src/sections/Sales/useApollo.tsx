import { useRef, useMemo } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import {
  CREATE_ORDER,
  CANCEL_ORDER,
  COMPLETE_ORDER,
  FETCH_SALES_QUERY,
  CREATE_SIGNUP_ORDER,
  FETCH_PACKAGES_QUERY,
  FETCH_SALES_STATS_QUERY,
  CHECK_ADDRESS_WAIT_STATUS,
} from './query';

export function useFetchSales() {
  const [{ page = '1,25', sort = 'orderedAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, data, called } = useQuery(FETCH_SALES_QUERY, {
    variables: { filter: graphQueryFilter, page, sort },
  });

  const rowCountRef = useRef(data?.sales.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.sales.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    sales: data?.sales.sales ?? [],
  };
}

export function useFetchSaleStats() {
  const [fetchSaleStats, { data }] = useLazyQuery(FETCH_SALES_STATS_QUERY);

  return { stats: data, fetchSaleStats };
}

export function useFetchPackages() {
  const [fetchPackages, { loading, data }] = useLazyQuery(FETCH_PACKAGES_QUERY);

  const rowCountRef = useRef(data?.packages.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.packages.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    packages: data?.packages.packages ?? [],
    fetchPackages,
  };
}

export function useCheckAddressWaitStatus() {
  const [checkAddressWaitStatus, { loading, data, error }] =
    useLazyQuery(CHECK_ADDRESS_WAIT_STATUS);

  return { loading, status: data?.checkAddressWaitStatus.status, error, checkAddressWaitStatus };
}

export function useCreateOrder() {
  const [createOrder, { loading, data, error }] = useMutation(CREATE_ORDER);

  return { loading, data, error, createOrder };
}

export function useCreateSignUpOrder() {
  const [createSignUpOrder, { loading, data, error }] = useMutation(CREATE_SIGNUP_ORDER);

  return { loading, data, error, createSignUpOrder };
}

export function useCompleteOrder() {
  const [completeOrder, { loading, data, error }] = useMutation(COMPLETE_ORDER);

  return { loading, data, error, completeOrder };
}

export function useCancelOrder() {
  const [cancelOrder, { loading, data, error }] = useMutation(CANCEL_ORDER);

  return { loading, data, error, cancelOrder };
}
