import type { TokenInput, MemberLoginInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION, VERIFY_2FA_TOKEN } from './query';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function useLogin() {
  const [submit, { loading, error }] = useMutation(LOGIN_MUTATION);

  const submitLogin = useCallback(
    (data: MemberLoginInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, submitLogin };
}

export function useVerify2FAAndToken() {
  const [submit, { loading, error }] = useMutation(VERIFY_2FA_TOKEN);

  const verify2FAAndToken = useCallback(
    (data: TokenInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, verify2FAAndToken };
}
