import type { MemberLoginInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
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

export function useLogin() {
  const [submit, { loading, error }] = useMutation(LOGIN_MUTATION);

  const submitLogin = useCallback(
    (data: MemberLoginInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, submitLogin };
}
