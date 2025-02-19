import { gql } from 'src/__generated__';

export const FETCH_TEAM_COMMISSION_STATS_QUERY = gql(/* GraphQL */ `
  query FetchTeamCommissionStats(
    $leftFilter: TeamReportSection!
    $rightFilter: TeamReportSection!
    $referralFilter: TeamReportSection!
  ) {
    LEFT: teamCommissions(teamReport: $leftFilter) {
      total
    }
    RIGHT: teamCommissions(teamReport: $rightFilter) {
      total
    }
    REFERRAL: teamCommissions(teamReport: $referralFilter) {
      total
    }
  }
`);

export const FETCH_TEAM_COMMISSION_QUERY = gql(/* GraphQL */ `
  query TeamCommissions(
    $sort: String
    $page: String
    $filter: JSONObject
    $teamReport: TeamReportSection!
  ) {
    teamCommissions(sort: $sort, page: $page, filter: $filter, teamReport: $teamReport) {
      total
      weeklyCommissions {
        createdAt
        updatedAt
        deletedAt
        id
        ID
        memberId
        weekStartDate
        begL
        begR
        newL
        newR
        maxL
        maxR
        endL
        endR
        pkgL
        pkgR
        commission
        shortNote
        status
        member {
          createdAt
          updatedAt
          deletedAt
          id
          ID
          username
          fullName
          sponsorId
          email
          mobile
          assetId
          primaryAddress
          secondaryAddress
          city
          state
          zipCode
          placementParentId
          placementPosition
          point
          emailVerified
          status
          totalIntroducers
          cmnCalculatedWeeks
          syncWithSendy
        }
      }
    }
  }
`);

export const FETCH_INTRODUCERS_QUERY = gql(/* GraphQL */ `
  query Introducers($sort: String, $page: String, $filter: JSONObject) {
    introducers(sort: $sort, page: $page, filter: $filter) {
      introducers {
        id
        ID
        email
        mobile
        username
        fullName
        createdAt
      }
      total
    }
  }
`);
