import { useRef, useMemo } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import { gql } from 'src/__generated__';

const SIGN_UP_MEMBER = gql(/* GraphQL */ `
  mutation SignUpMember($data: SignupFormInput!) {
    signUpMember(data: $data) {
      email
      username
      id
    }
  }
`);

const SEND_EMAIL_VERIFICATION = gql(/* GraphQL */ `
  mutation SendEmailVerification($data: EmailInput!) {
    sendEmailVerification(data: $data) {
      token
    }
  }
`);

const VERIFY_EMAIL = gql(/* GraphQL */ `
  mutation EmailVerify($data: EmailVerificationInput!) {
    emailVerify(data: $data) {
      result
      message
      packageId
      paymentMethod
    }
  }
`);

const FETCH_PROMOS_QUERY = gql(/* GraphQL */ `
  query Promos($sort: String, $page: String, $filter: JSONObject) {
    promos(sort: $sort, page: $page, filter: $filter) {
      promos {
        createdAt
        updatedAt
        deletedAt
        id
        code
        description
        status
        startDate
        endDate
      }
      total
    }
  }
`);

export function useSignUp() {
  const [submitSignUp, { loading, data }] = useMutation(SIGN_UP_MEMBER);

  return { loading, result: data, submitSignUp };
}

export function useSendEmailVerification() {
  const [sendVerification, { loading, data }] = useMutation(SEND_EMAIL_VERIFICATION);

  return { loading, result: data, sendVerification };
}

export function useVerifyEmail() {
  const [verifyEmail, { loading, data }] = useMutation(VERIFY_EMAIL);

  return { loading, result: data, verifyEmail };
}
export function useFetchPromos() {
  const [fetchPromos, { loading, data, called }] = useLazyQuery(FETCH_PROMOS_QUERY);

  const rowCountRef = useRef(data?.promos.total ?? 0);

  const rowCount = useMemo(() => {
    const newTotal = data?.promos.total ?? undefined;

    if (newTotal !== undefined) {
      rowCountRef.current = newTotal;
    }

    return rowCountRef.current;
  }, [data]);

  return {
    called,
    loading,
    rowCount,
    promos: data?.promos.promos ?? [],
    fetchPromos,
  };
}
