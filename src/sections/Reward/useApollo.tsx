import { useRef, useMemo } from 'react';
import { useLazyQuery } from '@apollo/client';

import { FETCH_MEMBERSTATISTICS_QUERY } from './query';

export function useFetchMemberStatistics() {
  const [fetchMemberStatistics, { loading, data }] = useLazyQuery(FETCH_MEMBERSTATISTICS_QUERY);

  const rowCountRef = useRef(data?.memberStatistics.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.memberStatistics.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    memberStatistics: data?.memberStatistics.memberStatistics ?? [],
    fetchMemberStatistics,
  };
}
