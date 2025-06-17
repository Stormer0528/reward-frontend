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

export type TOKEN_TYPE = {
  label: string;
  icon?: string;
  disable: boolean;
  backgroundColor: string;
  token: BasicPaymentToken;
};

export type CHAIN_TYPE = Record<
  string,
  {
    label: string;
    icon?: string;
    disable: boolean;
    chain: PaymentChain;
    backgroundColor: string;
  }[]
>;

export type PAYMENT_TYPE = {
  paymentChain: PaymentChain;
  paymentToken: PaymentToken;
};
