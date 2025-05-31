import { gql } from 'src/__generated__';

export const FORGOT_PASSWORD_REQUEST = gql(/* GraphQL */ `
  mutation RequestResetPassword($data: EmailInput!) {
    requestResetPassword(data: $data) {
      message
      result
    }
  }
`);
