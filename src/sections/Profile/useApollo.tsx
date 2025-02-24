import { useRef, useMemo } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import {
  DISABLE_2FA,
  GENERATE_2FA,
  UPDATE_MEMBER,
  FETCH_ME_QUERY,
  VERIFY_2FA_TOKEN,
  VERIFY_2FA_ENABLE,
  FETCH_MEMBERS_QUERY,
  FETCH_PAYOUTS_QUERY,
  UPDATE_MEMBER_PASSWORD,
  FETCH_MEMBER_STATS_QUERY,
  FETCH_PLACEMENT_MEMBERS_QUERY,
  FETCH_PLACEMENT_MEMBERS_O_QUERY,
} from './query';

export function useFetchMe() {
  const [fetchMe, { loading, data, called }] = useLazyQuery(FETCH_ME_QUERY);

  return { loading, me: data?.memberMe, called, fetchMe };
}

export function useFetchMembers() {
  const [fetchMembers, { loading, data, called }] = useLazyQuery(FETCH_MEMBERS_QUERY);

  const rowCountRef = useRef(data?.members.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.members.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    members: data?.members.members ?? [],
    fetchMembers,
  };
}

export function useFetchPlacementMembers() {
  const [fetchMembers, { loading, data, called }] = useLazyQuery(FETCH_PLACEMENT_MEMBERS_QUERY);

  const rowCountRef = useRef(data?.members.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.members.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    members: data?.members.members ?? [],
    fetchMembers,
  };
}

export function useFetchPlacementOMembers() {
  const [fetchPlacementMembers, { loading, data, called }] = useLazyQuery(
    FETCH_PLACEMENT_MEMBERS_O_QUERY
  );

  return {
    called,
    loading,
    members: data?.placementMembers ?? [],
    fetchPlacementMembers,
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

export function useUpdatePassword() {
  const [updatePassword] = useMutation(UPDATE_MEMBER_PASSWORD, {
    awaitRefetchQueries: true,
    refetchQueries: ['FetchMembers'],
  });

  return { updatePassword };
}

export function useGenerate2FA() {
  const [generate2FA, { loading, data, error }] = useLazyQuery(GENERATE_2FA);

  return { loading, qrString: data?.generate2FA, error, generate2FA };
}

export function useVerify2FAAndEnable() {
  const [verify2FAAndEnable, { loading, data, error }] = useMutation(VERIFY_2FA_ENABLE, {
    awaitRefetchQueries: true,
    refetchQueries: ['fetchMe'],
  });

  return { loading, accessToken: data?.verify2FAAndEnable.accessToken, error, verify2FAAndEnable };
}

export function useVerify2FAAndToken() {
  const [verify2FAAndToken, { loading, data, error }] = useMutation(VERIFY_2FA_TOKEN);

  return { loading, data, error, verify2FAAndToken };
}

export function useDisable2FA() {
  const [disable2FA, { loading, data, error }] = useMutation(DISABLE_2FA, {
    awaitRefetchQueries: true,
    refetchQueries: ['fetchMe'],
  });

  return { loading, data, error, disable2FA };
}
