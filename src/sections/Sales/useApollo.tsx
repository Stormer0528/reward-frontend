import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_SALES_QUERY, FETCH_PACKAGES_QUERY, FETCH_SALES_STATS_QUERY } from './query';

export function useFetchSales() {
  const [fetchSales, { loading, data }] = useLazyQuery(FETCH_SALES_QUERY);

  const rowCountRef = useRef(data?.sales.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.sales.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    sales: data?.sales.sales ?? [],
    fetchSales,
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
