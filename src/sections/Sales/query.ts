import { gql } from 'src/__generated__/gql';

export const FETCH_SALES_QUERY = gql(/* GraphQL */ `
  query FetchSales($sort: String, $page: String, $filter: JSONObject) {
    sales(sort: $sort, page: $page, filter: $filter) {
      sales {
        id
        invoiceNo
        memberId
        packageId
        orderedAt
        status
        member {
          id
          username
          fullName
          email
          point
          mobile
          assetId
          emailVerified
          totalIntroducers
          status
          primaryAddress
          secondaryAddress
          emailVerified
          totalIntroducers
          syncWithSendy
          preferredContact
          preferredContactDetail
          status
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
        }
        package {
          id
          productName
          amount
          date
          token
          point
          status
        }
        paymentMethod
      }
      total
    }
  }
`);

export const FETCH_SALES_STATS_QUERY = gql(/* GraphQL */ `
  query FetchSaleStats($allFilter: JSONObject, $inactiveFilter: JSONObject) {
    all: sales(filter: $allFilter) {
      total
    }
    inactive: sales(filter: $inactiveFilter) {
      total
    }
  }
`);

export const FETCH_PACKAGES_QUERY = gql(/* GraphQL */ `
  query Packages($sort: String, $page: String, $filter: JSONObject) {
    packages(sort: $sort, page: $page, filter: $filter) {
      packages {
        createdAt
        updatedAt
        deletedAt
        id
        productName
        amount
        status
        point
        date
        token
      }
      total
    }
  }
`);
