import { useLazyQuery } from '@apollo/client';

import {
  GENERAL_QUERY,
  FETCH_TXC_SHARES,
  FETCH_TOP_EARNERS,
  FETCH_MEMBER_COUNT,
  FETCH_BLOCKS_QUERY,
  FETCH_LATEST_REWARD,
  FETCH_MEMBER_REWARD,
  FETCH_REVENUE_QUERY,
  FETCH_TOP_RECRUITERS,
  FETCH_STATISTICS_QUERY,
  FETCH_TOTAL_MINER_QUERY,
  FETCH_BLOCKS_DATA_QUERY,
  FETCH_COMMISSION_BY_PERIOD,
} from './query';

export function useFetchGeneral() {
  const [fetchGeneral, { loading, data }] = useLazyQuery(GENERAL_QUERY);

  return { loading, data, fetchGeneral };
}

export function useFetchBlocksQuery() {
  const [fetchBlocks, { loading, data }] = useLazyQuery(FETCH_BLOCKS_QUERY);

  return { loading, blocks: data?.blocks.blocks ?? [], fetchBlocks };
}

export function useFetchStatistics() {
  const [fetchStatistics, { loading, data }] = useLazyQuery(FETCH_STATISTICS_QUERY);

  return { loading, statistics: data?.statistics.statistics ?? [], fetchStatistics };
}

export function useFetchBlocks() {
  const [fetchBlocks, { loading, data }] = useLazyQuery(FETCH_BLOCKS_DATA_QUERY);

  return { loading, blocks: data?.blocksData ?? [], fetchBlocks };
}

export function useFetchMemberCounts() {
  const [fetchMemberCount, { loading, data }] = useLazyQuery(FETCH_MEMBER_COUNT);

  return { loading, memberCount: data?.newMemberCounts ?? [], fetchMemberCount };
}

export function useFetchTotalMiner() {
  const [fetchTotalMiner, { loading, data }] = useLazyQuery(FETCH_TOTAL_MINER_QUERY);

  return { loading, totalMiner: data?.totalMemberCounts ?? [], fetchTotalMiner };
}

export function useFetchMemberReward() {
  const [fetchMemberReward, { loading, data }] = useLazyQuery(FETCH_MEMBER_REWARD);

  return { loading, memberReward: data?.averageMemberReward ?? [], fetchMemberReward };
}

export function useFetchCommissionByPeriod() {
  const [fetchCommissionByPeriod, { loading, data }] = useLazyQuery(FETCH_COMMISSION_BY_PERIOD);

  return { loading, commission: data?.commissionByPeriod ?? [], fetchCommissionByPeriod };
}

export function useFetchRevenue() {
  const [fetchRevenue, { loading, data }] = useLazyQuery(FETCH_REVENUE_QUERY);

  return {
    loading,
    revenue: {
      total: data?.revenueOverview.revenue ?? 0,
      spent: data?.revenueOverview.spent ?? [],
    },
    fetchRevenue,
  };
}

export function useFetchLatestReward() {
  const [fetchReward, { loading, data }] = useLazyQuery(FETCH_LATEST_REWARD);

  return { loading, latest: data?.latestStatistics ?? [], fetchReward };
}

export function useFetchTXCShares() {
  const [fetchTXCShares, { loading, data }] = useLazyQuery(FETCH_TXC_SHARES);

  return { loading, txcShares: data?.txcShares ?? [], fetchTXCShares };
}

export function useFetchTopEarners() {
  const [fetchTopEarners, { loading, data }] = useLazyQuery(FETCH_TOP_EARNERS);

  return { loading, topEarners: data?.topEarners ?? [], fetchTopEarners };
}

export function useFetchTopRecruiters() {
  const [fetchTopRecruiters, { loading, data }] = useLazyQuery(FETCH_TOP_RECRUITERS);

  return { loading, topRecruiteres: data?.topRecruiters ?? [], fetchTopRecruiters };
}
