import type { TxcRequestStatus } from 'src/__generated__/graphql';

export type BasicTXCRequest = {
  __typename?: 'BasicTXCRequest';
  id: string;
  ID: number;
  amount: number;
  memberId: string;
  walletAddress: string;
  status: TxcRequestStatus;
  username?: string | null;
  fullName?: string | null;
  createdAt: any;
};
