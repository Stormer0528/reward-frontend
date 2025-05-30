import { gql } from 'src/__generated__/gql';

export const LOGIN_MUTATION = gql(/* GraphQL */ `
  mutation Login($data: MemberLoginInput!) {
    memberLogin(data: $data) {
      status
      accessToken
      passwordExpired
    }
  }
`);

export const VERIFY_2FA_TOKEN = gql(/* GraphQL */ `
  mutation Verify2FAToken($data: TokenInput!) {
    verify2FAToken(data: $data) {
      accessToken
      status
    }
  }
`);
