import { gql } from 'src/__generated__/gql';

export const FETCH_ME_QUERY = gql(/* GraphQL */ `
  query fetchMe {
    memberMe {
      id
      username
      fullName
      email
      point
      primaryAddress
      secondaryAddress
      assetId
      mobile
      city
      emailVerified
      totalIntroducers
      status
      state
      emailVerified
      totalIntroducers
      status
      zipCode
      sponsorId
      sponsor {
        id
        username
        fullName
        email
        point
        emailVerified
        totalIntroducers
        status
        primaryAddress
        secondaryAddress
        mobile
        assetId
        emailVerified
        totalIntroducers
        status
        state
      }
      placementParentId
      placementPosition
      placementParent {
        id
        username
        fullName
        email
        point
        emailVerified
        totalIntroducers
        status
        primaryAddress
        secondaryAddress
        mobile
        assetId
        emailVerified
        totalIntroducers
        status
        state
      }
      sales {
        id
        invoiceNo
        memberId
        packageId
        paymentMethod
        status
        orderedAt
      }
      memberWallets {
        createdAt
        updatedAt
        deletedAt
        id
        memberId
        payoutId
        address
        percent
        payout {
          id
          method
          status
          name
          display
          createdAt
          updatedAt
          deletedAt
        }
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`);

export const FETCH_MEMBER_STATS_QUERY = gql(/* GraphQL */ `
  query FetchMemberStats($inactiveFilter: JSONObject) {
    all: members {
      total
    }
    inactive: members(filter: $inactiveFilter) {
      total
    }
  }
`);

export const FETCH_MEMBERS_QUERY = gql(/* GraphQL */ `
  query FetchMembers($page: String, $filter: JSONObject, $sort: String) {
    members(page: $page, filter: $filter, sort: $sort) {
      members {
        id
        username
        fullName
        email
        point
        primaryAddress
        secondaryAddress
        assetId
        mobile
        city
        emailVerified
        totalIntroducers
        status
        state
        emailVerified
        totalIntroducers
        status
        zipCode
        sponsorId
        placementParentId
        sponsor {
          id
          username
          fullName
          email
          emailVerified
          totalIntroducers
          status
          point
          emailVerified
          totalIntroducers
          status
          primaryAddress
          secondaryAddress
          mobile
          assetId
        }
        placementParentId
        placementPosition
        placementParent {
          id
          username
          fullName
          email
          emailVerified
          totalIntroducers
          status
          point
          emailVerified
          totalIntroducers
          status
          primaryAddress
          secondaryAddress
          mobile
          assetId
        }
        sales {
          id
          invoiceNo
          memberId
          packageId
          paymentMethod
          status
          orderedAt
        }
        memberWallets {
          createdAt
          updatedAt
          deletedAt
          id
          memberId
          payoutId
          address
          percent
          payout {
            id
            method
            status
            name
            display
            createdAt
            updatedAt
            deletedAt
          }
        }
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);

export const CREATE_MEMBER = gql(/* GraphQL */ `
  mutation CreateMember($data: CreateMemberInput!) {
    createMember(data: $data) {
      username
      fullName
      email
      mobile
      primaryAddress
      secondaryAddress
      assetId
    }
  }
`);

export const FETCH_MEMBER = gql(/* GraphQL */ `
  query FetchMember($filter: JSONObject) {
    members(filter: $filter) {
      members {
        id
        username
        fullName
        email
        point
        emailVerified
        totalIntroducers
        status
        mobile
        primaryAddress
        secondaryAddress
        assetId
        memberWallets {
          createdAt
          updatedAt
          deletedAt
          id
          memberId
          payoutId
          address
          percent
          payout {
            id
            method
            status
            name
            display
            createdAt
            updatedAt
            deletedAt
          }
        }
        deletedAt
      }
    }
  }
`);

export const UPDATE_MEMBER = gql(/* GraphQL */ `
  mutation UpdateMember($data: UpdateMemberInput!) {
    updateMember(data: $data) {
      id
      mobile
      primaryAddress
      secondaryAddress
      memberWallets {
        createdAt
        updatedAt
        deletedAt
        id
        memberId
        payoutId
        address
        percent
        payout {
          method
          display
        }
      }
      assetId
    }
  }
`);

export const FETCH_MEMBER_HISTORY = gql(/* GraphQL */ `
  query MemberOverview($data: MemberOverviewInput!) {
    memberOverview(data: $data) {
      currentHashPower
      totalTXCShared
      joinDate
    }
  }
`);

export const FETCH_MEMBER_STATISTICS = gql(/* GraphQL */ `
  query MemberStatistics($sort: String, $page: String, $filter: JSONObject) {
    memberStatistics(sort: $sort, page: $page, filter: $filter) {
      memberStatistics {
        issuedAt
        hashPower
        txcShared
      }
      total
    }
  }
`);

export const FETCH_PAYOUTS_QUERY = gql(/* GraphQL */ `
  query Payouts($filter: JSONObject, $page: String, $sort: String) {
    payouts(filter: $filter, page: $page, sort: $sort) {
      payouts {
        id
        method
        display
        name
        status
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);
