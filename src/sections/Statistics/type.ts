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
  to: any;
  from: any;
  id: string;
  issuedAt: any;
  status: boolean;
  txcShared: bigint;
  newBlocks: number;
  totalBlocks: number;
  totalMembers: number;
  totalHashPower: number;
  createdAt?: any | null;
  deletedAt?: any | null;
  updatedAt?: any | null;
  transactionId?: string | null;
  statisticsSales?: Array<StatisticsSale> | null;
  memberStatistics?: Array<MemberStatistics> | null;
};
