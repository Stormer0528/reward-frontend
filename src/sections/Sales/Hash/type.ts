import type { PaymentType } from 'src/__generated__/graphql';

export type PAYMENT_METHOD_TYPE = {
  value: PaymentType;
  label: string;
  icon: string;
  backgroundColor: string;
  disable: boolean;
};
