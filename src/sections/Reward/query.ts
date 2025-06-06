import { gql } from 'src/__generated__/gql';

export const FETCH_STATISTICS = gql(/* GraphQL */ `
  query Reward($sort: String, $page: String, $filter: JSONObject) {
    statistics(sort: $sort, page: $page, filter: $filter) {
      statistics {
        id
        to
        from
        status
        issuedAt
        txcShared
        newBlocks
        totalBlocks
        totalMembers
        totalHashPower
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

export const FETCH_MEMBER_STATISTICS = gql(/* GraphQL */ `
  query FetchMemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        id
        percent
        issuedAt
        memberId
        txcShared
        hashPower
        createdAt
        updatedAt
        deletedAt
        statisticsId
        member {
          id
          ID
          email
          state
          point
          mobile
          status
          assetId
          username
          fullName
          allowState
          teamReport
          OTPEnabled
          teamStrategy
          emailVerified
          syncWithSendy
          isTexitRanger
          peerAcceptable
          primaryAddress
          secondaryAddress
          totalIntroducers
          preferredContact
          commissionDefault
          placementPosition
          cmnCalculatedWeeks
          placementRequested
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
        }
        statistics {
          id
          to
          from
          status
          issuedAt
          txcShared
          newBlocks
          totalBlocks
          totalMembers
          totalHashPower
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
  mutation RemoveMemberStatisticsByStatisticsId($data: IDInput!) {
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

export const FETCH_REWARD_BY_WALLETS = gql(/* GraphQL */ `
  query RewardByWallet($from: DateTimeISO!, $to: DateTimeISO!) {
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

export const FETCH_MEMBER_STATISTICS_WALLETS = gql(/* GraphQL */ `
  query MemberStatisticsWallets($sort: String, $page: String, $filter: JSONObject) {
    memberStatisticsWallets(sort: $sort, page: $page, filter: $filter) {
      memberStatisticsWallets {
        id
        txc
        issuedAt
        memberWallet {
          address
          percent
          isDefault
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
