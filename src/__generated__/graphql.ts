/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** BigInt custom scalar type */
  BigInt: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  avatar: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  accessToken: Scalars['String']['output'];
};

export type AdminsResponse = {
  __typename?: 'AdminsResponse';
  admins?: Maybe<Array<Maybe<Admin>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Block = {
  __typename?: 'Block';
  blockNo: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  difficulty: Scalars['Float']['output'];
  hashRate: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type BlocksResponse = {
  __typename?: 'BlocksResponse';
  blocks?: Maybe<Array<Maybe<Block>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ConfirmStatistics = {
  id: Scalars['ID']['input'];
  transactionId: Scalars['ID']['input'];
};

export type CreateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateBlockInput = {
  blockNo: Scalars['Float']['input'];
  difficulty: Scalars['Float']['input'];
  hashRate: Scalars['Float']['input'];
  issuedAt: Scalars['DateTimeISO']['input'];
};

export type CreateManyMemberStatisticsInput = {
  memberStatistics: Array<CreateMemberStatisticsInput>;
};

export type CreateManyStatisticsSaleInput = {
  statisticsSales: Array<CreateStatisticsSaleInput>;
};

export type CreateMemberInput = {
  assetId: Scalars['String']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  placementParentId?: InputMaybe<Scalars['ID']['input']>;
  primaryAddress: Scalars['String']['input'];
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  wallets: Array<MemberWalletDataInput>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMemberStatisticsInput = {
  hashPower: Scalars['Float']['input'];
  issuedAt: Scalars['DateTimeISO']['input'];
  memberId: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
  statisticsId: Scalars['String']['input'];
  txcShared: Scalars['Float']['input'];
};

export type CreatePackageInput = {
  amount: Scalars['Float']['input'];
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  productName: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  token: Scalars['Float']['input'];
};

export type CreatePayoutInput = {
  display: Scalars['String']['input'];
  method: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};

export type CreateSaleInput = {
  invoiceNo: Scalars['Float']['input'];
  memberId: Scalars['ID']['input'];
  orderedAt: Scalars['DateTimeISO']['input'];
  packageId: Scalars['ID']['input'];
  paymentMethod: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};

export type CreateStatisticsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  issuedAt: Scalars['DateTimeISO']['input'];
  memberStatistics: Array<CreateStatisticsMemberStatisticsInput>;
  saleIds: Array<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  totalHashPower: Scalars['Float']['input'];
  totalMembers: Scalars['Float']['input'];
  txcShared: Scalars['Float']['input'];
};

export type CreateStatisticsMemberStatisticsInput = {
  hashPower: Scalars['Float']['input'];
  memberId: Scalars['ID']['input'];
  percent: Scalars['Float']['input'];
  txcShared: Scalars['Float']['input'];
};

export type CreateStatisticsSaleInput = {
  issuedAt: Scalars['DateTimeISO']['input'];
  saleId: Scalars['ID']['input'];
  statisticsId: Scalars['ID']['input'];
};

export type DailyReward = {
  __typename?: 'DailyReward';
  day: Scalars['DateTimeISO']['output'];
  rewardsByWallet: Array<RewardByWallet>;
  totalTxc: Scalars['BigInt']['output'];
};

export type DailyRewards = {
  __typename?: 'DailyRewards';
  rewards: Array<DailyReward>;
};

export type DailyStats = {
  __typename?: 'DailyStats';
  count: Scalars['Int']['output'];
  field: Scalars['String']['output'];
};

export type EmailInput = {
  email: Scalars['String']['input'];
};

export type EntityStats = {
  __typename?: 'EntityStats';
  dailyData: Array<DailyStats>;
  meta?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type IdInput = {
  id: Scalars['ID']['input'];
};

export type IDsInput = {
  ids: Array<Scalars['ID']['input']>;
};

export type LiveStatsArgs = {
  pastDays: Scalars['Float']['input'];
};

export type ManySuccessResponse = {
  __typename?: 'ManySuccessResponse';
  count: Scalars['Float']['output'];
};

export type Member = {
  __typename?: 'Member';
  assetId: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  introduceMembers?: Maybe<Array<Maybe<Member>>>;
  memberWallets?: Maybe<Array<Maybe<MemberWallet>>>;
  mobile: Scalars['String']['output'];
  placementChildren?: Maybe<Array<Maybe<Member>>>;
  placementParent?: Maybe<Member>;
  placementParentId?: Maybe<Scalars['ID']['output']>;
  primaryAddress: Scalars['String']['output'];
  sales?: Maybe<Array<Maybe<Sale>>>;
  secondaryAddress?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<Member>;
  sponsorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<Array<Maybe<MemberStatistics>>>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MemberLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MemberLoginResponse = {
  __typename?: 'MemberLoginResponse';
  accessToken: Scalars['String']['output'];
};

export type MemberOverview = {
  __typename?: 'MemberOverview';
  joinDate: Scalars['DateTimeISO']['output'];
  lastHashPower: Scalars['Float']['output'];
  totalTXCShared: Scalars['BigInt']['output'];
};

export type MemberOverviewInput = {
  id: Scalars['ID']['input'];
};

export type MemberStatistics = {
  __typename?: 'MemberStatistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  hashPower: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  memberStatisticsWallets?: Maybe<Array<Maybe<MemberStatisticsWallet>>>;
  percent: Scalars['Float']['output'];
  statistics?: Maybe<Statistics>;
  statisticsId: Scalars['String']['output'];
  txcShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberStatisticsResponse = {
  __typename?: 'MemberStatisticsResponse';
  memberStatistics?: Maybe<Array<Maybe<MemberStatistics>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberStatisticsWallet = {
  __typename?: 'MemberStatisticsWallet';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  memberStatistic?: Maybe<MemberStatistics>;
  memberStatisticId: Scalars['String']['output'];
  memberWallet?: Maybe<MemberWallet>;
  memberWalletId: Scalars['String']['output'];
  txc: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberStatisticsWalletResponse = {
  __typename?: 'MemberStatisticsWalletResponse';
  memberStatisticsWallets?: Maybe<Array<Maybe<MemberStatisticsWallet>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberWallet = {
  __typename?: 'MemberWallet';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  memberStatisticsWallets?: Maybe<Array<Maybe<MemberStatisticsWallet>>>;
  payout?: Maybe<Payout>;
  payoutId: Scalars['ID']['output'];
  percent: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberWalletDataInput = {
  address: Scalars['String']['input'];
  payoutId: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
};

export type MemberWalletResponse = {
  __typename?: 'MemberWalletResponse';
  MemberWallets?: Maybe<Array<Maybe<MemberWallet>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MembersResponse = {
  __typename?: 'MembersResponse';
  members?: Maybe<Array<Maybe<Member>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin: AdminLoginResponse;
  confirmStatistics: Statistics;
  createAdmin: Admin;
  createBlock: Block;
  createManyMemberStatistics: ManySuccessResponse;
  createManyStatisticsSales: ManySuccessResponse;
  createMember: Member;
  createMemberStatistics: MemberStatistics;
  createPackage: Package;
  createPayout: Payout;
  createSale: Sale;
  createStatistics: Statistics;
  createStatisticsSale: StatisticsSale;
  memberLogin: MemberLoginResponse;
  removeAdmins: ManySuccessResponse;
  removeManyMemberStatistics: ManySuccessResponse;
  removeManyStatistics: ManySuccessResponse;
  removeManyStatisticsSales: ManySuccessResponse;
  removeMember: SuccessResponse;
  removeMemberStatisticsByStaitisId: ManySuccessResponse;
  removePackage: SuccessResponse;
  removeSale: SuccessResponse;
  removeStatisticsSalesByStaitisId: ManySuccessResponse;
  resetPasswordByToken: SuccessResponse;
  resetPasswordRequest: SuccessResponse;
  resetTokenVerify: VerifyTokenResponse;
  updateAdmin: Admin;
  updateMember: Member;
  updateMemberWallet: SuccessResponse;
  updatePackage: Package;
  updatePasswordAdmin: SuccessResponse;
  updatePasswordAdminById: Admin;
  updatePasswordMember: SuccessResponse;
  updatePasswordMemberById: Member;
  updateSale: Sale;
  updateStatistics: Statistics;
};


export type MutationAdminLoginArgs = {
  data: AdminLoginInput;
};


export type MutationConfirmStatisticsArgs = {
  data: ConfirmStatistics;
};


export type MutationCreateAdminArgs = {
  data: CreateAdminInput;
};


export type MutationCreateBlockArgs = {
  data: CreateBlockInput;
};


export type MutationCreateManyMemberStatisticsArgs = {
  data: CreateManyMemberStatisticsInput;
};


export type MutationCreateManyStatisticsSalesArgs = {
  data: CreateManyStatisticsSaleInput;
};


export type MutationCreateMemberArgs = {
  data: CreateMemberInput;
};


export type MutationCreateMemberStatisticsArgs = {
  data: CreateMemberStatisticsInput;
};


export type MutationCreatePackageArgs = {
  data: CreatePackageInput;
};


export type MutationCreatePayoutArgs = {
  data: CreatePayoutInput;
};


export type MutationCreateSaleArgs = {
  data: CreateSaleInput;
};


export type MutationCreateStatisticsArgs = {
  data: CreateStatisticsInput;
};


export type MutationCreateStatisticsSaleArgs = {
  data: CreateStatisticsSaleInput;
};


export type MutationMemberLoginArgs = {
  data: MemberLoginInput;
};


export type MutationRemoveAdminsArgs = {
  data: IDsInput;
};


export type MutationRemoveManyMemberStatisticsArgs = {
  data: IDsInput;
};


export type MutationRemoveManyStatisticsArgs = {
  data: IDsInput;
};


export type MutationRemoveManyStatisticsSalesArgs = {
  data: IDsInput;
};


export type MutationRemoveMemberArgs = {
  data: IdInput;
};


export type MutationRemoveMemberStatisticsByStaitisIdArgs = {
  data: IdInput;
};


export type MutationRemovePackageArgs = {
  data: IdInput;
};


export type MutationRemoveSaleArgs = {
  data: IdInput;
};


export type MutationRemoveStatisticsSalesByStaitisIdArgs = {
  data: IdInput;
};


export type MutationResetPasswordByTokenArgs = {
  data: ResetPasswordTokenInput;
};


export type MutationResetPasswordRequestArgs = {
  data: EmailInput;
};


export type MutationResetTokenVerifyArgs = {
  data: TokenInput;
};


export type MutationUpdateAdminArgs = {
  data: UpdateAdminInput;
};


export type MutationUpdateMemberArgs = {
  data: UpdateMemberInput;
};


export type MutationUpdateMemberWalletArgs = {
  data: UpdateMemberWalletInput;
};


export type MutationUpdatePackageArgs = {
  data: UpdatePackageInput;
};


export type MutationUpdatePasswordAdminArgs = {
  data: UpdateAdminPasswordInput;
};


export type MutationUpdatePasswordAdminByIdArgs = {
  data: UpdateAdminPasswordByIdInput;
};


export type MutationUpdatePasswordMemberArgs = {
  data: UpdateMemberPasswordInput;
};


export type MutationUpdatePasswordMemberByIdArgs = {
  data: UpdateMemberPasswordInputById;
};


export type MutationUpdateSaleArgs = {
  data: UpdateSaleInput;
};


export type MutationUpdateStatisticsArgs = {
  data: UpdateStatisticsInput;
};

export type Package = {
  __typename?: 'Package';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  date: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  sales?: Maybe<Array<Maybe<Sale>>>;
  status: Scalars['Boolean']['output'];
  token: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PackageResponse = {
  __typename?: 'PackageResponse';
  packages?: Maybe<Array<Maybe<Package>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Payout = {
  __typename?: 'Payout';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  memberWallets?: Maybe<Array<Maybe<MemberWallet>>>;
  method: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PayoutResponse = {
  __typename?: 'PayoutResponse';
  payouts?: Maybe<Array<Maybe<Payout>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminMe: Admin;
  admins: AdminsResponse;
  blocks: BlocksResponse;
  dailyRewards: DailyRewards;
  liveBlockStats: EntityStats;
  liveMiningStats: EntityStats;
  liveUserStats: EntityStats;
  memberMe: Member;
  memberOverview: MemberOverview;
  memberStatistics: MemberStatisticsResponse;
  memberStatisticsWallets: MemberStatisticsWalletResponse;
  memberWallets: MemberWalletResponse;
  members: MembersResponse;
  packages: PackageResponse;
  payouts: PayoutResponse;
  rewardsByWallets: RewardsByWallets;
  sales: SalesResponse;
  statistics: StatisticsResponse;
  statisticsSales: StatisticsSaleResponse;
};


export type QueryAdminsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlocksArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDailyRewardsArgs = {
  from: Scalars['DateTimeISO']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['DateTimeISO']['input'];
};


export type QueryLiveBlockStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryLiveUserStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryMemberOverviewArgs = {
  data: MemberOverviewInput;
};


export type QueryMemberStatisticsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberStatisticsWalletsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberWalletsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPackagesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPayoutsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRewardsByWalletsArgs = {
  from: Scalars['DateTimeISO']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['DateTimeISO']['input'];
};


export type QuerySalesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStatisticsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStatisticsSalesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordTokenInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RewardByWallet = {
  __typename?: 'RewardByWallet';
  txc: Scalars['BigInt']['output'];
  wallet: MemberWallet;
};

export type RewardsByWallets = {
  __typename?: 'RewardsByWallets';
  rewards: Array<RewardByWallet>;
};

export type Sale = {
  __typename?: 'Sale';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  invoiceNo: Scalars['Float']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['ID']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  package?: Maybe<Package>;
  packageId: Scalars['ID']['output'];
  paymentMethod: Scalars['String']['output'];
  statisticsSales?: Maybe<Array<Maybe<StatisticsSale>>>;
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type SalesResponse = {
  __typename?: 'SalesResponse';
  sales?: Maybe<Array<Maybe<Sale>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Statistics = {
  __typename?: 'Statistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  from: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  memberStatistics?: Maybe<Array<Maybe<MemberStatistics>>>;
  newBlocks: Scalars['Float']['output'];
  statisticsSales?: Maybe<Array<Maybe<StatisticsSale>>>;
  status: Scalars['Boolean']['output'];
  to: Scalars['DateTimeISO']['output'];
  totalBlocks: Scalars['Float']['output'];
  totalHashPower: Scalars['Float']['output'];
  totalMembers: Scalars['Float']['output'];
  transactionId?: Maybe<Scalars['ID']['output']>;
  txcShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type StatisticsResponse = {
  __typename?: 'StatisticsResponse';
  statistics?: Maybe<Array<Maybe<Statistics>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type StatisticsSale = {
  __typename?: 'StatisticsSale';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  sale?: Maybe<Sale>;
  saleId: Scalars['ID']['output'];
  statistics?: Maybe<Statistics>;
  statisticsId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type StatisticsSaleResponse = {
  __typename?: 'StatisticsSaleResponse';
  statisticsSales?: Maybe<Array<Maybe<StatisticsSale>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
};

export type TokenInput = {
  token: Scalars['String']['input'];
};

export type UpdateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdminPasswordByIdInput = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateAdminPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateMemberInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  placementParentId?: InputMaybe<Scalars['ID']['input']>;
  primaryAddress?: InputMaybe<Scalars['String']['input']>;
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  wallets?: InputMaybe<Array<InputMaybe<MemberWalletDataInput>>>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateMemberPasswordInputById = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateMemberWalletInput = {
  memberId: Scalars['ID']['input'];
  wallets: Array<MemberWalletDataInput>;
};

export type UpdatePackageInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id: Scalars['ID']['input'];
  productName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSaleInput = {
  id: Scalars['ID']['input'];
  invoiceNo?: InputMaybe<Scalars['Float']['input']>;
  memberId?: InputMaybe<Scalars['ID']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateStatisticsInput = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
  transactionId?: InputMaybe<Scalars['ID']['input']>;
  txcShared?: InputMaybe<Scalars['Float']['input']>;
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type ResetTokenVerifyMutationVariables = Exact<{
  data: TokenInput;
}>;


export type ResetTokenVerifyMutation = { __typename?: 'Mutation', resetTokenVerify: { __typename?: 'VerifyTokenResponse', email: string, token: string } };

export type FetchMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMeQuery = { __typename?: 'Query', memberMe: { __typename?: 'Member', id: string, username: string, fullName: string, email: string, primaryAddress: string, secondaryAddress?: string | null, assetId: string, mobile: string, city?: string | null, state?: string | null, zipCode?: string | null, sponsorId?: string | null, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, sponsor?: { __typename?: 'Member', id: string, username: string, fullName: string, email: string, primaryAddress: string, secondaryAddress?: string | null, mobile: string, assetId: string } | null, sales?: Array<{ __typename?: 'Sale', id: string, invoiceNo: number, memberId: string, packageId: string, paymentMethod: string, status: boolean, orderedAt: any } | null> | null, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null } | null> | null } };

export type FetchMemberStatsQueryVariables = Exact<{
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatsQuery = { __typename?: 'Query', all: { __typename?: 'MembersResponse', total?: number | null }, inactive: { __typename?: 'MembersResponse', total?: number | null } };

export type FetchMembersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchMembersQuery = { __typename?: 'Query', members: { __typename?: 'MembersResponse', total?: number | null, members?: Array<{ __typename?: 'Member', id: string, username: string, fullName: string, email: string, primaryAddress: string, secondaryAddress?: string | null, assetId: string, mobile: string, city?: string | null, state?: string | null, zipCode?: string | null, sponsorId?: string | null, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, sponsor?: { __typename?: 'Member', id: string, username: string, fullName: string, email: string, primaryAddress: string, secondaryAddress?: string | null, mobile: string, assetId: string } | null, sales?: Array<{ __typename?: 'Sale', id: string, invoiceNo: number, memberId: string, packageId: string, paymentMethod: string, status: boolean, orderedAt: any } | null> | null, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null } | null> | null } | null> | null } };

export type CreateMemberMutationVariables = Exact<{
  data: CreateMemberInput;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember: { __typename?: 'Member', username: string, fullName: string, email: string, mobile: string, primaryAddress: string, secondaryAddress?: string | null, assetId: string } };

export type FetchMemberQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberQuery = { __typename?: 'Query', members: { __typename?: 'MembersResponse', members?: Array<{ __typename?: 'Member', id: string, username: string, fullName: string, email: string, mobile: string, primaryAddress: string, secondaryAddress?: string | null, assetId: string, deletedAt?: any | null, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null } | null> | null } | null> | null } };

export type UpdateMemberMutationVariables = Exact<{
  data: UpdateMemberInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember: { __typename?: 'Member', id: string, mobile: string, primaryAddress: string, secondaryAddress?: string | null, assetId: string, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', method: string, display: string } | null } | null> | null } };

export type MemberOverviewQueryVariables = Exact<{
  data: MemberOverviewInput;
}>;


export type MemberOverviewQuery = { __typename?: 'Query', memberOverview: { __typename?: 'MemberOverview', lastHashPower: number, totalTXCShared: any, joinDate: any } };

export type MemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type MemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', issuedAt: any, hashPower: number, txcShared: any } | null> | null } };

export type PayoutsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type PayoutsQuery = { __typename?: 'Query', payouts: { __typename?: 'PayoutResponse', total?: number | null, payouts?: Array<{ __typename?: 'Payout', id: string, method: string, display: string, name: string, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null> | null } };

export type ResetPasswordRequestMutationVariables = Exact<{
  data: EmailInput;
}>;


export type ResetPasswordRequestMutation = { __typename?: 'Mutation', resetPasswordRequest: { __typename?: 'SuccessResponse', message?: string | null, result: string } };

export type ResetPasswordByTokenMutationVariables = Exact<{
  data: ResetPasswordTokenInput;
}>;


export type ResetPasswordByTokenMutation = { __typename?: 'Mutation', resetPasswordByToken: { __typename?: 'SuccessResponse', message?: string | null, result: string } };

export type RewardQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type RewardQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, issuedAt: any, newBlocks: number, totalBlocks: number, totalHashPower: number, totalMembers: number, txcShared: any, from: any, to: any, status: boolean, statisticsSales?: Array<{ __typename?: 'StatisticsSale', id: string, saleId: string, issuedAt: any } | null> | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', txcShared: any, memberStatisticsWallets?: Array<{ __typename?: 'MemberStatisticsWallet', id: string } | null> | null } | null> | null } | null> | null } };

export type FetchMemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, statisticsId: string, txcShared: any, hashPower: number, percent: number, issuedAt: any, member?: { __typename?: 'Member', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, username: string, fullName: string, email: string, mobile: string, assetId: string, primaryAddress: string, secondaryAddress?: string | null, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null } | null> | null } | null, statistics?: { __typename?: 'Statistics', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, newBlocks: number, totalBlocks: number, totalHashPower: number, totalMembers: number, status: boolean, txcShared: any, issuedAt: any, from: any, to: any } | null } | null> | null } };

export type CreateStatisticsMutationVariables = Exact<{
  data: CreateStatisticsInput;
}>;


export type CreateStatisticsMutation = { __typename?: 'Mutation', createStatistics: { __typename?: 'Statistics', id: string, newBlocks: number } };

export type CreateManyMemberStatisticsMutationVariables = Exact<{
  data: CreateManyMemberStatisticsInput;
}>;


export type CreateManyMemberStatisticsMutation = { __typename?: 'Mutation', createManyMemberStatistics: { __typename?: 'ManySuccessResponse', count: number } };

export type UpdateStatisticsMutationVariables = Exact<{
  data: UpdateStatisticsInput;
}>;


export type UpdateStatisticsMutation = { __typename?: 'Mutation', updateStatistics: { __typename?: 'Statistics', status: boolean, txcShared: any } };

export type RemoveMemberStatisticsByStaitisIdMutationVariables = Exact<{
  data: IdInput;
}>;


export type RemoveMemberStatisticsByStaitisIdMutation = { __typename?: 'Mutation', removeMemberStatisticsByStaitisId: { __typename?: 'ManySuccessResponse', count: number } };

export type RemoveManyStatisticsMutationVariables = Exact<{
  data: IDsInput;
}>;


export type RemoveManyStatisticsMutation = { __typename?: 'Mutation', removeManyStatistics: { __typename?: 'ManySuccessResponse', count: number } };

export type RewardsQueryVariables = Exact<{
  from: Scalars['DateTimeISO']['input'];
  to: Scalars['DateTimeISO']['input'];
}>;


export type RewardsQuery = { __typename?: 'Query', rewardsByWallets: { __typename?: 'RewardsByWallets', rewards: Array<{ __typename?: 'RewardByWallet', txc: any, wallet: { __typename?: 'MemberWallet', id: string, address: string, percent: number, payout?: { __typename?: 'Payout', name: string, method: string } | null } }> } };

export type DailyRewardsQueryVariables = Exact<{
  from: Scalars['DateTimeISO']['input'];
  to: Scalars['DateTimeISO']['input'];
}>;


export type DailyRewardsQuery = { __typename?: 'Query', dailyRewards: { __typename?: 'DailyRewards', rewards: Array<{ __typename?: 'DailyReward', day: any, totalTxc: any, rewardsByWallet: Array<{ __typename?: 'RewardByWallet', txc: any, wallet: { __typename?: 'MemberWallet', address: string, payout?: { __typename?: 'Payout', method: string } | null } }> }> } };

export type MemberStatisticsWalletsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type MemberStatisticsWalletsQuery = { __typename?: 'Query', memberStatisticsWallets: { __typename?: 'MemberStatisticsWalletResponse', memberStatisticsWallets?: Array<{ __typename?: 'MemberStatisticsWallet', id: string, txc: any, issuedAt: any, memberWallet?: { __typename?: 'MemberWallet', address: string } | null, memberStatistic?: { __typename?: 'MemberStatistics', hashPower: number, percent: number, txcShared: any } | null } | null> | null } };

export type FetchSalesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchSalesQuery = { __typename?: 'Query', sales: { __typename?: 'SalesResponse', total?: number | null, sales?: Array<{ __typename?: 'Sale', id: string, invoiceNo: number, memberId: string, packageId: string, orderedAt: any, status: boolean, paymentMethod: string, member?: { __typename?: 'Member', id: string, username: string, fullName: string, email: string, mobile: string, assetId: string, primaryAddress: string, secondaryAddress?: string | null, memberWallets?: Array<{ __typename?: 'MemberWallet', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, memberId: string, payoutId: string, address: string, percent: number, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null } | null> | null } | null, package?: { __typename?: 'Package', id: string, productName: string, amount: number, date: any, token: number, status: boolean } | null } | null> | null } };

export type FetchSaleStatsQueryVariables = Exact<{
  allFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchSaleStatsQuery = { __typename?: 'Query', all: { __typename?: 'SalesResponse', total?: number | null }, inactive: { __typename?: 'SalesResponse', total?: number | null } };

export type CreateSaleMutationVariables = Exact<{
  data: CreateSaleInput;
}>;


export type CreateSaleMutation = { __typename?: 'Mutation', createSale: { __typename?: 'Sale', invoiceNo: number, orderedAt: any, memberId: string, paymentMethod: string, packageId: string, status: boolean } };

export type UpdateSaleMutationVariables = Exact<{
  data: UpdateSaleInput;
}>;


export type UpdateSaleMutation = { __typename?: 'Mutation', updateSale: { __typename?: 'Sale', id: string, status: boolean } };

export type PackagesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PackagesQuery = { __typename?: 'Query', packages: { __typename?: 'PackageResponse', total?: number | null, packages?: Array<{ __typename?: 'Package', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, productName: string, amount: number, status: boolean, date: any, token: number } | null> | null } };

export type LoginMutationVariables = Exact<{
  data: MemberLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', memberLogin: { __typename?: 'MemberLoginResponse', accessToken: string } };

export type QueryQueryVariables = Exact<{
  data: LiveStatsArgs;
}>;


export type QueryQuery = { __typename?: 'Query', liveBlockStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveMiningStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveUserStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> } };

export type BlocksQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlocksResponse', total?: number | null, blocks?: Array<{ __typename?: 'Block', id: string, blockNo: number, hashRate: number, difficulty: number, issuedAt: any, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null> | null } };

export type StatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type StatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null> | null } };

export type TxcMemberStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type TxcMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', id: string, hashPower: number, txcShared: any, issuedAt: any, percent: number, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, member?: { __typename?: 'Member', username: string, email: string, assetId: string } | null, statistics?: { __typename?: 'Statistics', newBlocks: number, status: boolean } | null } | null> | null } };

export type HistoryStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type HistoryStatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null } | null> | null } };


export const ResetTokenVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetTokenVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetTokenVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ResetTokenVerifyMutation, ResetTokenVerifyMutationVariables>;
export const FetchMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorId"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceNo"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<FetchMeQuery, FetchMeQueryVariables>;
export const FetchMemberStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatsQuery, FetchMemberStatsQueryVariables>;
export const FetchMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorId"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceNo"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMembersQuery, FetchMembersQueryVariables>;
export const CreateMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]} as unknown as DocumentNode<CreateMemberMutation, CreateMemberMutationVariables>;
export const FetchMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchMemberQuery, FetchMemberQueryVariables>;
export const UpdateMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]} as unknown as DocumentNode<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const MemberOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberOverviewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberOverview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"totalTXCShared"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}}]}}]}}]} as unknown as DocumentNode<MemberOverviewQuery, MemberOverviewQueryVariables>;
export const MemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsQuery, MemberStatisticsQueryVariables>;
export const PayoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Payouts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payouts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PayoutsQuery, PayoutsQueryVariables>;
export const ResetPasswordRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordRequestMutation, ResetPasswordRequestMutationVariables>;
export const ResetPasswordByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByTokenMutation, ResetPasswordByTokenMutationVariables>;
export const RewardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Reward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsSales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"saleId"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<RewardQuery, RewardQueryVariables>;
export const FetchMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsId"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatisticsQuery, FetchMemberStatisticsQueryVariables>;
export const CreateStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}}]}}]}}]} as unknown as DocumentNode<CreateStatisticsMutation, CreateStatisticsMutationVariables>;
export const CreateManyMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateManyMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyMemberStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createManyMemberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateManyMemberStatisticsMutation, CreateManyMemberStatisticsMutationVariables>;
export const UpdateStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}}]}}]} as unknown as DocumentNode<UpdateStatisticsMutation, UpdateStatisticsMutationVariables>;
export const RemoveMemberStatisticsByStaitisIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMemberStatisticsByStaitisId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMemberStatisticsByStaitisId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<RemoveMemberStatisticsByStaitisIdMutation, RemoveMemberStatisticsByStaitisIdMutationVariables>;
export const RemoveManyStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveManyStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<RemoveManyStatisticsMutation, RemoveManyStatisticsMutationVariables>;
export const RewardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Rewards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsByWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RewardsQuery, RewardsQueryVariables>;
export const DailyRewardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DailyRewards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyRewards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsByWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTxc"}}]}}]}}]}}]} as unknown as DocumentNode<DailyRewardsQuery, DailyRewardsQueryVariables>;
export const MemberStatisticsWalletsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatisticsWallets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberStatistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsWalletsQuery, MemberStatisticsWalletsQueryVariables>;
export const FetchSalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceNo"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"package"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchSalesQuery, FetchSalesQueryVariables>;
export const FetchSaleStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSaleStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchSaleStatsQuery, FetchSaleStatsQueryVariables>;
export const CreateSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoiceNo"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateSaleMutation, CreateSaleMutationVariables>;
export const UpdateSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateSaleMutation, UpdateSaleMutationVariables>;
export const PackagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Packages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PackagesQuery, PackagesQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LiveStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liveBlockStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveMiningStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveUserStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const BlocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockNo"}},{"kind":"Field","name":{"kind":"Name","value":"hashRate"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<BlocksQuery, BlocksQueryVariables>;
export const StatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Statistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<StatisticsQuery, StatisticsQueryVariables>;
export const TxcMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TXCMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TxcMemberStatisticsQuery, TxcMemberStatisticsQueryVariables>;
export const HistoryStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HistoryStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<HistoryStatisticsQuery, HistoryStatisticsQueryVariables>;