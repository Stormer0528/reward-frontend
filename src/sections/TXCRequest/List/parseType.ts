import { TxcRequestStatus } from 'src/__generated__/graphql';

export const parseType = (txcRequestStatus: TxcRequestStatus): string => {
  switch (txcRequestStatus) {
    case TxcRequestStatus.Sent:
      return 'Sent';
    case TxcRequestStatus.Pending:
      return 'Pending';
    case TxcRequestStatus.Declined:
      return 'Declined';
    default:
      return txcRequestStatus;
  }
};
