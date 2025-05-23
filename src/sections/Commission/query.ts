import { gql } from 'src/__generated__';

export const FETCH_COMMISSION_QUERY = gql(/* GraphQL */ `
  query WeeklyCommissions($sort: String, $page: String, $filter: JSONObject) {
    weeklyCommissions(sort: $sort, page: $page, filter: $filter) {
      weeklyCommissions {
        id
        ID
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
        note
        status
        username
        fullName
        memberId
        createdAt
        proofNote
        shortNote
        commission
        weekStartDate
        paymentMethod
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
