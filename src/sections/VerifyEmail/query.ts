import { gql } from 'src/__generated__/gql';

export const VERIFY_EMAIL = gql(/* GraphQL */ `
  mutation EmailVerify($data: TokenInput!) {
    emailVerify(data: $data) {
      result
      message
      packageID
      paymentMethod
    }
  }
`);
