import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import {
  FETCH_INTRODUCERS_QUERY,
  FETCH_TEAM_COMMISSION_QUERY,
  FETCH_TEAM_COMMISSION_STATS_QUERY,
} from './query';

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

export function useFetchIntroducers() {
  const [fetchIntroducers, { loading, data }] = useLazyQuery(FETCH_INTRODUCERS_QUERY);

  const rowCountRef = useRef(data?.introducers.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.introducers.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    introducers: data?.introducers.introducers ?? [],
    fetchIntroducers,
  };
}
