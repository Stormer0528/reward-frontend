import { useSuspenseQuery } from '@apollo/client';

import { FETCH_PACKAGES } from './query';

export function useFetchPackages({ filter, sort = '-amount' }: { filter: any; sort?: string }) {
  const { data } = useSuspenseQuery(FETCH_PACKAGES, {
    variables: { filter: { status: true, ...filter }, sort },
  });

  return {
    packages: data.packages.packages ?? [],
  };
}
