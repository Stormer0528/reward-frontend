import { useRef, useMemo } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import {
  UPDATE_MEMBER,
  FETCH_ME_QUERY,
  FETCH_MEMBERS_QUERY,
  FETCH_PAYOUTS_QUERY,
  FETCH_MEMBER_STATS_QUERY,
} from './query';

export function useFetchMe() {
  const [fetchMe, { loading, data, called }] = useLazyQuery(FETCH_ME_QUERY);

  return { loading, me: data?.memberMe, called, fetchMe };
}

export function useFetchMembers() {
  const [fetchMembers, { loading, data }] = useLazyQuery(FETCH_MEMBERS_QUERY);

  const rowCountRef = useRef(data?.members.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.members.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    members: data?.members.members ?? [],
    fetchMembers,
  };
}

export function useFetchMembersStats() {
  const [fetchMemberStats, { data }] = useLazyQuery(FETCH_MEMBER_STATS_QUERY);

  return { data, fetchMemberStats };
}

export function useUpdateMember() {
  const [updateMember, { loading }] = useMutation(UPDATE_MEMBER, {
    awaitRefetchQueries: true,
    refetchQueries: ['FetchMembers'],
  });

  return { loading, updateMember };
}

export function useFetchPayouts() {
  const [fetchPayouts, { loading, data }] = useLazyQuery(FETCH_PAYOUTS_QUERY);

  const rowCountRef = useRef(data?.payouts.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.payouts.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    loading,
    rowCount,
    payouts: data?.payouts.payouts ?? [],
    fetchPayouts,
  };
}
