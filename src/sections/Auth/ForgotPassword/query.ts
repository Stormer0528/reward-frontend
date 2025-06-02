import { gql } from 'src/__generated__';

export const FORGOT_PASSWORD_REQUEST = gql(/* GraphQL */ `
  mutation ResetPasswordRequest($data: EmailInput!) {
    resetPasswordRequest(data: $data) {
      result
      message
    }
  }
`);
