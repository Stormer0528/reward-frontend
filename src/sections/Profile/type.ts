import type { Sale } from 'src/sections/Sales/List/type';
import type { WeeklyCommission } from 'src/sections/Commission/type';
import type { Payout, MemberStatisticsWallet } from 'src/sections/MemberStatistics/List/type';
import type {
  CommissionStatus,
  MemberStatistics,
  PlacementPosition,
} from 'src/__generated__/graphql';

export type MemberLog = {
  __typename?: 'MemberLog';
  action: string;
  after?: any | null;
  before?: any | null;
  entity: string;
  id: string;
  role: string;
  status: string;
  when: any;
  who: string;
};

export type Admin = {
  __typename?: 'Admin';
  adminNotes?: Array<AdminNotes> | null;
  avatar: string;
  createdAt?: any | null;
  deletedAt?: any | null;
  email: string;
  id: string;
  updatedAt?: any | null;
  username: string;
};

export type AdminNotes = {
  __typename?: 'AdminNotes';
  admin?: Admin | null;
  adminId: string;
  createdAt?: any | null;
  deletedAt?: any | null;
  description?: string | null;
  id: string;
  member?: Member | null;
  memberId: string;
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

export type Member = {
  __typename?: 'Member';
  ID: number;
  adminNotes?: Array<AdminNotes> | null;
  assetId?: string | null;
  city?: string | null;
  cmnCalculatedWeeks: number;
  commission?: CommissionStatus | null;
  createdAt?: any | null;
  deletedAt?: any | null;
  email: string;
  emailVerified: boolean;
  fullName: string;
  id: string;
  introduceMembers?: Array<Member> | null;
  logs?: Array<MemberLog> | null;
  memberWallets?: Array<MemberWallet> | null;
  mobile: string;
  placementChildren?: Array<Member> | null;
  placementParent?: Member | null;
  placementParentId?: string | null;
  placementPosition?: PlacementPosition | null;
  point: number;
  preferredContact?: string | null;
  preferredContactDetail?: string | null;
  primaryAddress: string;
  sales?: Array<Sale> | null;
  secondaryAddress?: string | null;
  sponsor?: Member | null;
  sponsorId?: string | null;
  state?: string | null;
  statistics?: Array<MemberStatistics> | null;
  status: boolean;
  syncWithSendy: boolean;
  totalIntroducers: number;
  updatedAt?: any | null;
  username: string;
  weeklyCommissions?: WeeklyCommission | null;
  zipCode?: string | null;
};
