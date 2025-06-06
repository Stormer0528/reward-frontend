import { useRef, useMemo } from 'react';
import { useQuery, useSuspenseQuery } from '@apollo/client';

import {
  FETCH_STATISTICS,
  FETCH_REWARD_BY_WALLETS,
  FETCH_MEMBER_STATISTICS,
  FETCH_MEMBER_STATISTICS_WALLETS,
} from './query';

export function useFetchMemberStatistics(variables: {
  filter?: any;
  page?: string;
  sort?: string;
}) {
  const { loading, data } = useQuery(FETCH_MEMBER_STATISTICS, { variables });

  const rowCountRef = useRef(data?.memberStatistics.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.memberStatistics.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    memberStatistics: data?.memberStatistics.memberStatistics ?? [],
  };
}

export function useFetchStatistics(variables: { filter?: any; page?: string; sort?: string }) {
  const { loading, data } = useQuery(FETCH_STATISTICS, { variables });

  const rowCountRef = useRef(data?.statistics.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.statistics.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return { loading, rowCount, statistics: data?.statistics.statistics ?? [] };
}

export function useFetchRewardByWallet(variables: { from: string; to: string }) {
  const { loading, data } = useQuery(FETCH_REWARD_BY_WALLETS, { variables });

  return { loading, rewardByWallets: data?.rewardsByWallets.rewards ?? [] };
}

export function useFetchMemberStatisticsWallets(variables: { filter: any }) {
  const { data } = useSuspenseQuery(FETCH_MEMBER_STATISTICS_WALLETS, { variables });

  return { wallets: data?.memberStatisticsWallets.memberStatisticsWallets ?? [] };
}
