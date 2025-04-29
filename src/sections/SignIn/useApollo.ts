import { useMutation } from '@apollo/client';

import { gql } from 'src/__generated__/gql';
// ----------------------------------------------------------------------

export const LOGIN_MUTATION = gql(/* GraphQL */ `
  mutation Login($data: MemberLoginInput!) {
    memberLogin(data: $data) {
      status
      accessToken
      passwordExpired
    }
  }
`);

// ----------------------------------------------------------------------

export function useApollo() {
  const [submitLogin, { loading, error }] = useMutation(LOGIN_MUTATION);

  return { loading, error, submitLogin };
}
