import { useMutation } from '@apollo/client';

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
      message
      result
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
