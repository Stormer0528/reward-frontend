import { gql } from 'src/__generated__/gql';

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
        totalBalance
      }
    }
  }
`);

export const CREATE_SIGNUP_ORDER = gql(/* GraphQL */ `
  mutation CreateSignUpOrder($data: CreateSignUpOrderInput!) {
    createSignUpOrder(data: $data) {
      id
      waitAddressId
      waitAddress {
        id
        address
        totalBalance
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
  mutation CancelOrder($data: IDNInput!) {
    cancelOrder(data: $data) {
      result
      message
    }
  }
`);
