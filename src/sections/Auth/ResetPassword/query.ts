import { gql } from 'src/__generated__';

export const RESET_PASSWORD_TOKEN = gql(/* GraphQL */ `
  mutation ResetPasswordByToken($data: ResetPasswordTokenInput!) {
    resetPasswordByToken(data: $data) {
      message
      result
    }
  }
`);

export const VERIFY_RESET_TOKEN = gql(/* GraphQL */ `
  mutation ResetTokenVerify($data: TokenInput!) {
    resetTokenVerify(data: $data) {
      token
    }
  }
`);
