import { useMutation, useLazyQuery } from '@apollo/client';

import {
  CANCEL_ORDER,
  CREATE_ORDER,
  COMPLETE_ORDER,
  CREATE_SIGNUP_ORDER,
  CHECK_ADDRESS_WAIT_STATUS,
} from './query';

export function useCheckAddressWaitStatus() {
  const [checkAddressWaitStatus, { loading, data, error }] =
    useLazyQuery(CHECK_ADDRESS_WAIT_STATUS);

  return { loading, status: data?.checkAddressWaitStatus.status, error, checkAddressWaitStatus };
}

export function useCreateOrder() {
  const [createOrder, { loading, data, error }] = useMutation(CREATE_ORDER);

  return { loading, data, error, createOrder };
}

export function useCreateSignUpOrder() {
  const [createSignUpOrder, { loading, data, error }] = useMutation(CREATE_SIGNUP_ORDER);

  return { loading, data, error, createSignUpOrder };
}

export function useCompleteOrder() {
  const [completeOrder, { loading, data, error }] = useMutation(COMPLETE_ORDER);

  return { loading, data, error, completeOrder };
}

export function useCancelOrder() {
  const [cancelOrder, { loading, data, error }] = useMutation(CANCEL_ORDER);

  return { loading, data, error, cancelOrder };
}
