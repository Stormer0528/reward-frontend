import { useMutation, useLazyQuery } from '@apollo/client';

import {
  CANCEL_ORDER,
  CREATE_ORDER,
  SET_ORDER_PAYMENT,
  FETCH_ORDER_BY_ID,
  CHECK_ORDER_STATUS,
  CREATE_SIGNUP_ORDER,
} from './query';

export function useFetchOrderById() {
  const [fetchOrderById, { loading, data, error }] = useLazyQuery(FETCH_ORDER_BY_ID);

  return { loading, order: data?.orderById, error, fetchOrderById };
}

export function useCheckOrder() {
  const [checkOrder, { loading, data, error }] = useLazyQuery(CHECK_ORDER_STATUS);

  return { loading, order: data?.orderById, error, checkOrder };
}

export function useCreateOrder() {
  const [createOrder, { loading, data, error }] = useMutation(CREATE_ORDER);

  return { loading, data, error, createOrder };
}

export function useCreateSignUpOrder() {
  const [createSignUpOrder, { loading, data, error }] = useMutation(CREATE_SIGNUP_ORDER);

  return { loading, data, error, createSignUpOrder };
}

export function useCancelOrder() {
  const [cancelOrder, { loading, data, error }] = useMutation(CANCEL_ORDER);

  return { loading, data, error, cancelOrder };
}

export function useSetOrderPayment() {
  const [setOrderPayment, { loading, data, error }] = useMutation(SET_ORDER_PAYMENT);

  return { loading, data, error, setOrderPayment };
}
