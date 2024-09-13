import { gql } from 'src/__generated__';

export const FETCH_STATISTICS_QUERY = gql(/* GraphQL */ `
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
  query Blocksdata($data: BlockStatsArgs!) {
    blocksData(data: $data) {
      base
      difficulty
      hashRate
    }
  }
`);
