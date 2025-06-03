import { useRef, useMemo } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { parseFilterModel } from 'src/utils/parseFilter';

import {
  FETCH_SPONSOR_QUERY,
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

export function useFetchSponsors(allowState: string) {
  const [{ page, sort, filter }] = useQueryString();

  const graphQueryFilter = useMemo(
    () => parseFilterModel({ allowState }, filter),
    [filter, allowState]
  );

  const { loading, data } = useQuery(FETCH_SPONSOR_QUERY, {
    variables: { page, sort, filter: graphQueryFilter },
  });

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
  };
}
