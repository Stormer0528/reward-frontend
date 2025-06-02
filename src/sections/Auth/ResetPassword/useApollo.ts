import type { TokenInput, ResetPasswordTokenInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { VERIFY_RESET_TOKEN, RESET_PASSWORD_TOKEN } from './query';
// ----------------------------------------------------------------------

export function useResetPassword() {
  const [submit, { loading, error }] = useMutation(RESET_PASSWORD_TOKEN);

  const submitResetPassword = useCallback(
    (data: ResetPasswordTokenInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, submitResetPassword };
}

export function useVerifyResetToken() {
  const [submit, { loading, error, called, data: newToken }] = useMutation(VERIFY_RESET_TOKEN);

  const submitVerifyResetToken = useCallback(
    (data: TokenInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, called, newToken, submitVerifyResetToken };
}
