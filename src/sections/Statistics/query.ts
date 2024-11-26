import { gql } from 'src/__generated__';

export const GENERAL_QUERY = gql(/* GraphQL */ `
  query Query($data: LiveStatsArgs!) {
    liveBlockStats(data: $data) {
      dailyData {
        count
        field
      }
      meta
      total
    }
    liveMiningStats {
      dailyData {
        count
        field
      }
      meta
      total
    }
    liveUserStats(data: $data) {
      dailyData {
        count
        field
      }
      meta
      total
    }
  }
`);

export const FETCH_BLOCKS_QUERY = gql(/* GraphQL */ `
  query Blocks($page: String, $filter: JSONObject, $sort: String) {
    blocks(page: $page, filter: $filter, sort: $sort) {
      blocks {
        id
        blockNo
        hashRate
        difficulty
        issuedAt
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);

export const FETCH_STATISTICS_QUERY = gql(/* GraphQL */ `
  query Statistics($page: String, $filter: JSONObject, $sort: String) {
    statistics(page: $page, filter: $filter, sort: $sort) {
      statistics {
        id
        totalHashPower
        newBlocks
        totalBlocks
        totalMembers
        txcShared
        issuedAt
        from
        to
        status
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);

export const FETCH_MEMBERSTATISTICS_QUERY = gql(/* GraphQL */ `
  query TXCMemberStatistics($page: String, $filter: JSONObject, $sort: String) {
    memberStatistics(page: $page, filter: $filter, sort: $sort) {
      memberStatistics {
        id
        hashPower
        txcShared
        issuedAt
        percent
        createdAt
        updatedAt
        deletedAt
        member {
          username
          email
          assetId
        }
        statistics {
          newBlocks
          status
        }
      }
      total
    }
  }
`);

export const FETCH_HISTORY_STATISTICS_QUERY = gql(/* GraphQL */ `
  query HistoryStatistics($page: String, $filter: JSONObject, $sort: String) {
    statistics(page: $page, filter: $filter, sort: $sort) {
      statistics {
        id
        totalHashPower
        newBlocks
        totalBlocks
        totalMembers
        txcShared
        issuedAt
        from
        to
        status
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);

export const FETCH_BLOCKS_DATA_QUERY = gql(/* GraphQL */ `
  query BlocksData($data: PeriodStatsArgs!) {
    blocksData(data: $data) {
      hashRate
      difficulty
      base
      baseDate
    }
  }
`);

export const FETCH_MEMBER_COUNT = gql(/* GraphQL */ `
  query NewMemberCounts($data: PeriodStatsArgs!) {
    newMemberCounts(data: $data) {
      base
      baseDate
      minerCount
    }
  }
`);

export const FETCH_MEMBER_REWARD = gql(/* GraphQL */ `
  query AverageMemberReward($data: PeriodStatsArgs!) {
    averageMemberReward(data: $data) {
      base
      baseDate
      reward
    }
  }
`);

export const FETCH_COMMISSION_BY_PERIOD = gql(/* GraphQL */ `
  query CommissionByPeriod($data: PeriodStatsArgs!) {
    commissionByPeriod(data: $data) {
      base
      baseDate
      commission
    }
  }
`);

export const FETCH_REVENUE_QUERY = gql(/* GraphQL */ `
  query RevenueOverview {
    revenueOverview {
      revenue
      spent {
        label
        value
      }
    }
  }
`);

export const FETCH_TOTAL_MINER_QUERY = gql(/* GraphQL */ `
  query TotalMemberCounts($data: PeriodStatsArgs!) {
    totalMemberCounts(data: $data) {
      base
      baseDate
      minerCount
    }
  }
`);

export const FETCH_LATEST_REWARD = gql(/* GraphQL */ `
  query LatestStatistics {
    latestStatistics {
      id
      newBlocks
      totalMembers
      txcShared
      issuedAt
    }
  }
`);

export const FETCH_TXC_SHARES = gql(/* GraphQL */ `
  query TxcShares($data: PeriodStatsArgs!) {
    txcShares(data: $data) {
      base
      baseDate
      txc
    }
  }
`);
