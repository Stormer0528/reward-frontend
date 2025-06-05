import { useRef, useMemo } from 'react';
import { useQuery, useMutation, useLazyQuery, useSuspenseQuery } from '@apollo/client';

import {
  DISABLE_2FA,
  GENERATE_2FA,
  MEMBER_LOGOUT,
  UPDATE_MEMBER,
  FETCH_ME_QUERY,
  VERIFY_2FA_ENABLE,
  VERIFY_EMAIL_CODE,
  FETCH_PAYOUTS_QUERY,
  FETCH_MEMBER_HISTORY,
  UPDATE_SETTING_MEMBER,
  MEMBER_EXCHANGE_LOGIN,
  UPDATE_MEMBER_PASSWORD,
  FETCH_MEMBER_STATISTICS,
  FETCH_PLACEMENT_MEMBERS,
  GENERATE_REFERENCE_LINK,
  FETCH_MEMBER_STATS_QUERY,
  FETCH_MEMBER_SEARCH_QUERY,
  FETCH_PLACEMENT_MEMBERS_O_QUERY,
} from './query';

export function useFetchMe() {
  const [fetchMe, { loading, data, called }] = useLazyQuery(FETCH_ME_QUERY);

  return { loading, me: data?.memberMe, called, fetchMe };
}

export function useFetchMemberSearch() {
  const [fetchMemberSearch, { loading, data, error }] = useLazyQuery(FETCH_MEMBER_SEARCH_QUERY);

  return { loading, members: data?.searchMembers.members ?? [], error, fetchMemberSearch };
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

export function useFetchMemberStatistics(variables: {
  filter?: any;
  page?: string;
  sort?: string;
}) {
  const { loading, data } = useQuery(FETCH_MEMBER_STATISTICS, {
    variables: { filter: variables?.filter, page: variables?.page, sort: variables?.sort },
  });

  return { loading, memberStatistics: data?.memberStatistics?.memberStatistics ?? [] };
}

export function useFetchPlacementMembers() {
  const { loading, data, called, refetch } = useQuery(FETCH_PLACEMENT_MEMBERS);

  return {
    called,
    loading,
    members: data?.sponsorMembers ?? [],
    refetch,
  };
}

export function useFetchMembersStats() {
  const [fetchMemberStats, { data }] = useLazyQuery(FETCH_MEMBER_STATS_QUERY);

  return { data, fetchMemberStats };
}

export function useFetchMemberOverview(id: string) {
  const { loading, data, error } = useQuery(FETCH_MEMBER_HISTORY, {
    variables: { data: { id } },
  });

  return { loading, overview: data?.memberOverview, error };
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
  const [updatePassword, { loading, data, error }] = useMutation(UPDATE_MEMBER_PASSWORD, {
    awaitRefetchQueries: true,
    refetchQueries: ['FetchMembers'],
  });

  return { loading, data, error, updatePassword };
}

export function useGenerate2FA() {
  const [generate2FA, { loading, data, error }] = useLazyQuery(GENERATE_2FA);

  return { loading, qrString: data?.generate2FA, error, generate2FA };
}

export function useVerify2FAAndEnable() {
  const [verify2FAAndEnable, { loading, data, error }] = useMutation(VERIFY_2FA_ENABLE);

  return { loading, accessToken: data?.verify2FAAndEnable.accessToken, error, verify2FAAndEnable };
}

export function useDisable2FA() {
  const [disable2FA, { loading, data, error }] = useMutation(DISABLE_2FA);

  return { loading, data, error, disable2FA };
}

export function useUpdateSettingMember() {
  const [updateSettingMember, { loading, data, error }] = useMutation(UPDATE_SETTING_MEMBER, {
    awaitRefetchQueries: true,
    refetchQueries: ['fetchMe'],
  });

  return { loading, data, error, updateSettingMember };
}

export function useMemberLogout() {
  const [memberLogout, { loading, data, error }] = useMutation(MEMBER_LOGOUT);

  return { loading, data, error, memberLogout };
}

export function useMemberExchangeLogin() {
  const [memberExChangeLogin, { loading, data, error }] = useMutation(MEMBER_EXCHANGE_LOGIN);

  return { loading, data, error, memberExChangeLogin };
}

export function useEmailVerifyCode() {
  const [emailVerifyCode, { loading, data, error }] = useMutation(VERIFY_EMAIL_CODE);

  return { loading, data, error, emailVerifyCode };
}

export function useFetchReferralLink() {
  const { data } = useSuspenseQuery(GENERATE_REFERENCE_LINK);
  return { link: data.generateReferenceLink.link };
}
