import { useLazyQuery } from '@apollo/client';

import {
  GENERAL_QUERY,
  FETCH_BLOCKS_QUERY,
  // FETCH_STATISTICS_QUERY,
  // FETCH_MEMBERSTATISTICS_QUERY,
  FETCH_MEMBER_COUNT,
  FETCH_MEMBER_REWARD,
  FETCH_REVENUE_QUERY,
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

  const revenue = data?.revenueOverview ?? {
    revenue: 0,
    commissionPending: 0,
    commissionApproved: 0,
    commissionPaid: 0,
    mineElectricy: 0,
    mineFacility: 0,
    mineMaintainance: 0,
    mineNewEquipment: 0,
    infrastructure: 0,
    marketingMineTXCPromotion: 0,
    marketingTXCPromotion: 0,
  };

  return { loading, revenue, fetchRevenue };
}
