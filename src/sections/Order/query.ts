import { gql } from 'src/__generated__/gql';

export const FETCH_ORDER_BY_ID = gql(/* GraphQL */ `
  query OrderById($data: IDInput!) {
    orderById(data: $data) {
      id
      status
      expiredAt
      paymentToken
      paymentChain
      paymentAddress
      requiredBalance
    }
  }
`);

export const CHECK_ORDER_STATUS = gql(/* GraphQL */ `
  query CheckOrder($data: IDInput!) {
    orderById(data: $data) {
      status
    }
  }
`);

export const FETCH_MY_ADDRESS = gql(/* GraphQL */ `
  query MyAddresses {
    myAddresses {
      chain
      address
      balance
    }
  }
`);

export const CREATE_ORDER = gql(/* GraphQL */ `
  mutation CreateOrder($data: CreateOrderInput!) {
    createOrder(data: $data) {
      id
    }
  }
`);

export const CREATE_SIGNUP_ORDER = gql(/* GraphQL */ `
  mutation CreateSignUpOrder($data: CreateSignUpOrderInput!) {
    createSignUpOrder(data: $data) {
      id
    }
  }
`);

export const CANCEL_ORDER = gql(/* GraphQL */ `
  mutation CancelOrder($data: IDInput!) {
    cancelOrder(data: $data) {
      message
      result
    }
  }
`);

export const SET_ORDER_PAYMENT = gql(/* GraphQL */ `
  mutation SetOrderPayment($data: OrderPaymentSetInput!) {
    setOrderPayment(data: $data) {
      id
    }
  }
`);
