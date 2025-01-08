import type { ConfirmationStatus } from 'src/__generated__/graphql';

import type { Proof } from '../Proof/type';
import type { Member } from '../Profile/type';

export type WeeklyCommission = {
  __typename?: 'WeeklyCommission';
  ID: number;
  begL: number;
  begR: number;
  commission: number;
  createdAt?: any | null;
  deletedAt?: any | null;
  endL: number;
  endR: number;
  id: string;
  maxL: number;
  maxR: number;
  member?: Member | null;
  memberId: string;
  newL: number;
  newR: number;
  pkgL: number;
  pkgR: number;
  proof?: Proof | null;
  status: ConfirmationStatus;
  shortNote?: string | null;
  updatedAt?: any | null;
  weekStartDate: any | null;
};
