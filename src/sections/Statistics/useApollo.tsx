import { useQuery, useLazyQuery } from '@apollo/client';

import {
  FETCH_LIVE_STATS,
  FETCH_TXC_SHARES,
  FETCH_TOP_EARNERS,
  FETCH_BLOCKS_DATA,
  FETCH_MEMBER_COUNT,
  FETCH_BLOCKS_QUERY,
  FETCH_LATEST_REWARD,
  FETCH_MEMBER_REWARD,
  FETCH_REVENUE_QUERY,
  FETCH_TOP_RECRUITERS,
  FETCH_STATISTICS_QUERY,
  FETCH_TOTAL_MINER_QUERY,
  FETCH_MEMBERS_BY_COUNTRY,
  FETCH_COMMISSION_BY_PERIOD,
} from './query';

export function useFetchLiveStats(pastDays: number = 7) {
  const { loading, data } = useQuery(FETCH_LIVE_STATS, { variables: { data: { pastDays } } });

  return { loading, data };
}

export function useFetchBlocksQuery() {
  const [fetchBlocks, { loading, data }] = useLazyQuery(FETCH_BLOCKS_QUERY);

  return { loading, blocks: data?.blocks.blocks ?? [], fetchBlocks };
}

export function useFetchStatistics() {
  const [fetchStatistics, { loading, data }] = useLazyQuery(FETCH_STATISTICS_QUERY);

  return { loading, statistics: data?.statistics.statistics ?? [], fetchStatistics };
}

export function useFetchBlocks(type: string) {
  const { loading, data } = useQuery(FETCH_BLOCKS_DATA, { variables: { data: { type } } });

  return { loading, blocks: data?.blocksData ?? [] };
}

export function useFetchMemberCounts(type: string) {
  const { loading, data } = useQuery(FETCH_MEMBER_COUNT, {
    variables: { data: { type } },
  });

  return { loading, memberCount: data?.newMemberCounts ?? [] };
}

export function useFetchTotalMiner(type: string) {
  const { loading, data } = useQuery(FETCH_TOTAL_MINER_QUERY, { variables: { data: { type } } });

  return { loading, totalMiner: data?.totalMemberCounts ?? [] };
}

export function useFetchMemberReward(type: string) {
  const { loading, data } = useQuery(FETCH_MEMBER_REWARD, { variables: { data: { type } } });

  return { loading, memberReward: data?.averageMemberReward ?? [] };
}

export function useFetchCommissionByPeriod(type: string) {
  const { loading, data } = useQuery(FETCH_COMMISSION_BY_PERIOD, { variables: { data: { type } } });

  return { loading, commission: data?.commissionByPeriod ?? [] };
}

export function useFetchRevenue() {
  const { data, loading } = useQuery(FETCH_REVENUE_QUERY);

  return {
    revenue: {
      total: data?.revenueOverview.revenue ?? 0,
      spent: data?.revenueOverview.spent ?? [],
    },
    loading,
  };
}

export function useFetchLatestReward() {
  const { loading, data } = useQuery(FETCH_LATEST_REWARD);

  return { loading, latest: data?.latestStatistics ?? [] };
}

export function useFetchTXCShares(type: string) {
  const { loading, data } = useQuery(FETCH_TXC_SHARES, { variables: { data: { type } } });

  return { loading, txcShares: data?.txcShares ?? [] };
}

export function useFetchTopEarners() {
  const [fetchTopEarners, { loading, data }] = useLazyQuery(FETCH_TOP_EARNERS);

  return { loading, topEarners: data?.topEarners ?? [], fetchTopEarners };
}

export function useFetchTopRecruiters() {
  const [fetchTopRecruiters, { loading, data }] = useLazyQuery(FETCH_TOP_RECRUITERS);

  return { loading, topRecruiters: data?.topRecruiters ?? [], fetchTopRecruiters };
}

export function useFetchMemberByCountry() {
  const { loading, data } = useQuery(FETCH_MEMBERS_BY_COUNTRY);

  return { loading, members: data?.membersByCountry ?? [] };
}
