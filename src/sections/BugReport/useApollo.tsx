import { useMutation } from '@apollo/client';

import { CREATE_BUG_REPORT } from './query';

export function useCreateBugReport() {
  const [createBugReport, { loading, data, error }] = useMutation(CREATE_BUG_REPORT);

  return { loading, data, error, createBugReport };
}
