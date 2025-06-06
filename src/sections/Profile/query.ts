import { gql } from 'src/__generated__/gql';

export const FETCH_MY_PROFILE = gql(/* GraphQL */ `
  query fetchMyProfile {
    memberMe {
      ...MemberFields
      groupSetting {
        id
        name
        commissionDefaults
      }
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
        country
        username
        fullName
        allowState
        teamReport
        OTPEnabled
        teamStrategy
        emailVerified
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
        placementRequested
        cmnCalculatedWeeks
        preferredContactDetail
      }
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
        username
        fullName
        allowState
        teamReport
        OTPEnabled
        teamStrategy
        isTexitRanger
        emailVerified
        syncWithSendy
        peerAcceptable
        primaryAddress
        secondaryAddress
        totalIntroducers
        preferredContact
        commissionDefault
        placementPosition
        placementRequested
        cmnCalculatedWeeks
        preferredContactDetail
      }
      placementChildren {
        id
        ID
        email
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
        preferredContact
        totalIntroducers
        commissionDefault
        placementPosition
        placementRequested
        cmnCalculatedWeeks
        preferredContactDetail
      }
      sales {
        id
        ID
        status
        isMetal
        memberId
        packageId
        orderedAt
        sponsorCnt
        paymentMethod
      }
      memberWallets {
        id
        note
        address
        percent
        memberId
        payoutId
        isDefault
        payout {
          id
          method
          status
          name
          display
        }
      }
      communications {
        open
        sent
        body
        email
        sender
        subject
        openTime
        sentTime
      }
      setting {
        id
        memberId
        communication
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

export const FETCH_MEMBER_SEARCH_QUERY = gql(/* GraphQL */ `
  query SearchMembers($sort: String, $page: String, $filter: JSONObject) {
    searchMembers(sort: $sort, page: $page, filter: $filter) {
      members {
        id
        email
        username
        fullName
      }
    }
  }
`);
// TODO: Consider move this to sponsorship tree section????
export const FETCH_PLACEMENT_MEMBERS = gql(/* GraphQL */ `
  query FetchPlacementMembers {
    sponsorMembers {
      id
      username
      fullName
      sponsorId
      createdAt
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
      teamStrategy
      placementPosition
      placementParentId
      cmnCalculatedWeeks
      commission {
        begL
        begR
        newL
        newR
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
        id
        address
        percent
        memberId
        payoutId
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
      point
      joinDate
      totalTXCShared
      currentHashPower
      orderedAvailablePoint
      cashCommissionPotential
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

export const GENERATE_2FA = gql(/* GraphQL */ `
  query generateQuery {
    generate2FA
  }
`);

export const VERIFY_2FA_ENABLE = gql(/* GraphQL */ `
  mutation Verify2FAAndEnable($data: Verify2FAInput!) {
    verify2FAAndEnable(data: $data) {
      accessToken
    }
  }
`);

export const DISABLE_2FA = gql(/* GraphQL */ `
  mutation Disable2FA {
    disable2FA {
      accessToken
    }
  }
`);

export const UPDATE_SETTING_MEMBER = gql(/* GraphQL */ `
  mutation UpsertSettingByMemberId($data: UpsertSettingInput!) {
    upsertSettingByMemberId(data: $data) {
      id
    }
  }
`);

export const MEMBER_LOGOUT = gql(/* GraphQL */ `
  mutation MemberLogout {
    memberLogout {
      result
      message
    }
  }
`);

export const MEMBER_EXCHANGE_LOGIN = gql(/* GraphQL */ `
  mutation MemberExchangeLogin($data: MemberLoginInput!) {
    memberExchangeLogin(data: $data) {
      status
      accessToken
      passwordExpired
    }
  }
`);

export const VERIFY_EMAIL_CODE = gql(/* GraphQL */ `
  mutation EmailVerifyCode($data: VerificationCodeInput!) {
    emailVerifyCode(data: $data) {
      accessToken
    }
  }
`);


export const GENERATE_REFERENCE_LINK = gql(/* GraphQL */ `
  query GenerateReferenceLink {
    generateReferenceLink {
      link
    }
  }
`);