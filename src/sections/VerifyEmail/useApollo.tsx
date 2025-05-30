import type { TokenInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { VERIFY_EMAIL } from './query';

export function useVerifyEmail() {
  const [submit, { loading, called, data }] = useMutation(VERIFY_EMAIL);

  const verifyEmail = useCallback(
    (token: TokenInput) => submit({ variables: { data: token } }),
    [submit]
  );

  return { loading, called, data, verifyEmail };
}
