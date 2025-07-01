import { gql } from 'src/__generated__';

export const RESET_PASSWORD_REQUEST = gql(/* GraphQL */ `
  mutation RequestResetPassword($data: EmailInput!) {
    requestResetPassword(data: $data) {
      result
      message
    }
  }
`);

export const RESET_PASSWORD_TOKEN = gql(/* GraphQL */ `
  mutation ResetPasswordByToken($data: ResetPasswordTokenInput!) {
    resetPasswordByToken(data: $data) {
      message
      result
    }
  }
`);

export const VERIFY_RESET_PASSWORD_TOKEN = gql(/* GraphQL */ `
  mutation VerifyResetPasswordToken($data: TokenInput!) {
    verifyResetPasswordToken(data: $data) {
      token
    }
  }
`);
