import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_COMMISSION_QUERY, FETCH_COMMISSION_STATS_QUERY } from './query';

export function useFetchCommissions() {
  const [fetchCommissions, { loading, data }] = useLazyQuery(FETCH_COMMISSION_QUERY);

  const rowCountRef = useRef(data?.weeklyCommissions.total ?? 0);

  const rowCount: any = useMemo(() => {
    const newTotal = data?.weeklyCommissions.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    weeklyCommissions: data?.weeklyCommissions.weeklyCommissions ?? [],
    fetchCommissions,
  };
}

export function useFetchCommissionStats() {
  const [fetchCommissionStats, { data }] = useLazyQuery(FETCH_COMMISSION_STATS_QUERY);

  return { data, fetchCommissionStats };
}
