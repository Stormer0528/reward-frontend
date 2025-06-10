import type { PaymentChain, PaymentToken } from 'src/__generated__/graphql';

export type BasicPaymentToken = PaymentToken | 'PEER';

export type PAYMENT_METHOD_TYPE = {
  value: BasicPaymentToken;
  chain: PaymentChain;
  label: string;
  icon?: string;
  backgroundColor: string;
  disable: boolean;
};

export type PAYMENT_TYPE = {
  paymentChain: PaymentChain;
  paymentToken: PaymentToken;
};
