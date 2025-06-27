import { ReimbursementStatus } from 'src/__generated__/graphql';

export const parseType = (reimbursementStatus: ReimbursementStatus): string => {
  switch (reimbursementStatus) {
    case ReimbursementStatus.Approved:
      return 'Approved';
    case ReimbursementStatus.Pending:
      return 'Pending';
    case ReimbursementStatus.Declined:
      return 'Declined';
    default:
      return reimbursementStatus;
  }
};
