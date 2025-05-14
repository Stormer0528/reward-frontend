import type { InvoiceStatusEnum } from 'src/__generated__/graphql';

export type INVOICE_KEY_VALUE_TYPE = InvoiceStatusEnum;

export const INVOICE_VALUE: Record<INVOICE_KEY_VALUE_TYPE, string> = {
  PAID: 'PAID',
  PENDING: 'PENDING',
};
