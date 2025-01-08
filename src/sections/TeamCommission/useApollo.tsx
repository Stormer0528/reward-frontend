import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_TEAM_COMMISSION_QUERY, FETCH_TEAM_COMMISSION_STATS_QUERY } from './query';

export function useFetchTeamCommissionStats() {
  const [fetchTeamCommissionStats, { data }] = useLazyQuery(FETCH_TEAM_COMMISSION_STATS_QUERY);

  return { stats: data, fetchTeamCommissionStats };
}

export function useFetchTeamCommission() {
  const [fetchTeamCommission, { loading, data }] = useLazyQuery(FETCH_TEAM_COMMISSION_QUERY);

  const rowCountRef = useRef(data?.teamCommissions.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.teamCommissions.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    commissions: data?.teamCommissions.weeklyCommissions ?? [],
    fetchTeamCommission,
  };
}
