import { gql } from 'src/__generated__/gql';

export const TXC_REQUEST_LIST = gql(/* GraphQL */ `
  query TxcRequests($sort: String, $page: String, $filter: JSONObject) {
    txcRequests(sort: $sort, page: $page, filter: $filter) {
      txcRequests {
        id
        ID
        amount
        status
        memberId
        username
        fullName
        createdAt
        walletAddress
      }
      total
    }
  }
`);

export const CREATE_BUY_TXC_ORDER = gql(/* GraphQL */ `
  mutation CreateBuyTXCOrder($data: CreateBuyTXCInput!) {
    createBuyTXCOrder(data: $data) {
      id
    }
  }
`);
