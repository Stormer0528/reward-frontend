import { gql } from 'src/__generated__/gql';

export const FETCH_SALES_QUERY = gql(/* GraphQL */ `
  query Sales($sort: String, $page: String, $filter: JSONObject) {
    sales(sort: $sort, page: $page, filter: $filter) {
      sales {
        id
        ID
        email
        token
        point
        amount
        status
        isMetal
        toEmail
        assetId
        memberId
        username
        fullName
        orderedAt
        createdAt
        sponsorCnt
        toMemberId
        toUsername
        toFullName
        productName
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
        id
        date
        token
        point
        amount
        status
        createdAt
        updatedAt
        deletedAt
        productName
        enrollVisibility
      }
      total
    }
  }
`);

export const CHECK_ADDRESS_WAIT_STATUS = gql(/* GraphQL */ `
  query CheckAddressWaitStatus($data: IDInput!) {
    checkAddressWaitStatus(data: $data) {
      status
    }
  }
`);

export const CREATE_ORDER = gql(/* GraphQL */ `
  mutation CreateOrder($data: CreateOrderInput!) {
    createOrder(data: $data) {
      id
      waitAddressId
      waitAddress {
        id
        address
        initBalance
      }
    }
  }
`);

export const COMPLETE_ORDER = gql(/* GraphQL */ `
  mutation CompleteOrder($data: CompleteOrderInput!) {
    completeOrder(data: $data) {
      status
    }
  }
`);

export const CANCEL_ORDER = gql(/* GraphQL */ `
  mutation CancelOrder($data: IDInput!) {
    cancelOrder(data: $data) {
      result
      message
    }
  }
`);
