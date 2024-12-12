import type { Proof } from 'src/sections/Proof/type';
import type { Member } from 'src/sections/Profile/type';
import type { Package } from 'src/sections/Products/type';
import type { StatisticsSale } from 'src/sections/Statistics/type';

export type Sale = {
  __typename?: 'Sale';
  id: string;
  ID?: number | null;
  memberId: string;
  packageId: string;
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
