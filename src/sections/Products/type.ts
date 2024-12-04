import type { Sale } from 'src/sections/Sales/List/type';
import type { PaymentMethodLink } from 'src/sections/Payment/type';

export type Package = {
  __typename?: 'Package';
  id: string;
  point: number;
  token: number;
  amount: number;
  productName: string;
  status: boolean;
  enrollVisibility: boolean;
  date: any;
  sales?: Array<Sale> | null;
  paymentMethodLinks?: Array<PaymentMethodLink> | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  deletedAt?: any | null;
};
