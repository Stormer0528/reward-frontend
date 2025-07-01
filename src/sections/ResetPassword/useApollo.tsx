import type { EmailInput, TokenInput, ResetPasswordTokenInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { RESET_PASSWORD_TOKEN, RESET_PASSWORD_REQUEST, VERIFY_RESET_PASSWORD_TOKEN } from './query';

export function useResetPasswordRequest() {
  const [submit, { loading, data }] = useMutation(RESET_PASSWORD_REQUEST);

  const resetPasswordRequest = useCallback(
    (newData: EmailInput) => submit({ variables: { data: newData } }),
    [submit]
  );

  return { loading, data, resetPasswordRequest };
}

export function useResetPasswordByToken() {
  const [submit, { loading, data }] = useMutation(RESET_PASSWORD_TOKEN);

  const resetPasswordByToken = useCallback(
    (newData: ResetPasswordTokenInput) => submit({ variables: { data: newData } }),
    [submit]
  );

  return { loading, data, resetPasswordByToken };
}

export function useVerifyResetPasswordToken() {
  const [submit, { loading, data, error }] = useMutation(VERIFY_RESET_PASSWORD_TOKEN);

  const verifyResetPasswordToken = useCallback(
    (newData: TokenInput) => submit({ variables: { data: newData } }),
    [submit]
  );

  return { loading, data, error, verifyResetPasswordToken };
}
