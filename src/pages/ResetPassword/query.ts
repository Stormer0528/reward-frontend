import { gql } from 'src/__generated__';

export const RESET_TOKEN_VERIFY = gql(/* GraphQL */ `
  mutation ResetTokenVerify($data: TokenInput!) {
    resetTokenVerify(data: $data) {
      email
      token
    }
  }
`);
