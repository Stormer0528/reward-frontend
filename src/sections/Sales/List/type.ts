import type { Proof } from 'src/sections/Proof/type';
import type { Member } from 'src/sections/Profile/type';
import type { Package } from 'src/sections/Package/type';
import type { StatisticsSale } from 'src/sections/Statistics/type';

export type Sale = {
  __typename?: 'Sale';
  id: string;
  ID?: number | null;
  memberId: string;
  packageId: string;
  sponsorCnt: number;
  paymentMethod: string;
  proof?: Proof | null;
  member?: Member | null;
  package?: Package | null;
  statisticsSales?: Array<StatisticsSale> | null;
  status: boolean;
  orderedAt: any;
  createdAt?: any | null;
  updatedAt?: any | null;
  deletedAt?: any | null;
};

export type BasicSale = {
  __typename?: 'BasicSale';
  id: string;
  ID: number;
  email: string;
  point: number;
  token: number;
  amount: number;
  createdAt: any;
  orderedAt: any;
  status: boolean;
  memberId: string;
  username: string;
  fullName: string;
  isMetal: boolean;
  sponsorCnt: number;
  productName: string;
  paymentMethod: string;
  assetId?: string | null;
  toEmail?: string | null;
  toMemberId?: string | null;
  toUsername?: string | null;
  toFullName?: string | null;
};
