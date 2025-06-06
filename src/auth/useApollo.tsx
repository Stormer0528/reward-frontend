import { useLazyQuery } from '@apollo/client';

import { FETCH_ME } from './query';

export function useFetchMe() {
  const [fetchMe, { data, loading, error }] = useLazyQuery(FETCH_ME);

  return { fetchMe, user: data?.memberMe, loading, error };
}
