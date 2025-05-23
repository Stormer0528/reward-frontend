import type { ConfirmationStatus, CommissionDefaultEnum } from 'src/__generated__/graphql';

export type WeeklyCommission = {
  __typename?: 'BasicWeeklyCommission';
  ID: number;
  id: string;
  begL: number;
  begR: number;
  endL: number;
  endR: number;
  maxL: number;
  maxR: number;
  newL: number;
  newR: number;
  pkgL: number;
  pkgR: number;
  memberId: string;
  username: string;
  fullName: string;
  commission: number;
  weekStartDate: any;
  note?: string | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  deletedAt?: any | null;
  shortNote?: string | null;
  status: ConfirmationStatus;
  paymentMethod: CommissionDefaultEnum;
};
