import { InvoiceStatusEnum } from 'src/__generated__/graphql';

export const parseType = (invoiceType: InvoiceStatusEnum): string => {
  switch (invoiceType) {
    case InvoiceStatusEnum.Paid:
      return 'Paid';
    case InvoiceStatusEnum.Pending:
      return 'Pending';
    default:
      return invoiceType;
  }
};
