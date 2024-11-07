import { gql } from 'src/__generated__';

export const FETCH_COMMISSION_QUERY = gql(/* GraphQL */ `
  query WeeklyCommissions($page: String, $sort: String, $filter: JSONObject) {
    weeklyCommissions(page: $page, sort: $sort, filter: $filter) {
      weeklyCommissions {
        id
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
        status
        note
        member {
          createdAt
          updatedAt
          deletedAt
          id
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
        }
        createdAt
        updatedAt
        deletedAt
      }
      total
    }
  }
`);

export const FETCH_COMMISSION_STATS_QUERY = gql(/* GraphQL */ `
  query FetchCommissionStats(
    $allFilter: JSONObject
    $pendingFilter: JSONObject
    $declineFilter: JSONObject
    $sentFilter: JSONObject
  ) {
    all: weeklyCommissions(filter: $allFilter) {
      total
    }
    pending: weeklyCommissions(filter: $pendingFilter) {
      total
    }
    decline: weeklyCommissions(filter: $declineFilter) {
      total
    }
    sent: weeklyCommissions(filter: $sentFilter) {
      total
    }
  }
`);
