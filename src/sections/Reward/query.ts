import { gql } from 'src/__generated__/gql';

export const FETCH_STATISTICS_QUERY = gql(/* GraphQL */ `
  query Reward($sort: String, $page: String, $filter: JSONObject) {
    statistics(sort: $sort, page: $page, filter: $filter) {
      statistics {
        id
        issuedAt
        newBlocks
        totalBlocks
        totalHashPower
        totalMembers
        txcShared
        from
        to
        status
        statisticsSales {
          id
          saleId
          issuedAt
        }
        memberStatistics {
          txcShared
          memberStatisticsWallets {
            id
          }
        }
      }
      total
    }
  }
`);

export const FETCH_MEMBERSTATISTICS_QUERY = gql(/* GraphQL */ `
  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        createdAt
        updatedAt
        deletedAt
        id
        memberId
        statisticsId
        txcShared
        hashPower
        percent
        issuedAt
        member {
          id
          ID
          email
          state
          point
          mobile
          status
          assetId
          balance
          username
          fullName
          groupName
          allowState
          teamReport
          OTPEnabled
          teamStrategy
          emailVerified
          syncWithSendy
          totalIntroducers
          preferredContact
          commissionDefault
          placementPosition
          cmnCalculatedWeeks
          preferredContactDetail
          commission {
            begL
            begR
            newL
            newR
          }
          memberWallets {
            id
            address
            percent
            memberId
            payoutId
            isDefault
            payout {
              id
              name
              method
              status
              display
            }
          }
          primaryAddress
          secondaryAddress
        }
        statistics {
          createdAt
          updatedAt
          deletedAt
          id
          newBlocks
          totalBlocks
          totalHashPower
          totalMembers
          status
          txcShared
          issuedAt
          from
          to
        }
      }
      total
    }
  }
`);

export const CREATE_STATISTICS = gql(/* GraphQL */ `
  mutation CreateStatistics($data: CreateStatisticsInput!) {
    createStatistics(data: $data) {
      id
      newBlocks
    }
  }
`);

export const CREATE_MANY_MEMBER_STATISTICS = gql(/* GraphQL */ `
  mutation CreateManyMemberStatistics($data: CreateManyMemberStatisticsInput!) {
    createManyMemberStatistics(data: $data) {
      count
    }
  }
`);

export const UPDATE_STATISTICS = gql(/* GraphQL */ `
  mutation UpdateStatistics($data: UpdateStatisticsInput!) {
    updateStatistics(data: $data) {
      status
      txcShared
    }
  }
`);

export const REMOVE_MEMBER_STATISTICS = gql(/* GraphQL */ `
  mutation RemoveMemberStatisticsByStaitisId($data: IDInput!) {
    removeMemberStatisticsByStaitisId(data: $data) {
      count
    }
  }
`);

export const REMOVE_STATISTICS = gql(/* GraphQL */ `
  mutation RemoveManyStatistics($data: IDsInput!) {
    removeManyStatistics(data: $data) {
      count
    }
  }
`);

export const REWARED_BY_WALLETS = gql(/* GraphQL */ `
  query Rewards($from: DateTimeISO!, $to: DateTimeISO!) {
    rewardsByWallets(from: $from, to: $to) {
      rewards {
        txc
        wallet {
          id
          address
          percent
          payout {
            name
            method
          }
        }
      }
    }
  }
`);

export const FETCH_DAILY_REWARD = gql(/* GraphQL */ `
  query DailyRewards($from: DateTimeISO!, $to: DateTimeISO!) {
    dailyRewards(from: $from, to: $to) {
      rewards {
        day
        rewardsByWallet {
          txc
          wallet {
            address
            payout {
              method
            }
          }
        }
        totalTxc
      }
    }
  }
`);

export const FETCH_MEMBERSTATISTICS_WALLETS_QUERY = gql(/* GraphQL */ `
  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {
    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {
      memberStatisticsWallets {
        id
        txc
        issuedAt
        memberWallet {
          address
        }
        memberStatistic {
          hashPower
          percent
          txcShared
        }
      }
    }
  }
`);
