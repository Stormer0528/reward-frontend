import type { Member } from 'src/sections/Profile/type';
import type { Statistics } from 'src/sections/Statistics/type';

export type Payout = {
  __typename?: 'Payout';
  createdAt?: any | null;
  deletedAt?: any | null;
  display: string;
  id: string;
  memberWallets?: Array<MemberWallet> | null;
  method: string;
  name: string;
  status: boolean;
  updatedAt?: any | null;
};

export type MemberWallet = {
  __typename?: 'MemberWallet';
  address: string;
  createdAt?: any | null;
  deletedAt?: any | null;
  id: string;
  member?: Member | null;
  memberId: string;
  memberStatisticsWallets?: Array<MemberStatisticsWallet> | null;
  note?: string | null;
  payout?: Payout | null;
  payoutId: string;
  percent: number;
  updatedAt?: any | null;
};

export type MemberStatisticsWallet = {
  __typename?: 'MemberStatisticsWallet';
  createdAt?: any | null;
  deletedAt?: any | null;
  id: string;
  issuedAt: any;
  memberStatistic?: MemberStatistics | null;
  memberStatisticId: string;
  memberWallet?: MemberWallet | null;
  memberWalletId: string;
  txc: BigInt;
  updatedAt?: any | null;
};

export type MemberStatistics = {
  __typename?: 'MemberStatistics';
  createdAt?: any | null;
  deletedAt?: any | null;
  hashPower: number;
  id: string;
  issuedAt: any;
  member?: Member | null;
  memberId: string;
  memberStatisticsWallets?: Array<MemberStatisticsWallet> | null;
  percent: number;
  statistics?: Statistics | null;
  statisticsId: string;
  txcShared: BigInt;
  updatedAt?: any | null;
};
