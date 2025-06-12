import type { OrderStatus, PaymentChain, PaymentToken } from 'src/__generated__/graphql';

export type OrderContextValue = {
  order?: {
    __typename?: 'Order';
    id: string;
    expiredAt: any;
    status: OrderStatus;
    paymentAddress?: string | null;
    requiredBalance?: number | null;
    paymentToken?: PaymentToken | null;
    paymentChain?: PaymentChain | null;
  } | null;
};
