import type { EmailInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { FORGOT_PASSWORD_REQUEST } from './query';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function useForgotPassword() {
  const [submit, { loading, error }] = useMutation(FORGOT_PASSWORD_REQUEST);

  const submitForgotPassword = useCallback(
    (data: EmailInput) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, submitForgotPassword };
}
