import { gql } from 'src/__generated__/gql';

export const VERIFY_EMAIL_TOKEN = gql(/* GraphQL */ `
  mutation VerifyEmailToken($data: TokenInput!) {
    verifyEmailToken(data: $data) {
      message
      packageID
      paymentMethod
      result
    }
  }
`);
