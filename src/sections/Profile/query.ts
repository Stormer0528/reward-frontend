import { gql } from 'src/__generated__/gql';

export const FETCH_ME_QUERY = gql(/* GraphQL */ `
  query fetchMe {
    memberMe {
      id
      ID
      city
      email
      point
      state
      mobile
      status
      assetId
      balance
      country
      zipCode
      username
      fullName
      groupName
      sponsorId
      allowState
      teamReport
      teamStrategy
      syncWithSendy
      emailVerified
      primaryAddress
      secondaryAddress
      totalIntroducers
      preferredContact
      commissionDefault
      cmnCalculatedWeeks
      preferredContactDetail
      commission {
        begL
        begR
        newL
        newR
      }
      sponsor {
        id
        ID
        email
        point
        state
        status
        mobile
        assetId
        balance
        country
        username
        fullName
        groupName
        allowState
        teamReport
        teamStrategy
        emailVerified
        emailVerified
        syncWithSendy
        primaryAddress
        secondaryAddress
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
      }
      placementParentId
      placementPosition
      placementParent {
        id
        ID
        email
        point
        state
        status
        mobile
        assetId
        country
        balance
        username
        fullName
        groupName
        allowState
        teamReport
        teamStrategy
        emailVerified
        syncWithSendy
        primaryAddress
        secondaryAddress
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
      }
      placementChildren {
        id
        ID
        email
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
        teamStrategy
        emailVerified
        syncWithSendy
        primaryAddress
        secondaryAddress
        preferredContact
        totalIntroducers
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
      }
      sales {
        id
        ID
        memberId
        packageId
        paymentMethod
        status
        isMetal
        orderedAt
        sponsorCnt
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
        note
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
        ID
        city
        email
        state
        point
        status
        mobile
        status
        country
        assetId
        balance
        zipCode
        username
        fullName
        sponsorId
        allowState
        teamReport
        emailVerified
        syncWithSendy
        primaryAddress
        secondaryAddress
        totalIntroducers
        preferredContact
        placementParentId
        placementPosition
        cmnCalculatedWeeks
        preferredContactDetail
        commission {
          begL
          begR
          newL
          newR
        }
        sponsor {
          id
          email
          point
          mobile
          status
          balance
          assetId
          username
          fullName
          teamReport
          allowState
          emailVerified
          syncWithSendy
          primaryAddress
          totalIntroducers
          preferredContact
          secondaryAddress
          cmnCalculatedWeeks
          preferredContactDetail
          commission {
            begL
            begR
            newL
            newR
          }
        }
        placementParent {
          id
          email
          point
          status
          mobile
          assetId
          balance
          username
          fullName
          allowState
          teamReport
          emailVerified
          syncWithSendy
          primaryAddress
          totalIntroducers
          secondaryAddress
          preferredContact
          commissionDefault
          cmnCalculatedWeeks
          preferredContactDetail
          commission {
            begL
            begR
            newL
            newR
          }
        }
        sales {
          id
          memberId
          packageId
          paymentMethod
          status
          isMetal
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

export const FETCH_PLACEMENT_MEMBERS_QUERY = gql(/* GraphQL */ `
  query FetchPlacementMembers($page: String, $filter: JSONObject, $sort: String) {
    members(page: $page, filter: $filter, sort: $sort) {
      members {
        id
        email
        status
        balance
        username
        fullName
        groupName
        sponsorId
        allowState
        teamReport
        teamStrategy
        commissionDefault
        placementParentId
        placementPosition
        cmnCalculatedWeeks
        placementParent {
          id
          username
          fullName
        }
        sponsor {
          username
        }
        commission {
          begL
          begR
          newL
          newR
        }
        createdAt
      }
      total
    }
  }
`);

export const FETCH_PLACEMENT_MEMBERS_O_QUERY = gql(/* GraphQL */ `
  query PlacementMembers {
    placementMembers {
      id
      username
      fullName
      createdAt
      commission {
        begL
        begR
        newL
        newR
      }
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      teamStrategy
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
        ID
        email
        point
        status
        mobile
        assetId
        balance
        username
        fullName
        allowState
        teamReport
        emailVerified
        primaryAddress
        secondaryAddress
        totalIntroducers
        commissionDefault
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
  query MemberOverview($data: IDInput!) {
    memberOverview(data: $data) {
      cashCommissionPotential
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

export const UPDATE_MEMBER_PASSWORD = gql(/* GraphQL */ `
  mutation UpdatePasswordMember($data: UpdateMemberPasswordInput!) {
    updatePasswordMember(data: $data) {
      message
      result
    }
  }
`);
