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

export const CREATE_SALE = gql(/* GraphQL */ `
  mutation CreateSale($data: CreateSaleInput!) {
    createSale(data: $data) {
      invoiceNo
      orderedAt
      memberId
      paymentMethod
      packageId
      status
    }
  }
`);

export const UPDATE_SALE = gql(/* GraphQL */ `
  mutation UpdateSale($data: UpdateSaleInput!) {
    updateSale(data: $data) {
      id
      status
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
