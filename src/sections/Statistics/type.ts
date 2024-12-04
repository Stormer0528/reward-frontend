import type { Sale } from '../Sales/List/type';
import type { MemberStatistics } from '../MemberStatistics/List/type';

export type StatisticsSale = {
  __typename?: 'StatisticsSale';
  createdAt?: any | null;
  deletedAt?: any | null;
  id: string;
  issuedAt: any;
  sale?: Sale;
  saleId: string;
  statistics?: Statistics | null;
  statisticsId: string;
  updatedAt?: any | null;
};

export type Statistics = {
  __typename?: 'Statistics';
  createdAt?: any | null;
  deletedAt?: any | null;
  from: any;
  id: string;
  issuedAt: any;
  memberStatistics?: Array<MemberStatistics> | null;
  newBlocks: number;
  statisticsSales?: Array<StatisticsSale> | null;
  status: boolean;
  to: any;
  totalBlocks: number;
  totalHashPower: number;
  totalMembers: number;
  transactionId?: string | null;
  txcShared: BigInt;
  updatedAt?: any | null;
};
