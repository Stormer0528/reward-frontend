import type { PaymentChain, PaymentToken } from 'src/__generated__/graphql';

export type PAYMENT_METHOD_TYPE = {
  value: PaymentToken;
  chain: PaymentChain;
  label: string;
  icon: string;
  backgroundColor: string;
  disable: boolean;
};

export type PAYMENT_TYPE = {
  paymentChain: PaymentChain;
  paymentToken: PaymentToken;
};
