import { useRef, useMemo } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import {
  FETCH_SALES_QUERY,
  FETCH_PACKAGES_QUERY,
  ORDER_AVAILABLE_POINT,
  FETCH_SALES_STATS_QUERY,
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

export function useOrderAvailablePoint() {
  const { loading, data, error } = useQuery(ORDER_AVAILABLE_POINT);

  return { loading, available: data?.orderAvailablePoint ?? 0, error };
}
