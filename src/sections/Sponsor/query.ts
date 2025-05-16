import { gql } from 'src/__generated__/gql';

export const CREATE_ADD_MEMBER_ORDER = gql(/* GraphQL */ `
  mutation CreateAddMemberOrder($data: CreateAddMemberOrderInput!) {
    createAddMemberOrder(data: $data) {
      id
    }
  }
`);
