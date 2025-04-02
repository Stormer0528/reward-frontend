import type { ConfirmationStatus } from 'src/__generated__/graphql';

import type { Proof } from '../Proof/type';

export type WeeklyCommission = {
  __typename?: 'WeeklyCommission';
  ID: number;
  begL: number;
  begR: number;
  endL: number;
  endR: number;
  id: string;
  maxL: number;
  maxR: number;
  newL: number;
  newR: number;
  pkgL: number;
  pkgR: number;
  commission: number;
  proof?: Proof | null;
  shortNote?: string | null;
  weekStartDate: any | null;
  status: ConfirmationStatus;
  member?: {
    __typename?: 'Member';
    username: string;
    assetId?: string | null;
  } | null;
};
