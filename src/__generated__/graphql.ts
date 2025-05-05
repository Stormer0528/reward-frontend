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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type AccessTokenResponse = {
  __typename?: 'AccessTokenResponse';
  accessToken: Scalars['String']['output'];
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['ID']['output'];
  balance: Scalars['BigInt']['output'];
  type: PaymentType;
};

export type AddressInput = {
  address: Scalars['ID']['input'];
  type: PaymentType;
};

export type AddressResponse = {
  __typename?: 'AddressResponse';
  addresses?: Maybe<Array<Address>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Admin = {
  __typename?: 'Admin';
  OTPEnabled: Scalars['Boolean']['output'];
  adminNotes?: Maybe<Array<AdminNotes>>;
  avatar: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminNotes = {
  __typename?: 'AdminNotes';
  admin?: Maybe<Admin>;
  adminId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AdminNotesResponse = {
  __typename?: 'AdminNotesResponse';
  adminNotes?: Maybe<Array<AdminNotes>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AdminsResponse = {
  __typename?: 'AdminsResponse';
  admins?: Maybe<Array<Admin>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ApproveCommissionWithTxId = {
  ids: Array<Scalars['ID']['input']>;
  txID: Scalars['ID']['input'];
};

export type ApproveCommissionWithTxIdInput = {
  txData: Array<ApproveCommissionWithTxId>;
};

export type AutoCampaign = {
  __typename?: 'AutoCampaign';
  approvedCommission: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  sender: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  template?: Maybe<EmailTemplate>;
  templateId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AutoCampaignResponse = {
  __typename?: 'AutoCampaignResponse';
  autoCampaigns?: Maybe<Array<AutoCampaign>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AverageMinerRewardStatsResponse = {
  __typename?: 'AverageMinerRewardStatsResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  reward: Scalars['Float']['output'];
};

export type BasicGroupSetting = {
  __typename?: 'BasicGroupSetting';
  commissionDefaults: Array<CommissionDefaultEnum>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BasicListMember = {
  __typename?: 'BasicListMember';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type BasicSale = {
  __typename?: 'BasicSale';
  ID: Scalars['Int']['output'];
  amount: Scalars['Float']['output'];
  assetId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isMetal: Scalars['Boolean']['output'];
  memberId: Scalars['String']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  paymentMethod: Scalars['String']['output'];
  point: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  sponsorCnt: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  toEmail?: Maybe<Scalars['String']['output']>;
  toFullName?: Maybe<Scalars['String']['output']>;
  toMemberId?: Maybe<Scalars['String']['output']>;
  toUsername?: Maybe<Scalars['String']['output']>;
  token: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type BasicSalesResponse = {
  __typename?: 'BasicSalesResponse';
  sales?: Maybe<Array<BasicSale>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BasicWeeklyCommission = {
  __typename?: 'BasicWeeklyCommission';
  ID: Scalars['Int']['output'];
  begL: Scalars['Int']['output'];
  begR: Scalars['Int']['output'];
  cash: Scalars['Int']['output'];
  commission: Scalars['Int']['output'];
  commissionDefault: CommissionDefaultEnum;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  endL: Scalars['Int']['output'];
  endR: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  isTexitRanger: Scalars['Boolean']['output'];
  maxL: Scalars['Int']['output'];
  maxR: Scalars['Int']['output'];
  memberId: Scalars['ID']['output'];
  newL: Scalars['Int']['output'];
  newR: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  pkgL: Scalars['Int']['output'];
  pkgR: Scalars['Int']['output'];
  qualified: Scalars['Boolean']['output'];
  shortNote?: Maybe<Scalars['String']['output']>;
  status: ConfirmationStatus;
  username: Scalars['String']['output'];
  weekStartDate: Scalars['Date']['output'];
};

export type BasicWeeklyCommissionResponse = {
  __typename?: 'BasicWeeklyCommissionResponse';
  total?: Maybe<Scalars['Int']['output']>;
  weeklyCommissions?: Maybe<Array<BasicWeeklyCommission>>;
};

export type Block = {
  __typename?: 'Block';
  blockNo: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  difficulty: Scalars['Float']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  hashRate: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type BlockStatsResponse = {
  __typename?: 'BlockStatsResponse';
  base: Scalars['String']['output'];
  baseDate?: Maybe<Scalars['DateTimeISO']['output']>;
  difficulty: Scalars['Float']['output'];
  hashRate: Scalars['Float']['output'];
  soldHashPower: Scalars['Float']['output'];
};

export type BlocksResponse = {
  __typename?: 'BlocksResponse';
  blocks?: Maybe<Array<Block>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BugReport = {
  __typename?: 'BugReport';
  contact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  files?: Maybe<Array<PFile>>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  solvedBy?: Maybe<Admin>;
  solvedById?: Maybe<Scalars['ID']['output']>;
  status: BugReportStatus;
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  who?: Maybe<Scalars['String']['output']>;
};

export type BugReportResponse = {
  __typename?: 'BugReportResponse';
  bugReports?: Maybe<Array<BugReport>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum BugReportStatus {
  Backlog = 'BACKLOG',
  Done = 'DONE',
  Wip = 'WIP'
}

export type Campaign = {
  __typename?: 'Campaign';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  listExtra?: Maybe<Scalars['JSON']['output']>;
  listType: CampaignListType;
  recipients?: Maybe<Array<CampaignMember>>;
  sender: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum CampaignListType {
  All = 'ALL',
  Custom = 'CUSTOM',
  Group = 'GROUP',
  PendingManualCommission = 'PENDING_MANUAL_COMMISSION',
  WeeklySponsor = 'WEEKLY_SPONSOR'
}

export type CampaignMember = {
  __typename?: 'CampaignMember';
  body?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  open: Scalars['Boolean']['output'];
  openTime?: Maybe<Scalars['DateTimeISO']['output']>;
  sender: Scalars['String']['output'];
  sent: Scalars['Boolean']['output'];
  sentTime?: Maybe<Scalars['DateTimeISO']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type CampaignResponse = {
  __typename?: 'CampaignResponse';
  campaigns?: Maybe<Array<Campaign>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CommissionDefaultEnum {
  Hash = 'HASH',
  Manual = 'MANUAL',
  Txc = 'TXC',
  Usdc = 'USDC'
}

export type CommissionOverview = {
  __typename?: 'CommissionOverview';
  totalAmount: Scalars['Int']['output'];
  totalMember: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  totalSale: Scalars['Int']['output'];
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export type CommissionOverviewResponse = {
  __typename?: 'CommissionOverviewResponse';
  commissions?: Maybe<Array<CommissionOverview>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CommissionPeriodResponse = {
  __typename?: 'CommissionPeriodResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  commission: Scalars['Int']['output'];
  revenue: Scalars['Int']['output'];
};

export type CommissionSendmany = {
  __typename?: 'CommissionSendmany';
  command: Scalars['String']['output'];
  ids: Array<Scalars['ID']['output']>;
};

export type CommissionStatus = {
  __typename?: 'CommissionStatus';
  begL: Scalars['Int']['output'];
  begR: Scalars['Int']['output'];
  newL: Scalars['Int']['output'];
  newR: Scalars['Int']['output'];
};

export type CompleteOrderInput = {
  orderId: Scalars['Int']['input'];
  paymentId: Scalars['String']['input'];
};

export type ConfirmStatistics = {
  id: Scalars['ID']['input'];
  transactionId: Scalars['ID']['input'];
};

export enum ConfirmationStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  None = 'NONE',
  Pending = 'PENDING',
  Preview = 'PREVIEW'
}

export type CountResponse = {
  __typename?: 'CountResponse';
  count: Scalars['Float']['output'];
};

export type CreateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type CreateAdminNotesInput = {
  description: Scalars['String']['input'];
  memberId: Scalars['ID']['input'];
};

export type CreateAutoCampaignInput = {
  approvedCommission: Scalars['Boolean']['input'];
  sender: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};

export type CreateBlockInput = {
  blockNo: Scalars['Float']['input'];
  difficulty: Scalars['Float']['input'];
  hashRate: Scalars['Float']['input'];
  issuedAt: Scalars['DateTimeISO']['input'];
};

export type CreateBugReportInput = {
  contact?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  subject: Scalars['String']['input'];
  who?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCampaignInput = {
  body: Scalars['String']['input'];
  listExtra?: InputMaybe<Scalars['String']['input']>;
  listType: CampaignListType;
  sender: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateEmailTemplateInput = {
  body: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  templateID: Scalars['Int']['input'];
};

export type CreateGroupSettingCommissionBonusInput = {
  commission: Scalars['Int']['input'];
  lPoint: Scalars['Int']['input'];
  qPackageId: Scalars['ID']['input'];
  rPoint: Scalars['Int']['input'];
  uPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateGroupSettingInput = {
  groupSettingCommissionBonuses: Array<CreateGroupSettingCommissionBonusInput>;
  limitDate: Scalars['DateTimeISO']['input'];
  name: Scalars['String']['input'];
  rollSponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
  sponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInvoiceInput = {
  amount: Scalars['Float']['input'];
  amountInCents: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  dueDate: Scalars['Date']['input'];
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  reflinks?: InputMaybe<Array<LinkInput>>;
  status: InvoiceStatusEnum;
};

export type CreateManyMemberStatisticsInput = {
  memberStatistics: Array<CreateMemberStatisticsInput>;
};

export type CreateManyStatisticsSaleInput = {
  statisticsSales: Array<CreateStatisticsSaleInput>;
};

export type CreateMemberInput = {
  assetId: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault?: InputMaybe<CommissionDefaultEnum>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  isTexitRanger?: InputMaybe<Scalars['Boolean']['input']>;
  mobile: Scalars['String']['input'];
  placementParentId?: InputMaybe<Scalars['ID']['input']>;
  placementPosition?: InputMaybe<PlacementPosition>;
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress: Scalars['String']['input'];
  promoCode?: InputMaybe<Scalars['String']['input']>;
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  syncWithSendy?: InputMaybe<Scalars['Boolean']['input']>;
  teamReport?: InputMaybe<Array<TeamReport>>;
  teamStrategy?: InputMaybe<TeamStrategy>;
  username: Scalars['String']['input'];
  wallets: Array<MemberWalletDataInput>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMemberListInput = {
  emails: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateMemberStatisticsInput = {
  hashPower: Scalars['Float']['input'];
  issuedAt: Scalars['DateTimeISO']['input'];
  memberId: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
  statisticsId: Scalars['String']['input'];
  txcShared: Scalars['Float']['input'];
};

export type CreateOrderInput = {
  packageId: Scalars['String']['input'];
  paymentType: PaymentType;
};

export type CreatePackageInput = {
  amount: Scalars['Float']['input'];
  date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  enrollVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  point?: InputMaybe<Scalars['Float']['input']>;
  productName: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  token: Scalars['Float']['input'];
};

export type CreatePaymentMethodInput = {
  defaultLink?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreatePayoutInput = {
  display: Scalars['String']['input'];
  method: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};

export type CreatePromoInput = {
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProofInput = {
  amount: Scalars['Float']['input'];
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  mineLocation?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  refId: Scalars['ID']['input'];
  reflinks?: InputMaybe<Array<LinkInput>>;
  type: ProofType;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoleInput = {
  commission: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role: Scalars['Int']['input'];
  sale: Scalars['Int']['input'];
};

export type CreateSaleInput = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isMetal?: InputMaybe<Scalars['Boolean']['input']>;
  memberId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt: Scalars['DateTimeISO']['input'];
  packageId: Scalars['ID']['input'];
  paymentMethod: Scalars['String']['input'];
  reflinks?: InputMaybe<Array<LinkInput>>;
  sponsorCnt?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['Boolean']['input'];
  toMemberId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateScheduleCampaignInput = {
  listExtra?: InputMaybe<Scalars['String']['input']>;
  listType: CampaignListType;
  sender: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  subject: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
  when: Scalars['String']['input'];
};

export type CreateSignUpOrderInput = {
  email: Scalars['String']['input'];
  packageId: Scalars['String']['input'];
  paymentType: PaymentType;
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

export type Email = {
  __typename?: 'Email';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  files?: Maybe<Array<PFile>>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isDraft: Scalars['Boolean']['output'];
  recipients?: Maybe<Array<Recipient>>;
  repliedEmails?: Maybe<Array<Email>>;
  replyFrom?: Maybe<Email>;
  replyFromId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Member>;
  senderId: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  to: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type EmailInput = {
  email: Scalars['String']['input'];
};

export type EmailResponse = {
  __typename?: 'EmailResponse';
  emails?: Maybe<Array<Email>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type EmailStatusInput = {
  id: Scalars['ID']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  isStarred?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  body: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  subject: Scalars['String']['output'];
  templateID: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type EmailTemplateResponse = {
  __typename?: 'EmailTemplateResponse';
  templates?: Maybe<Array<EmailTemplate>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type EmailVerifyResult = {
  __typename?: 'EmailVerifyResult';
  message?: Maybe<Scalars['String']['output']>;
  packageID?: Maybe<Scalars['Int']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  result: SuccessResult;
};

export type EntityLog = {
  __typename?: 'EntityLog';
  action: Scalars['String']['output'];
  after?: Maybe<Scalars['JSON']['output']>;
  before?: Maybe<Scalars['JSON']['output']>;
  entity: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  when: Scalars['DateTime']['output'];
  who: Scalars['String']['output'];
};

export type EntityStats = {
  __typename?: 'EntityStats';
  dailyData: Array<DailyStats>;
  meta?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
};

export type FrontAction = {
  __typename?: 'FrontAction';
  action: FrontActionEnum;
  extra?: Maybe<FrontActionExtra>;
  message: Scalars['String']['output'];
};

export type FrontActionCreate12FreeBonusSale = {
  __typename?: 'FrontActionCreate12FreeBonusSale';
  fullName: Scalars['String']['output'];
  isWithinSponsorRollDuration: Scalars['Boolean']['output'];
  memberId: Scalars['ID']['output'];
  packageId: Scalars['ID']['output'];
  packageName: Scalars['String']['output'];
  paymentMethod: Scalars['String']['output'];
  sponsorCnt: Scalars['Int']['output'];
  type: FrontActionEnum;
  username: Scalars['String']['output'];
};

export enum FrontActionEnum {
  Create12Freebonussale = 'CREATE12FREEBONUSSALE',
  Remove12Freebonussale = 'REMOVE12FREEBONUSSALE',
  Update12Freebonussale = 'UPDATE12FREEBONUSSALE'
}

export type FrontActionExtra = FrontActionCreate12FreeBonusSale | FrontActionRemove12FreeBonusSale | FrontActionUpdate12FreeBonusSale;

export type FrontActionRemove12FreeBonusSale = {
  __typename?: 'FrontActionRemove12FreeBonusSale';
  ID: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  type: FrontActionEnum;
};

export type FrontActionUpdate12FreeBonusSale = {
  __typename?: 'FrontActionUpdate12FreeBonusSale';
  ID: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  newPackageId: Scalars['ID']['output'];
  newPackageName: Scalars['String']['output'];
  oldPackageId: Scalars['ID']['output'];
  oldPackageName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  type: FrontActionEnum;
};

export type GenerateWeeklyReportInput = {
  all: Scalars['Boolean']['input'];
};

export type GroupSetting = {
  __typename?: 'GroupSetting';
  commissionDefaults: Array<CommissionDefaultEnum>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  groupSettingCommissionBonuses: Array<GroupSettingCommissionBonus>;
  id: Scalars['ID']['output'];
  limitDate: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
  rollSponsorBonusPackage?: Maybe<Package>;
  rollSponsorBonusPackageId?: Maybe<Scalars['String']['output']>;
  sponsorBonusPackage?: Maybe<Package>;
  sponsorBonusPackageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type GroupSettingCommissionBonus = {
  __typename?: 'GroupSettingCommissionBonus';
  commission: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  lPoint: Scalars['Int']['output'];
  qPackageId: Scalars['ID']['output'];
  rPoint: Scalars['Int']['output'];
  uPackageId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type GroupSettingResponse = {
  __typename?: 'GroupSettingResponse';
  groupSettings?: Maybe<Array<GroupSetting>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type HashPowerResponse = {
  __typename?: 'HashPowerResponse';
  actualHashPower: Scalars['Float']['output'];
  soldHashPower: Scalars['Float']['output'];
};

export type IdInput = {
  id: Scalars['ID']['input'];
};

export type IdnInput = {
  ID: Scalars['Int']['input'];
};

export type IDsInput = {
  ids: Array<Scalars['ID']['input']>;
};

export type IndividualMember = {
  __typename?: 'IndividualMember';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sponsorFullname?: Maybe<Scalars['String']['output']>;
  sponsorId?: Maybe<Scalars['String']['output']>;
  sponsorUsername?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type Introducer = {
  __typename?: 'Introducer';
  ID: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  point: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type IntroducersResponse = {
  __typename?: 'IntroducersResponse';
  introducers?: Maybe<Array<Introducer>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  amountInCents: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  dueDate: Scalars['Date']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  proof?: Maybe<Proof>;
  status: InvoiceStatusEnum;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type InvoiceResponse = {
  __typename?: 'InvoiceResponse';
  invoices?: Maybe<Array<Invoice>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum InvoiceStatusEnum {
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type InvoiceWeekInput = {
  weekStartDate: Scalars['Date']['input'];
};

export type LatestStatistics = {
  __typename?: 'LatestStatistics';
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  newBlocks: Scalars['Float']['output'];
  totalMembers: Scalars['Float']['output'];
  txcShared: Scalars['Float']['output'];
};

export type LinkInput = {
  link: Scalars['String']['input'];
  linkType: Scalars['String']['input'];
};

export type LiveStatsArgs = {
  pastDays: Scalars['Float']['input'];
};

export type LogResponse = {
  __typename?: 'LogResponse';
  logs?: Maybe<Array<EntityLog>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  passwordExpired: Scalars['Boolean']['output'];
  status: LoginResult;
};

export enum LoginResult {
  Otp = 'otp',
  Success = 'success'
}

export type ManySuccessResponse = {
  __typename?: 'ManySuccessResponse';
  count: Scalars['Float']['output'];
};

export type Member = {
  __typename?: 'Member';
  ID?: Maybe<Scalars['Int']['output']>;
  OTPEnabled: Scalars['Boolean']['output'];
  adminNotes?: Maybe<Array<AdminNotes>>;
  allowState: MemberState;
  assetId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  cmnCalculatedWeeks: Scalars['Int']['output'];
  commission?: Maybe<CommissionStatus>;
  commissionDefault: CommissionDefaultEnum;
  communications?: Maybe<Array<CampaignMember>>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  fullName: Scalars['String']['output'];
  groupSetting?: Maybe<BasicGroupSetting>;
  id: Scalars['ID']['output'];
  introduceMembers?: Maybe<Array<Member>>;
  isTexitRanger: Scalars['Boolean']['output'];
  logs?: Maybe<Array<EntityLog>>;
  memberWallets?: Maybe<Array<MemberWallet>>;
  mobile: Scalars['String']['output'];
  placementChildren?: Maybe<Array<Member>>;
  placementParent?: Maybe<Member>;
  placementParentId?: Maybe<Scalars['ID']['output']>;
  placementPosition: PlacementPosition;
  placementRequested: Scalars['Boolean']['output'];
  point: Scalars['Float']['output'];
  preferredContact?: Maybe<Scalars['String']['output']>;
  preferredContactDetail?: Maybe<Scalars['String']['output']>;
  primaryAddress: Scalars['String']['output'];
  promoCode?: Maybe<Scalars['String']['output']>;
  sales?: Maybe<Array<Sale>>;
  secondaryAddress?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Session>;
  setting?: Maybe<Setting>;
  signupFormRequest?: Maybe<Scalars['JSONObject']['output']>;
  sponsor?: Maybe<Member>;
  sponsorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<Array<MemberStatistics>>;
  status: Scalars['Boolean']['output'];
  syncWithSendy: Scalars['Boolean']['output'];
  teamReport: Array<TeamReport>;
  teamStrategy: TeamStrategy;
  totalIntroducers: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username: Scalars['String']['output'];
  weekIntroducers?: Maybe<Scalars['Int']['output']>;
  weeklyCommissions?: Maybe<Array<WeeklyCommission>>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type MemberLogsArgs = {
  logsize?: Scalars['Float']['input'];
};


export type MemberWeekIntroducersArgs = {
  week: Scalars['Date']['input'];
};

export type MemberInOutRevenue = {
  __typename?: 'MemberInOutRevenue';
  amount: Scalars['Int']['output'];
  cashCommissionPotential: Scalars['Float']['output'];
  commission: Scalars['Int']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  percent?: Maybe<Scalars['Float']['output']>;
  username: Scalars['String']['output'];
};

export type MemberInOutRevenueResponse = {
  __typename?: 'MemberInOutRevenueResponse';
  inOuts?: Maybe<Array<MemberInOutRevenue>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberList = {
  __typename?: 'MemberList';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  emails: Array<Scalars['String']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  members: Array<BasicListMember>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberListResponse = {
  __typename?: 'MemberListResponse';
  memberLists?: Maybe<Array<MemberList>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MemberOverview = {
  __typename?: 'MemberOverview';
  cashCommissionPotential: Scalars['Int']['output'];
  currentHashPower: Scalars['Float']['output'];
  isTexitRanger: Scalars['Boolean']['output'];
  joinDate: Scalars['DateTimeISO']['output'];
  point: Scalars['Float']['output'];
  totalTXCShared: Scalars['BigInt']['output'];
};

export enum MemberState {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Graveyard = 'GRAVEYARD',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type MemberStatistics = {
  __typename?: 'MemberStatistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  hashPower: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  memberStatisticsWallets?: Maybe<Array<MemberStatisticsWallet>>;
  percent: Scalars['Float']['output'];
  statistics?: Maybe<Statistics>;
  statisticsId: Scalars['String']['output'];
  txcShared: Scalars['BigInt']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberStatisticsResponse = {
  __typename?: 'MemberStatisticsResponse';
  memberStatistics?: Maybe<Array<MemberStatistics>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberStatisticsWallet = {
  __typename?: 'MemberStatisticsWallet';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
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
  memberStatisticsWallets?: Maybe<Array<MemberStatisticsWallet>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MemberWallet = {
  __typename?: 'MemberWallet';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  memberStatisticsWallets?: Maybe<Array<MemberStatisticsWallet>>;
  note?: Maybe<Scalars['String']['output']>;
  payout?: Maybe<Payout>;
  payoutId: Scalars['ID']['output'];
  percent: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MemberWalletDataInput = {
  address: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  payoutId: Scalars['String']['input'];
  percent: Scalars['Float']['input'];
};

export type MemberWalletResponse = {
  __typename?: 'MemberWalletResponse';
  MemberWallets?: Maybe<Array<MemberWallet>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MembersByCountryItem = {
  __typename?: 'MembersByCountryItem';
  country: Scalars['String']['output'];
  memberCount: Scalars['Int']['output'];
};

export type MembersResponse = {
  __typename?: 'MembersResponse';
  members?: Maybe<Array<Member>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MinerCountStatsResponse = {
  __typename?: 'MinerCountStatsResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  minerCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin: LoginResponse;
  adminResetPasswordByToken: SuccessResponse;
  adminResetPasswordRequest: SuccessResponse;
  adminResetTokenVerify: VerifyTokenResponse;
  approveCommissionWithTransactionIds: SuccessResponse;
  approveMember: SuccessResponse;
  calculateCommissions: SuccessResponse;
  calculatePreviewCommissions: SuccessResponse;
  cancelOrder: SuccessResponse;
  cancelWaitingTransaction: SuccessResponse;
  completeOrder: OrderStatusResponse;
  confirmStatistics: Statistics;
  createAdmin: Admin;
  createAdminNote: AdminNotes;
  createAndSendCampaign: Campaign;
  createAutoCampaign: AutoCampaign;
  createBlock: Block;
  createBugReport: SuccessResponse;
  createCampaignSchedule: ScheduleCampaign;
  createEmailTemplate: EmailTemplate;
  createGroupSetting: GroupSetting;
  createInvoice: Invoice;
  createManyMemberStatistics: ManySuccessResponse;
  createManyStatisticsSales: ManySuccessResponse;
  createMember: Member;
  createMemberList: MemberList;
  createMemberStatistics: MemberStatistics;
  createOrder: Order;
  createPackage: Package;
  createPaymentMethod: PaymentMethod;
  createPayout: Payout;
  createPromo: Promo;
  createProof: Proof;
  createRole: Role;
  createSale: Sale;
  createSignUpOrder: Order;
  createStatistics: Statistics;
  createStatisticsSale: StatisticsSale;
  disable2FA: AccessTokenResponse;
  duplicateMember: Member;
  emailVerify: EmailVerifyResult;
  emailVerifyCode: AccessTokenResponse;
  forceMemberLogout: SuccessResponse;
  generateWDMSVegasReport: SuccessResponse;
  generateWeekP2PInvoice: SuccessResponse;
  generateWeeklyReport: SuccessResponse;
  memberExchangeLogin: LoginResponse;
  memberLogin: LoginResponse;
  memberLogout: SuccessResponse;
  moveEmailToTrash: Email;
  moveInvoicePaid: SuccessResponse;
  moveToBlocked: SuccessResponse;
  moveToGraveyard: SuccessResponse;
  moveToPaid: SuccessResponse;
  moveToPending: SuccessResponse;
  moveToSolve: SuccessResponse;
  moveToWIP: SuccessResponse;
  refreshBalance: SuccessResponse;
  regenerateInvoiceById: SuccessResponse;
  removeAdminNote: SuccessResponse;
  removeAdmins: ManySuccessResponse;
  removeAutoCampaign: AutoCampaign;
  removeCampaignSchedule: ScheduleCampaign;
  removeCompleteMemberPlacement: SuccessResponse;
  removeEmail: Email;
  removeGroupSetting: GroupSetting;
  removeInvoice: Invoice;
  removeManyMemberStatistics: ManySuccessResponse;
  removeManyStatistics: ManySuccessResponse;
  removeManyStatisticsSales: ManySuccessResponse;
  removeMember: SuccessResponse;
  removeMemberFromPlacementTree: SuccessResponse;
  removeMemberList: SuccessResponse;
  removeMemberStatisticsByStaitisId: ManySuccessResponse;
  removePackage: SuccessResponse;
  removePaymentMethod: SuccessResponse;
  removePromo: SuccessResponse;
  removeProof: SuccessResponse;
  removeRecipient: Recipient;
  removeRole: SuccessResponse;
  removeSale: SuccessResponse;
  removeStatisticsSalesByStaitisId: ManySuccessResponse;
  resetBonusClock: SuccessResponse;
  resetPasswordByToken: SuccessResponse;
  resetPasswordRequest: SuccessResponse;
  resetTokenVerify: VerifyTokenResponse;
  restoreEmailFromTrash: Email;
  sendEmail: SuccessResponse;
  sendEmailVerificationCode: SuccessResponse;
  sendEmailVerificationLink: SuccessResponse;
  sendWelcomeEmail: SuccessResponse;
  setReadAllNotifications: ManySuccessResponse;
  setReadNotification: SuccessResponse;
  setRecipientStatus: Recipient;
  signUpMember: SignupMemberResponse;
  updateAdmin: Admin;
  updateAdminNote: AdminNotes;
  updateAutoCampaign: AutoCampaign;
  updateBugReport: BugReport;
  updateCampaignSchedule: ScheduleCampaign;
  updateCommission: WeeklyCommission;
  updateCommissionShortNote: WeeklyCommission;
  updateCommissionsStatus: SuccessResponse;
  updateEmailTemplate: EmailTemplate;
  updateGroupSetting: GroupSetting;
  updateInvoice: Invoice;
  updateMember: Member;
  updateMemberList: MemberList;
  updateMemberWallet: SuccessResponse;
  updatePackage: Package;
  updatePasswordAdmin: SuccessResponse;
  updatePasswordAdminById: Admin;
  updatePasswordMember: SuccessResponse;
  updatePasswordMemberById: Member;
  updatePaymentMethod: PaymentMethod;
  updatePromo: Promo;
  updateProof: Proof;
  updateRole: Role;
  updateSale: Sale;
  updateStatistics: Statistics;
  upsertEmail: Email;
  upsertSettingByMemberId: Setting;
  verify2FAAndEnable: AccessTokenResponse;
  verify2FAToken: LoginResponse;
  verifyMemberEmail: SuccessResponse;
};


export type MutationAdminLoginArgs = {
  data: AdminLoginInput;
};


export type MutationAdminResetPasswordByTokenArgs = {
  data: ResetPasswordTokenInput;
};


export type MutationAdminResetPasswordRequestArgs = {
  data: EmailInput;
};


export type MutationAdminResetTokenVerifyArgs = {
  data: TokenInput;
};


export type MutationApproveCommissionWithTransactionIdsArgs = {
  data: ApproveCommissionWithTxIdInput;
};


export type MutationApproveMemberArgs = {
  data: IdInput;
};


export type MutationCancelOrderArgs = {
  data: IdnInput;
};


export type MutationCancelWaitingTransactionArgs = {
  data: IdInput;
};


export type MutationCompleteOrderArgs = {
  data: CompleteOrderInput;
};


export type MutationConfirmStatisticsArgs = {
  data: ConfirmStatistics;
};


export type MutationCreateAdminArgs = {
  data: CreateAdminInput;
};


export type MutationCreateAdminNoteArgs = {
  data: CreateAdminNotesInput;
};


export type MutationCreateAndSendCampaignArgs = {
  data: CreateCampaignInput;
};


export type MutationCreateAutoCampaignArgs = {
  data: CreateAutoCampaignInput;
};


export type MutationCreateBlockArgs = {
  data: CreateBlockInput;
};


export type MutationCreateBugReportArgs = {
  data: CreateBugReportInput;
};


export type MutationCreateCampaignScheduleArgs = {
  data: CreateScheduleCampaignInput;
};


export type MutationCreateEmailTemplateArgs = {
  data: CreateEmailTemplateInput;
};


export type MutationCreateGroupSettingArgs = {
  data: CreateGroupSettingInput;
};


export type MutationCreateInvoiceArgs = {
  data: CreateInvoiceInput;
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


export type MutationCreateMemberListArgs = {
  data: CreateMemberListInput;
};


export type MutationCreateMemberStatisticsArgs = {
  data: CreateMemberStatisticsInput;
};


export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};


export type MutationCreatePackageArgs = {
  data: CreatePackageInput;
};


export type MutationCreatePaymentMethodArgs = {
  data: CreatePaymentMethodInput;
};


export type MutationCreatePayoutArgs = {
  data: CreatePayoutInput;
};


export type MutationCreatePromoArgs = {
  data: CreatePromoInput;
};


export type MutationCreateProofArgs = {
  data: CreateProofInput;
};


export type MutationCreateRoleArgs = {
  data: CreateRoleInput;
};


export type MutationCreateSaleArgs = {
  data: CreateSaleInput;
};


export type MutationCreateSignUpOrderArgs = {
  data: CreateSignUpOrderInput;
};


export type MutationCreateStatisticsArgs = {
  data: CreateStatisticsInput;
};


export type MutationCreateStatisticsSaleArgs = {
  data: CreateStatisticsSaleInput;
};


export type MutationDuplicateMemberArgs = {
  data: IdInput;
};


export type MutationEmailVerifyArgs = {
  data: TokenInput;
};


export type MutationEmailVerifyCodeArgs = {
  data: VerificationCodeInput;
};


export type MutationForceMemberLogoutArgs = {
  data: IdInput;
};


export type MutationGenerateWeekP2PInvoiceArgs = {
  data: InvoiceWeekInput;
};


export type MutationGenerateWeeklyReportArgs = {
  data: GenerateWeeklyReportInput;
};


export type MutationMemberExchangeLoginArgs = {
  data: MemberLoginInput;
};


export type MutationMemberLoginArgs = {
  data: MemberLoginInput;
};


export type MutationMoveEmailToTrashArgs = {
  data: IdInput;
};


export type MutationMoveInvoicePaidArgs = {
  data: IdnInput;
};


export type MutationMoveToBlockedArgs = {
  data: IdInput;
};


export type MutationMoveToGraveyardArgs = {
  data: IdInput;
};


export type MutationMoveToPaidArgs = {
  data: IdInput;
};


export type MutationMoveToPendingArgs = {
  data: IdInput;
};


export type MutationMoveToSolveArgs = {
  data: IdInput;
};


export type MutationMoveToWipArgs = {
  data: IdInput;
};


export type MutationRefreshBalanceArgs = {
  data: AddressInput;
};


export type MutationRegenerateInvoiceByIdArgs = {
  data: IdnInput;
};


export type MutationRemoveAdminNoteArgs = {
  data: IdInput;
};


export type MutationRemoveAdminsArgs = {
  data: IDsInput;
};


export type MutationRemoveAutoCampaignArgs = {
  data: IdInput;
};


export type MutationRemoveCampaignScheduleArgs = {
  data: IdInput;
};


export type MutationRemoveCompleteMemberPlacementArgs = {
  data: IdInput;
};


export type MutationRemoveEmailArgs = {
  data: IdInput;
};


export type MutationRemoveGroupSettingArgs = {
  data: IdInput;
};


export type MutationRemoveInvoiceArgs = {
  data: IdnInput;
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


export type MutationRemoveMemberFromPlacementTreeArgs = {
  data: IdInput;
};


export type MutationRemoveMemberListArgs = {
  data: IdInput;
};


export type MutationRemoveMemberStatisticsByStaitisIdArgs = {
  data: IdInput;
};


export type MutationRemovePackageArgs = {
  data: IdInput;
};


export type MutationRemovePaymentMethodArgs = {
  data: IdInput;
};


export type MutationRemovePromoArgs = {
  data: IdInput;
};


export type MutationRemoveProofArgs = {
  data: IdInput;
};


export type MutationRemoveRecipientArgs = {
  data: IdInput;
};


export type MutationRemoveRoleArgs = {
  data: IdInput;
};


export type MutationRemoveSaleArgs = {
  data: IdInput;
};


export type MutationRemoveStatisticsSalesByStaitisIdArgs = {
  data: IdInput;
};


export type MutationResetBonusClockArgs = {
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


export type MutationRestoreEmailFromTrashArgs = {
  data: IdInput;
};


export type MutationSendEmailArgs = {
  data: IdInput;
};


export type MutationSendEmailVerificationLinkArgs = {
  data: EmailInput;
};


export type MutationSendWelcomeEmailArgs = {
  data: EmailInput;
};


export type MutationSetReadNotificationArgs = {
  data: IdInput;
};


export type MutationSetRecipientStatusArgs = {
  data: EmailStatusInput;
};


export type MutationSignUpMemberArgs = {
  data: SignupFormInput;
};


export type MutationUpdateAdminArgs = {
  data: UpdateAdminInput;
};


export type MutationUpdateAdminNoteArgs = {
  data: UpdateAdminNotesInput;
};


export type MutationUpdateAutoCampaignArgs = {
  data: UpdateAutoCampaignInput;
};


export type MutationUpdateBugReportArgs = {
  data: UpdateBugReportInput;
};


export type MutationUpdateCampaignScheduleArgs = {
  data: UpdateScheduleCampaignInput;
};


export type MutationUpdateCommissionArgs = {
  data: WeeklyCommissionUpdateInput;
};


export type MutationUpdateCommissionShortNoteArgs = {
  data: WeeklyCommissionNoteInput;
};


export type MutationUpdateCommissionsStatusArgs = {
  data: WeeklyCommissionsStatusUpdateInput;
};


export type MutationUpdateEmailTemplateArgs = {
  data: UpdateEmailTemplateInput;
};


export type MutationUpdateGroupSettingArgs = {
  data: UpdateGroupSettingInput;
};


export type MutationUpdateInvoiceArgs = {
  data: UpdateInvoiceInput;
};


export type MutationUpdateMemberArgs = {
  data: UpdateMemberInput;
};


export type MutationUpdateMemberListArgs = {
  data: UpdateMemberListInput;
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


export type MutationUpdatePaymentMethodArgs = {
  data: UpdatePaymentMethodInput;
};


export type MutationUpdatePromoArgs = {
  data: UpdatePromoInput;
};


export type MutationUpdateProofArgs = {
  data: UpdateProofByIdInput;
};


export type MutationUpdateRoleArgs = {
  data: UpdateRoleInput;
};


export type MutationUpdateSaleArgs = {
  data: UpdateSaleInput;
};


export type MutationUpdateStatisticsArgs = {
  data: UpdateStatisticsInput;
};


export type MutationUpsertEmailArgs = {
  data: UpsertEmailInput;
};


export type MutationUpsertSettingByMemberIdArgs = {
  data: UpsertSettingInput;
};


export type MutationVerify2FaAndEnableArgs = {
  data: Verify2FaInput;
};


export type MutationVerify2FaTokenArgs = {
  data: TokenInput;
};


export type MutationVerifyMemberEmailArgs = {
  data: IdInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  level: NotificationLevel;
  message: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type NotificationClient = {
  __typename?: 'NotificationClient';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  level: NotificationLevel;
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export enum NotificationLevel {
  Admin = 'ADMIN',
  All = 'ALL',
  Individual = 'INDIVIDUAL',
  Teamleader = 'TEAMLEADER'
}

export type NotificationResponse = {
  __typename?: 'NotificationResponse';
  notifications?: Maybe<Array<NotificationClient>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['Int']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  package?: Maybe<Package>;
  packageId: Scalars['String']['output'];
  status: OrderStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  waitAddress?: Maybe<WaitAddress>;
  waitAddressId: Scalars['String']['output'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  orders?: Maybe<Array<Order>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type OrderStatusResponse = {
  __typename?: 'OrderStatusResponse';
  status: OrderStatus;
};

export type PFile = {
  __typename?: 'PFile';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  url: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  ID: Scalars['Int']['output'];
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  date: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  enrollVisibility: Scalars['Boolean']['output'];
  freeShare: Scalars['Boolean']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  point: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  sales?: Maybe<Array<Sale>>;
  status: Scalars['Boolean']['output'];
  token: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PackageResponse = {
  __typename?: 'PackageResponse';
  packages?: Maybe<Array<Package>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  visible: Scalars['Boolean']['output'];
};

export type PaymentMethodResponse = {
  __typename?: 'PaymentMethodResponse';
  paymentMethods?: Maybe<Array<PaymentMethod>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PaymentType {
  Txc = 'TXC',
  Usdc = 'USDC',
  Usdt = 'USDT'
}

export type Payout = {
  __typename?: 'Payout';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  display: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  memberWallets?: Maybe<Array<MemberWallet>>;
  method: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PayoutResponse = {
  __typename?: 'PayoutResponse';
  payouts?: Maybe<Array<Payout>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PeriodStatsArgs = {
  type: Scalars['String']['input'];
};

export type PlacementMember = {
  __typename?: 'PlacementMember';
  cmnCalculatedWeeks: Scalars['Int']['output'];
  commission: CommissionStatus;
  createdAt: Scalars['DateTimeISO']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  placementParentId: Scalars['ID']['output'];
  placementPosition: PlacementPosition;
  teamStrategy: TeamStrategy;
  username: Scalars['String']['output'];
};

export enum PlacementPosition {
  Left = 'LEFT',
  None = 'NONE',
  Right = 'RIGHT'
}

export type PlacementPositionCountResponse = {
  __typename?: 'PlacementPositionCountResponse';
  leftCount: Scalars['Float']['output'];
  rightCount: Scalars['Float']['output'];
};

export type ProfitabilityCalculationInput = {
  init: Scalars['Int']['input'];
  joinDate: Scalars['DateTimeISO']['input'];
  target: Scalars['Int']['input'];
};

export type ProfitabilityCalculationResponse = {
  __typename?: 'ProfitabilityCalculationResponse';
  endDate: Scalars['DateTimeISO']['output'];
  extraTXC: Scalars['Float']['output'];
  init: Scalars['Int']['output'];
  period: Scalars['Int']['output'];
  startDate: Scalars['DateTimeISO']['output'];
  target: Scalars['Int']['output'];
  txc: Scalars['Float']['output'];
  txcCost: Scalars['Float']['output'];
  txcPrice: Scalars['Float']['output'];
};

export type Promo = {
  __typename?: 'Promo';
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  endDate: Scalars['Date']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  startDate: Scalars['Date']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PromoResponse = {
  __typename?: 'PromoResponse';
  promos?: Maybe<Array<Promo>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Proof = {
  __typename?: 'Proof';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  files?: Maybe<Array<PFile>>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  mineLocation?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  orderedAt: Scalars['DateTimeISO']['output'];
  refId: Scalars['ID']['output'];
  reflinks?: Maybe<Array<RefLink>>;
  type: ProofType;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};

export type ProofResponse = {
  __typename?: 'ProofResponse';
  proofs?: Maybe<Array<Proof>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ProofType {
  Administrationsalary = 'ADMINISTRATIONSALARY',
  Commission = 'COMMISSION',
  Developersapps = 'DEVELOPERSAPPS',
  Developersintegrations = 'DEVELOPERSINTEGRATIONS',
  Developersprotocol = 'DEVELOPERSPROTOCOL',
  Developersweb = 'DEVELOPERSWEB',
  Exchangefee = 'EXCHANGEFEE',
  Infrastructure = 'INFRASTRUCTURE',
  Invoice = 'INVOICE',
  Liquidity = 'LIQUIDITY',
  Marketingminetxcpromotion = 'MARKETINGMINETXCPROMOTION',
  Marketingtxcpromotion = 'MARKETINGTXCPROMOTION',
  Mineelectricity = 'MINEELECTRICITY',
  Minefacilityrentmortage = 'MINEFACILITYRENTMORTAGE',
  Minemaintainance = 'MINEMAINTAINANCE',
  Minenewequipment = 'MINENEWEQUIPMENT',
  Overhead = 'OVERHEAD',
  Profit = 'PROFIT',
  Promotion = 'PROMOTION',
  Sale = 'SALE',
  Transactionprocessing = 'TRANSACTIONPROCESSING'
}

export type Query = {
  __typename?: 'Query';
  WDMSVegasContestWinners: WdmsvegasContestWinnerResponse;
  addresses: AddressResponse;
  adminMe: Admin;
  adminNotes: AdminNotesResponse;
  admins: AdminsResponse;
  autoCampaigns: AutoCampaignResponse;
  averageMemberReward: Array<AverageMinerRewardStatsResponse>;
  blocks: BlocksResponse;
  blocksData: Array<BlockStatsResponse>;
  bugReportById: BugReport;
  bugReports: BugReportResponse;
  calculateProfitability: ProfitabilityCalculationResponse;
  campaignById: Campaign;
  campaigns: CampaignResponse;
  checkAddressWaitStatus: WaitTransactionStatusResponse;
  commissionByMemberIDAndWeek: WeeklyCommission;
  commissionByPeriod: Array<CommissionPeriodResponse>;
  commissionsByWeek: CommissionOverviewResponse;
  countBelowMembers: PlacementPositionCountResponse;
  countLeftMembers: CountResponse;
  countRightMembers: CountResponse;
  dailyRewards: DailyRewards;
  emailById: Email;
  emailTemplateById: EmailTemplate;
  emailTemplates: EmailTemplateResponse;
  emails: EmailResponse;
  generate2FA: Scalars['String']['output'];
  generateCommissionSendmany: Array<CommissionSendmany>;
  generateReferenceLink: ReferenceLink;
  groupSettings: GroupSettingResponse;
  hashPowerResponse: HashPowerResponse;
  individualMembers: Array<IndividualMember>;
  introducers: IntroducersResponse;
  invoiceById: Invoice;
  invoices: InvoiceResponse;
  latestStatistics: Array<LatestStatistics>;
  liveBlockStats: EntityStats;
  liveMiningStats: EntityStats;
  liveUserStats: EntityStats;
  logs: LogResponse;
  memberById: Member;
  memberInOutRevenues: MemberInOutRevenueResponse;
  memberListById: MemberList;
  memberMe: Member;
  memberOverview: MemberOverview;
  memberStatistics: MemberStatisticsResponse;
  memberStatisticsWallets: MemberStatisticsWalletResponse;
  memberWallets: MemberWalletResponse;
  memberlists: MemberListResponse;
  members: MembersResponse;
  membersByCountry: Array<MembersByCountryItem>;
  newMemberCounts: Array<MinerCountStatsResponse>;
  notifications: NotificationResponse;
  onepointAwayMembers: MembersResponse;
  orderById: Order;
  orders: OrderResponse;
  packages: PackageResponse;
  paymentMethods: PaymentMethodResponse;
  payouts: PayoutResponse;
  placementMembers: Array<PlacementMember>;
  placementMembersForWeek: Array<WeekPlacementMember>;
  promos: PromoResponse;
  proofById: Proof;
  proofs: ProofResponse;
  recipientById: Recipient;
  recipients: RecipientResponse;
  revenueOverview: RevenueOverviewResponse;
  rewardsByWallets: RewardsByWallets;
  roleById: Role;
  roles: RoleResponse;
  saleById: Sale;
  saleBySID: Sale;
  sales: BasicSalesResponse;
  scheduleCampaigns: ScheduleCampaignResponse;
  settingByMemberId: Setting;
  statistics: StatisticsResponse;
  statisticsSales: StatisticsSaleResponse;
  teamCommissions: BasicWeeklyCommissionResponse;
  teamMembers: Array<Member>;
  topEarners: Array<TopEarnersResponse>;
  topRecruiters: Array<TopRecruitersResponse>;
  totalMemberCounts: Array<MinerCountStatsResponse>;
  transactions: TransactionResponse;
  txcShares: Array<TxcSharedResponse>;
  waitAddresses: WaitAddressResponse;
  weeklyCommissionById: WeeklyCommission;
  weeklyCommissions: BasicWeeklyCommissionResponse;
  weeklyReports: WeeklyReportResponse;
};


export type QueryWdmsVegasContestWinnersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAddressesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminNotesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAutoCampaignsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAverageMemberRewardArgs = {
  data: PeriodStatsArgs;
};


export type QueryBlocksArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlocksDataArgs = {
  data: PeriodStatsArgs;
};


export type QueryBugReportByIdArgs = {
  data: IdInput;
};


export type QueryBugReportsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCalculateProfitabilityArgs = {
  data: ProfitabilityCalculationInput;
};


export type QueryCampaignByIdArgs = {
  data: IdInput;
};


export type QueryCampaignsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckAddressWaitStatusArgs = {
  data: IdInput;
};


export type QueryCommissionByMemberIdAndWeekArgs = {
  data: WeeklyCommissionGetInput;
};


export type QueryCommissionByPeriodArgs = {
  data: PeriodStatsArgs;
};


export type QueryCommissionsByWeekArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  weekStartDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
};


export type QueryCountBelowMembersArgs = {
  data: IdInput;
};


export type QueryCountLeftMembersArgs = {
  data: IdInput;
};


export type QueryCountRightMembersArgs = {
  data: IdInput;
};


export type QueryDailyRewardsArgs = {
  from: Scalars['DateTimeISO']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['DateTimeISO']['input'];
};


export type QueryEmailByIdArgs = {
  data: IdInput;
};


export type QueryEmailTemplateByIdArgs = {
  data: IdInput;
};


export type QueryEmailTemplatesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEmailsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenerateCommissionSendmanyArgs = {
  data: TxcPriceInput;
};


export type QueryGroupSettingsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntroducersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInvoiceByIdArgs = {
  data: IdnInput;
};


export type QueryInvoicesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLiveBlockStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryLiveUserStatsArgs = {
  data: LiveStatsArgs;
};


export type QueryLogsArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  afterWhen?: InputMaybe<Scalars['DateTime']['input']>;
  beforeWhen?: InputMaybe<Scalars['DateTime']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  who?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberByIdArgs = {
  data: IdInput;
};


export type QueryMemberInOutRevenuesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberListByIdArgs = {
  data: IdInput;
};


export type QueryMemberOverviewArgs = {
  data: IdInput;
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


export type QueryMemberlistsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNewMemberCountsArgs = {
  data: PeriodStatsArgs;
};


export type QueryNotificationsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOnepointAwayMembersArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderByIdArgs = {
  data: IdnInput;
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPackagesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentMethodsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPayoutsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlacementMembersForWeekArgs = {
  data: WeekStartDateInput;
};


export type QueryPromosArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProofByIdArgs = {
  data: IdInput;
};


export type QueryProofsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRecipientByIdArgs = {
  data: IdInput;
};


export type QueryRecipientsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRewardsByWalletsArgs = {
  from: Scalars['DateTimeISO']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  to: Scalars['DateTimeISO']['input'];
};


export type QueryRoleByIdArgs = {
  data: IdInput;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySaleByIdArgs = {
  data: IdInput;
};


export type QuerySaleBySidArgs = {
  data: IdnInput;
};


export type QuerySalesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryScheduleCampaignsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySettingByMemberIdArgs = {
  data: IdInput;
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


export type QueryTeamCommissionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  teamReport: TeamReportSection;
};


export type QueryTotalMemberCountsArgs = {
  data: PeriodStatsArgs;
};


export type QueryTransactionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTxcSharesArgs = {
  data: PeriodStatsArgs;
};


export type QueryWaitAddressesArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWeeklyCommissionByIdArgs = {
  data: IdInput;
};


export type QueryWeeklyCommissionsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWeeklyReportsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type Recipient = {
  __typename?: 'Recipient';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Email>;
  emailId: Scalars['ID']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  isStarred: Scalars['Boolean']['output'];
  recipient?: Maybe<Member>;
  recipientId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type RecipientResponse = {
  __typename?: 'RecipientResponse';
  recipients?: Maybe<Array<Recipient>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type RefLink = {
  __typename?: 'RefLink';
  link: Scalars['String']['output'];
  linkType: Scalars['String']['output'];
};

export type ReferenceLink = {
  __typename?: 'ReferenceLink';
  link: Scalars['String']['output'];
};

export type ResetPasswordTokenInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RevenueOverviewResponse = {
  __typename?: 'RevenueOverviewResponse';
  revenue: Scalars['Float']['output'];
  spent?: Maybe<Array<RevenueSpentItem>>;
};

export type RevenueSpentItem = {
  __typename?: 'RevenueSpentItem';
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
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

export type Role = {
  __typename?: 'Role';
  commission: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Scalars['Int']['output'];
  sale: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type RoleResponse = {
  __typename?: 'RoleResponse';
  roles?: Maybe<Array<Role>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Sale = {
  __typename?: 'Sale';
  ID: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  isMetal: Scalars['Boolean']['output'];
  logs?: Maybe<Array<EntityLog>>;
  member?: Maybe<Member>;
  memberId: Scalars['ID']['output'];
  orderedAt: Scalars['DateTimeISO']['output'];
  package?: Maybe<Package>;
  packageId: Scalars['ID']['output'];
  paymentMethod: Scalars['String']['output'];
  proof?: Maybe<Proof>;
  sponsorCnt: Scalars['Float']['output'];
  statisticsSales?: Maybe<Array<StatisticsSale>>;
  status: Scalars['Boolean']['output'];
  toMember?: Maybe<Member>;
  toMemberId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};


export type SaleLogsArgs = {
  logsize?: Scalars['Float']['input'];
};

export type ScheduleCampaign = {
  __typename?: 'ScheduleCampaign';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  lastRun?: Maybe<Scalars['DateTime']['output']>;
  listExtra?: Maybe<Scalars['String']['output']>;
  listType: CampaignListType;
  nextRun: Scalars['DateTime']['output'];
  sender: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  subject: Scalars['String']['output'];
  template?: Maybe<EmailTemplate>;
  templateId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  when: Scalars['String']['output'];
};

export type ScheduleCampaignResponse = {
  __typename?: 'ScheduleCampaignResponse';
  scheduleCampaigns?: Maybe<Array<ScheduleCampaign>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Session = {
  __typename?: 'Session';
  accessToken?: Maybe<Scalars['String']['output']>;
  browser: Scalars['String']['output'];
  browserVersion: Scalars['String']['output'];
  device: Scalars['String']['output'];
  ipAddress: Scalars['String']['output'];
  os: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  userAgent: Scalars['String']['output'];
};

export type Setting = {
  __typename?: 'Setting';
  communication: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  memberId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type SignupFormInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  packageId: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  paymentMethod: Scalars['String']['input'];
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress: Scalars['String']['input'];
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorUserId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type SignupMemberResponse = {
  __typename?: 'SignupMemberResponse';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type Statistics = {
  __typename?: 'Statistics';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  from: Scalars['DateTimeISO']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  issuedAt: Scalars['DateTimeISO']['output'];
  memberStatistics?: Maybe<Array<MemberStatistics>>;
  newBlocks: Scalars['Float']['output'];
  statisticsSales?: Maybe<Array<StatisticsSale>>;
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
  statistics?: Maybe<Array<Statistics>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type StatisticsSale = {
  __typename?: 'StatisticsSale';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  frontActions?: Maybe<Array<FrontAction>>;
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
  statisticsSales?: Maybe<Array<StatisticsSale>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newEmailReceived: Email;
  newNotification: Notification;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  frontActions?: Maybe<Array<FrontAction>>;
  message?: Maybe<Scalars['String']['output']>;
  result: SuccessResult;
};

export enum SuccessResult {
  Failed = 'failed',
  Success = 'success'
}

export type TxcPriceInput = {
  txcPrice: Scalars['Float']['input'];
};

export type TxcSharedResponse = {
  __typename?: 'TXCSharedResponse';
  base: Scalars['String']['output'];
  baseDate: Scalars['DateTimeISO']['output'];
  txc: Scalars['Float']['output'];
};

export enum TeamReport {
  Credentials = 'CREDENTIALS',
  Left = 'LEFT',
  Referral = 'REFERRAL',
  Right = 'RIGHT'
}

export enum TeamReportSection {
  Left = 'LEFT',
  Referral = 'REFERRAL',
  Right = 'RIGHT'
}

export enum TeamStrategy {
  Balance = 'BALANCE',
  Left = 'LEFT',
  Manual = 'MANUAL',
  Right = 'RIGHT'
}

export type TokenInput = {
  token: Scalars['String']['input'];
};

export type TopEarnersResponse = {
  __typename?: 'TopEarnersResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  earned: Scalars['Float']['output'];
  fullName: Scalars['String']['output'];
};

export type TopRecruitersResponse = {
  __typename?: 'TopRecruitersResponse';
  avatar?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  totalIntroducers: Scalars['Float']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  balance: Scalars['BigInt']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  from: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  hash: Scalars['ID']['output'];
  to: Scalars['String']['output'];
  type: PaymentType;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  waitAddress?: Maybe<WaitAddress>;
  waitAddressId?: Maybe<Scalars['String']['output']>;
};

export type TransactionResponse = {
  __typename?: 'TransactionResponse';
  total?: Maybe<Scalars['Int']['output']>;
  transactions?: Maybe<Array<Transaction>>;
};

export type UpdateAdminInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdminNotesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateAdminPasswordByIdInput = {
  id: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateAdminPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateAutoCampaignInput = {
  approvedCommission?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  sender?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBugReportInput = {
  contact?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  who?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEmailTemplateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  templateID?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateGroupSettingInput = {
  groupSettingCommissionBonuses?: InputMaybe<Array<CreateGroupSettingCommissionBonusInput>>;
  id: Scalars['ID']['input'];
  limitDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rollSponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
  sponsorBonusPackageId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateInvoiceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  amountInCents?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Date']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  reflinks?: InputMaybe<Array<LinkInput>>;
  status?: InputMaybe<InvoiceStatusEnum>;
};

export type UpdateMemberInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionDefault?: InputMaybe<CommissionDefaultEnum>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isTexitRanger?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  placementParentId?: InputMaybe<Scalars['ID']['input']>;
  placementPosition?: InputMaybe<PlacementPosition>;
  placementRequested?: InputMaybe<Scalars['Boolean']['input']>;
  preferredContact?: InputMaybe<Scalars['String']['input']>;
  preferredContactDetail?: InputMaybe<Scalars['String']['input']>;
  primaryAddress?: InputMaybe<Scalars['String']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  sponsorId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  syncWithSendy?: InputMaybe<Scalars['Boolean']['input']>;
  teamReport?: InputMaybe<Array<TeamReport>>;
  teamStrategy?: InputMaybe<TeamStrategy>;
  username?: InputMaybe<Scalars['String']['input']>;
  wallets?: InputMaybe<Array<MemberWalletDataInput>>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberListInput = {
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
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
  enrollVisibility?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  point?: InputMaybe<Scalars['Float']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePaymentMethodInput = {
  defaultLink?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePromoInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProofByIdInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  mineLocation?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
  reflinks?: InputMaybe<Array<LinkInput>>;
  type?: InputMaybe<ProofType>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  commission?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Int']['input']>;
  sale?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSaleInput = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  isMetal?: InputMaybe<Scalars['Boolean']['input']>;
  memberId?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  orderedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  packageId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  reflinks?: InputMaybe<Array<LinkInput>>;
  sponsorCnt?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  toMemberId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateScheduleCampaignInput = {
  id: Scalars['ID']['input'];
  listExtra?: InputMaybe<Scalars['String']['input']>;
  listType?: InputMaybe<CampaignListType>;
  sender?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStatisticsInput = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
  transactionId?: InputMaybe<Scalars['ID']['input']>;
  txcShared?: InputMaybe<Scalars['Float']['input']>;
};

export type UpsertEmailInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertSettingInput = {
  communication?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VerificationCodeInput = {
  verificationCode: Scalars['String']['input'];
};

export type Verify2FaInput = {
  token: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type WdmsvegasContestWinner = {
  __typename?: 'WDMSVEGASContestWinner';
  fullName: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  sponsored: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type WdmsvegasContestWinnerResponse = {
  __typename?: 'WDMSVEGASContestWinnerResponse';
  total?: Maybe<Scalars['Int']['output']>;
  winners?: Maybe<Array<WdmsvegasContestWinner>>;
};

export type WaitAddress = {
  __typename?: 'WaitAddress';
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expiredAt: Scalars['DateTimeISO']['output'];
  fee: Scalars['BigInt']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  initBalance: Scalars['BigInt']['output'];
  initUnitPrice: Scalars['Float']['output'];
  order: Order;
  receivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  receivedBalance: Scalars['BigInt']['output'];
  status: WaitTransactionStatus;
  totalBalance: Scalars['BigInt']['output'];
  type: PaymentType;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type WaitAddressResponse = {
  __typename?: 'WaitAddressResponse';
  total?: Maybe<Scalars['Int']['output']>;
  waitAddresses?: Maybe<Array<WaitAddress>>;
};

export enum WaitTransactionStatus {
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Received = 'RECEIVED',
  Wait = 'WAIT'
}

export type WaitTransactionStatusResponse = {
  __typename?: 'WaitTransactionStatusResponse';
  status: WaitTransactionStatus;
};

export type WeekPlacementMember = {
  __typename?: 'WeekPlacementMember';
  commission: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxL: Scalars['Int']['output'];
  maxR: Scalars['Int']['output'];
  pkgL: Scalars['Int']['output'];
  pkgR: Scalars['Int']['output'];
  placementParentId: Scalars['ID']['output'];
  placementPosition: PlacementPosition;
  username: Scalars['String']['output'];
};

export type WeekStartDateInput = {
  weekStartDate: Scalars['Date']['input'];
};

export type WeeklyCommission = {
  __typename?: 'WeeklyCommission';
  ID: Scalars['Int']['output'];
  begL: Scalars['Float']['output'];
  begR: Scalars['Float']['output'];
  cash: Scalars['Int']['output'];
  commission: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endL: Scalars['Float']['output'];
  endR: Scalars['Float']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  maxL: Scalars['Float']['output'];
  maxR: Scalars['Float']['output'];
  member?: Maybe<Member>;
  memberId: Scalars['ID']['output'];
  newL: Scalars['Float']['output'];
  newR: Scalars['Float']['output'];
  pkgL: Scalars['Float']['output'];
  pkgR: Scalars['Float']['output'];
  proof?: Maybe<Proof>;
  qualified: Scalars['Boolean']['output'];
  shortNote?: Maybe<Scalars['String']['output']>;
  status: ConfirmationStatus;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export type WeeklyCommissionGetInput = {
  memberId: Scalars['ID']['input'];
  weekStartDate: Scalars['DateTimeISO']['input'];
};

export type WeeklyCommissionNoteInput = {
  id: Scalars['ID']['input'];
  shortNote?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyCommissionUpdateInput = {
  autoCreate?: InputMaybe<Scalars['Boolean']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  reflinks?: InputMaybe<Array<LinkInput>>;
  shortNote?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ConfirmationStatus>;
};

export type WeeklyCommissionsStatusUpdateInput = {
  ids: Array<Scalars['ID']['input']>;
  status: ConfirmationStatus;
};

export type WeeklyReport = {
  __typename?: 'WeeklyReport';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  file: PFile;
  fileId: Scalars['String']['output'];
  frontActions?: Maybe<Array<FrontAction>>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  weekStartDate: Scalars['DateTimeISO']['output'];
};

export type WeeklyReportResponse = {
  __typename?: 'WeeklyReportResponse';
  total?: Maybe<Scalars['Int']['output']>;
  weeklyReports?: Maybe<Array<WeeklyReport>>;
};

export type GenerateReferenceLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateReferenceLinkQuery = { __typename?: 'Query', generateReferenceLink: { __typename?: 'ReferenceLink', link: string } };

export type ResetTokenVerifyMutationVariables = Exact<{
  data: TokenInput;
}>;


export type ResetTokenVerifyMutation = { __typename?: 'Mutation', resetTokenVerify: { __typename?: 'VerifyTokenResponse', email: string, token: string } };

export type CreateBugReportMutationVariables = Exact<{
  data: CreateBugReportInput;
}>;


export type CreateBugReportMutation = { __typename?: 'Mutation', createBugReport: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type CalculateProfitabilityQueryVariables = Exact<{
  data: ProfitabilityCalculationInput;
}>;


export type CalculateProfitabilityQuery = { __typename?: 'Query', calculateProfitability: { __typename?: 'ProfitabilityCalculationResponse', startDate: any, target: number, init: number, period: number, txc: number, txcCost: number, extraTXC: number, endDate: any, txcPrice: number } };

export type WeeklyCommissionsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type WeeklyCommissionsQuery = { __typename?: 'Query', weeklyCommissions: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null, weeklyCommissions?: Array<{ __typename?: 'BasicWeeklyCommission', id: string, ID: number, begL: number, begR: number, newL: number, newR: number, maxL: number, maxR: number, endL: number, endR: number, pkgL: number, pkgR: number, note?: string | null, status: ConfirmationStatus, username: string, fullName: string, memberId: string, createdAt: any, shortNote?: string | null, commission: number, weekStartDate: any, commissionDefault: CommissionDefaultEnum }> | null } };

export type FetchCommissionStatsQueryVariables = Exact<{
  allFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  pendingFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  declineFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  sentFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchCommissionStatsQuery = { __typename?: 'Query', all: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, pending: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, decline: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, sent: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null } };

export type EmailsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type EmailsQuery = { __typename?: 'Query', emails: { __typename?: 'EmailResponse', total?: number | null, emails?: Array<{ __typename?: 'Email', id: string, to: string, body: string, subject: string, isDraft: boolean, senderId: string, isDeleted: boolean, updatedAt?: any | null, sender?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null, files?: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, originalName: string }> | null }> | null } };

export type RecipientsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type RecipientsQuery = { __typename?: 'Query', recipients: { __typename?: 'RecipientResponse', total?: number | null, recipients?: Array<{ __typename?: 'Recipient', updatedAt?: any | null, id: string, emailId: string, recipientId: string, isRead: boolean, isDeleted: boolean, isStarred: boolean, email?: { __typename?: 'Email', id: string, to: string, body: string, subject: string, isDraft: boolean, senderId: string, isDeleted: boolean, updatedAt?: any | null, sender?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null, files?: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, originalName: string }> | null } | null, recipient?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null }> | null } };

export type TeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamMembersQuery = { __typename?: 'Query', teamMembers: Array<{ __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number }> };

export type EmailByIdQueryVariables = Exact<{
  data: IdInput;
}>;


export type EmailByIdQuery = { __typename?: 'Query', emailById: { __typename?: 'Email', id: string, to: string, body: string, subject: string, isDraft: boolean, senderId: string, isDeleted: boolean, updatedAt?: any | null, sender?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null, files?: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, originalName: string }> | null } };

export type RecipientByIdQueryVariables = Exact<{
  data: IdInput;
}>;


export type RecipientByIdQuery = { __typename?: 'Query', recipientById: { __typename?: 'Recipient', createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, id: string, emailId: string, recipientId: string, isRead: boolean, isDeleted: boolean, isStarred: boolean, email?: { __typename?: 'Email', id: string, to: string, body: string, subject: string, isDraft: boolean, senderId: string, isDeleted: boolean, updatedAt?: any | null, sender?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null, files?: Array<{ __typename?: 'PFile', id: string, url: string, size: number, mimeType: string, originalName: string }> | null } | null, recipient?: { __typename?: 'Member', id: string, email: string, point: number, mobile: string, status: boolean, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, isTexitRanger: boolean, emailVerified: boolean, primaryAddress: string, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number } | null } };

export type UpsertEmailMutationVariables = Exact<{
  data: UpsertEmailInput;
}>;


export type UpsertEmailMutation = { __typename?: 'Mutation', upsertEmail: { __typename?: 'Email', id: string } };

export type RemoveEmailMutationVariables = Exact<{
  data: IdInput;
}>;


export type RemoveEmailMutation = { __typename?: 'Mutation', removeEmail: { __typename?: 'Email', id: string } };

export type SendEmailMutationVariables = Exact<{
  data: IdInput;
}>;


export type SendEmailMutation = { __typename?: 'Mutation', sendEmail: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type SetRecipientStatusMutationVariables = Exact<{
  data: EmailStatusInput;
}>;


export type SetRecipientStatusMutation = { __typename?: 'Mutation', setRecipientStatus: { __typename?: 'Recipient', id: string } };

export type MoveEmailToTrashMutationVariables = Exact<{
  data: IdInput;
}>;


export type MoveEmailToTrashMutation = { __typename?: 'Mutation', moveEmailToTrash: { __typename?: 'Email', id: string } };

export type NotificationsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type NotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'NotificationResponse', total?: number | null, notifications?: Array<{ __typename?: 'NotificationClient', id: string, read: boolean, level: NotificationLevel, message: string, createdAt?: any | null, updatedAt?: any | null }> | null } };

export type SetReadNotificationMutationVariables = Exact<{
  data: IdInput;
}>;


export type SetReadNotificationMutation = { __typename?: 'Mutation', setReadNotification: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type SetReadAllNotificationsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetReadAllNotificationsMutation = { __typename?: 'Mutation', setReadAllNotifications: { __typename?: 'ManySuccessResponse', count: number } };

export type NewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewNotificationSubscription = { __typename?: 'Subscription', newNotification: { __typename?: 'Notification', id: string, level: NotificationLevel, message: string, createdAt?: any | null, updatedAt?: any | null } };

export type PaymentMethodsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PaymentMethodsQuery = { __typename?: 'Query', paymentMethods: { __typename?: 'PaymentMethodResponse', total?: number | null, paymentMethods?: Array<{ __typename?: 'PaymentMethod', id: string, name: string, visible: boolean, createdAt?: any | null }> | null } };

export type FetchMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMeQuery = { __typename?: 'Query', memberMe: { __typename?: 'Member', id: string, ID?: number | null, city?: string | null, email: string, point: number, state?: string | null, avatar?: string | null, mobile: string, status: boolean, assetId?: string | null, country?: string | null, zipCode?: string | null, username: string, fullName: string, sponsorId?: string | null, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, syncWithSendy: boolean, emailVerified: boolean, isTexitRanger: boolean, primaryAddress: string, secondaryAddress?: string | null, totalIntroducers: number, preferredContact?: string | null, commissionDefault: CommissionDefaultEnum, placementParentId?: string | null, placementPosition: PlacementPosition, cmnCalculatedWeeks: number, placementRequested: boolean, preferredContactDetail?: string | null, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, groupSetting?: { __typename?: 'BasicGroupSetting', id: string, name: string, commissionDefaults: Array<CommissionDefaultEnum> } | null, commission?: { __typename?: 'CommissionStatus', begL: number, begR: number, newL: number, newR: number } | null, sponsor?: { __typename?: 'Member', id: string, ID?: number | null, email: string, point: number, state?: string | null, status: boolean, mobile: string, assetId?: string | null, country?: string | null, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, emailVerified: boolean, syncWithSendy: boolean, isTexitRanger: boolean, primaryAddress: string, secondaryAddress?: string | null, totalIntroducers: number, preferredContact?: string | null, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number, preferredContactDetail?: string | null } | null, placementParent?: { __typename?: 'Member', id: string, ID?: number | null, email: string, point: number, state?: string | null, status: boolean, mobile: string, assetId?: string | null, country?: string | null, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, isTexitRanger: boolean, emailVerified: boolean, syncWithSendy: boolean, primaryAddress: string, secondaryAddress?: string | null, totalIntroducers: number, preferredContact?: string | null, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number, preferredContactDetail?: string | null } | null, placementChildren?: Array<{ __typename?: 'Member', id: string, ID?: number | null, email: string, point: number, mobile: string, status: boolean, assetId?: string | null, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, emailVerified: boolean, syncWithSendy: boolean, isTexitRanger: boolean, primaryAddress: string, secondaryAddress?: string | null, preferredContact?: string | null, totalIntroducers: number, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, placementRequested: boolean, cmnCalculatedWeeks: number, preferredContactDetail?: string | null }> | null, sales?: Array<{ __typename?: 'Sale', id: string, ID: number, status: boolean, isMetal: boolean, memberId: string, packageId: string, orderedAt: any, sponsorCnt: number, paymentMethod: string }> | null, memberWallets?: Array<{ __typename?: 'MemberWallet', id: string, note?: string | null, address: string, percent: number, memberId: string, payoutId: string, isDefault: boolean, payout?: { __typename?: 'Payout', id: string, method: string, status: boolean, name: string, display: string } | null }> | null, communications?: Array<{ __typename?: 'CampaignMember', open: boolean, sent: boolean, body?: string | null, email: string, sender: string, subject?: string | null, openTime?: any | null, sentTime?: any | null }> | null, setting?: { __typename?: 'Setting', id: string, memberId: string, communication: boolean } | null } };

export type FetchMemberStatsQueryVariables = Exact<{
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatsQuery = { __typename?: 'Query', all: { __typename?: 'MembersResponse', total?: number | null }, inactive: { __typename?: 'MembersResponse', total?: number | null } };

export type FetchMembersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchMembersQuery = { __typename?: 'Query', members: { __typename?: 'MembersResponse', total?: number | null, members?: Array<{ __typename?: 'Member', id: string, username: string }> | null } };

export type FetchPlacementMembersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchPlacementMembersQuery = { __typename?: 'Query', members: { __typename?: 'MembersResponse', total?: number | null, members?: Array<{ __typename?: 'Member', id: string, username: string, fullName: string, createdAt?: any | null, sponsor?: { __typename?: 'Member', id: string } | null }> | null } };

export type PlacementMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlacementMembersQuery = { __typename?: 'Query', placementMembers: Array<{ __typename?: 'PlacementMember', id: string, username: string, fullName: string, createdAt: any, teamStrategy: TeamStrategy, placementPosition: PlacementPosition, placementParentId: string, cmnCalculatedWeeks: number, commission: { __typename?: 'CommissionStatus', begL: number, begR: number, newL: number, newR: number } }> };

export type UpdateMemberMutationVariables = Exact<{
  data: UpdateMemberInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember: { __typename?: 'Member', id: string, mobile: string, primaryAddress: string, secondaryAddress?: string | null, assetId?: string | null, memberWallets?: Array<{ __typename?: 'MemberWallet', id: string, address: string, percent: number, memberId: string, payoutId: string, payout?: { __typename?: 'Payout', method: string, display: string } | null }> | null } };

export type MemberOverviewQueryVariables = Exact<{
  data: IdInput;
}>;


export type MemberOverviewQuery = { __typename?: 'Query', memberOverview: { __typename?: 'MemberOverview', point: number, joinDate: any, totalTXCShared: any, currentHashPower: number, cashCommissionPotential: number } };

export type MemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type MemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', issuedAt: any, hashPower: number, txcShared: any }> | null } };

export type PayoutsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type PayoutsQuery = { __typename?: 'Query', payouts: { __typename?: 'PayoutResponse', total?: number | null, payouts?: Array<{ __typename?: 'Payout', id: string, method: string, display: string, name: string, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> | null } };

export type UpdatePasswordMemberMutationVariables = Exact<{
  data: UpdateMemberPasswordInput;
}>;


export type UpdatePasswordMemberMutation = { __typename?: 'Mutation', updatePasswordMember: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type GenerateQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateQueryQuery = { __typename?: 'Query', generate2FA: string };

export type Verify2FaAndEnableMutationVariables = Exact<{
  data: Verify2FaInput;
}>;


export type Verify2FaAndEnableMutation = { __typename?: 'Mutation', verify2FAAndEnable: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type Verify2FaTokenMutationVariables = Exact<{
  data: TokenInput;
}>;


export type Verify2FaTokenMutation = { __typename?: 'Mutation', verify2FAToken: { __typename?: 'LoginResponse', accessToken: string, status: LoginResult } };

export type Disable2FaMutationVariables = Exact<{ [key: string]: never; }>;


export type Disable2FaMutation = { __typename?: 'Mutation', disable2FA: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type UpsertSettingByMemberIdMutationVariables = Exact<{
  data: UpsertSettingInput;
}>;


export type UpsertSettingByMemberIdMutation = { __typename?: 'Mutation', upsertSettingByMemberId: { __typename?: 'Setting', id: string } };

export type MemberLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type MemberLogoutMutation = { __typename?: 'Mutation', memberLogout: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type MemberExchangeLoginMutationVariables = Exact<{
  data: MemberLoginInput;
}>;


export type MemberExchangeLoginMutation = { __typename?: 'Mutation', memberExchangeLogin: { __typename?: 'LoginResponse', status: LoginResult, accessToken: string, passwordExpired: boolean } };

export type EmailVerifyCodeMutationVariables = Exact<{
  data: VerificationCodeInput;
}>;


export type EmailVerifyCodeMutation = { __typename?: 'Mutation', emailVerifyCode: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type ResetPasswordRequestMutationVariables = Exact<{
  data: EmailInput;
}>;


export type ResetPasswordRequestMutation = { __typename?: 'Mutation', resetPasswordRequest: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type ResetPasswordByTokenMutationVariables = Exact<{
  data: ResetPasswordTokenInput;
}>;


export type ResetPasswordByTokenMutation = { __typename?: 'Mutation', resetPasswordByToken: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type RewardQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type RewardQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, to: any, from: any, status: boolean, issuedAt: any, txcShared: any, newBlocks: number, totalBlocks: number, totalMembers: number, totalHashPower: number, statisticsSales?: Array<{ __typename?: 'StatisticsSale', id: string, saleId: string, issuedAt: any }> | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', txcShared: any, memberStatisticsWallets?: Array<{ __typename?: 'MemberStatisticsWallet', id: string }> | null }> | null }> | null } };

export type FetchMemberStatisticsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', id: string, percent: number, issuedAt: any, memberId: string, txcShared: any, hashPower: number, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, statisticsId: string, member?: { __typename?: 'Member', id: string, ID?: number | null, email: string, state?: string | null, point: number, mobile: string, status: boolean, assetId?: string | null, username: string, fullName: string, allowState: MemberState, teamReport: Array<TeamReport>, OTPEnabled: boolean, teamStrategy: TeamStrategy, emailVerified: boolean, syncWithSendy: boolean, isTexitRanger: boolean, primaryAddress: string, secondaryAddress?: string | null, totalIntroducers: number, preferredContact?: string | null, commissionDefault: CommissionDefaultEnum, placementPosition: PlacementPosition, cmnCalculatedWeeks: number, placementRequested: boolean, preferredContactDetail?: string | null, commission?: { __typename?: 'CommissionStatus', begL: number, begR: number, newL: number, newR: number } | null, memberWallets?: Array<{ __typename?: 'MemberWallet', id: string, address: string, percent: number, memberId: string, payoutId: string, isDefault: boolean, payout?: { __typename?: 'Payout', id: string, name: string, method: string, status: boolean, display: string } | null }> | null } | null, statistics?: { __typename?: 'Statistics', id: string, to: any, from: any, status: boolean, issuedAt: any, txcShared: any, newBlocks: number, totalBlocks: number, totalMembers: number, totalHashPower: number } | null }> | null } };

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


export type MemberStatisticsWalletsQuery = { __typename?: 'Query', memberStatisticsWallets: { __typename?: 'MemberStatisticsWalletResponse', memberStatisticsWallets?: Array<{ __typename?: 'MemberStatisticsWallet', id: string, txc: any, issuedAt: any, memberWallet?: { __typename?: 'MemberWallet', address: string } | null, memberStatistic?: { __typename?: 'MemberStatistics', hashPower: number, percent: number, txcShared: any } | null }> | null } };

export type SalesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type SalesQuery = { __typename?: 'Query', sales: { __typename?: 'BasicSalesResponse', total?: number | null, sales?: Array<{ __typename?: 'BasicSale', id: string, ID: number, email: string, token: number, point: number, amount: number, status: boolean, isMetal: boolean, toEmail?: string | null, assetId?: string | null, memberId: string, username: string, fullName: string, orderedAt: any, createdAt: any, sponsorCnt: number, toMemberId?: string | null, toUsername?: string | null, toFullName?: string | null, productName: string, paymentMethod: string }> | null } };

export type FetchSaleStatsQueryVariables = Exact<{
  allFilter?: InputMaybe<Scalars['JSONObject']['input']>;
  inactiveFilter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type FetchSaleStatsQuery = { __typename?: 'Query', all: { __typename?: 'BasicSalesResponse', total?: number | null }, inactive: { __typename?: 'BasicSalesResponse', total?: number | null } };

export type PackagesQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PackagesQuery = { __typename?: 'Query', packages: { __typename?: 'PackageResponse', total?: number | null, packages?: Array<{ __typename?: 'Package', id: string, date: any, token: number, point: number, amount: number, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, productName: string, enrollVisibility: boolean }> | null } };

export type CheckAddressWaitStatusQueryVariables = Exact<{
  data: IdInput;
}>;


export type CheckAddressWaitStatusQuery = { __typename?: 'Query', checkAddressWaitStatus: { __typename?: 'WaitTransactionStatusResponse', status: WaitTransactionStatus } };

export type CreateOrderMutationVariables = Exact<{
  data: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: number, waitAddressId: string, waitAddress?: { __typename?: 'WaitAddress', id: string, address: string, totalBalance: any } | null } };

export type CreateSignUpOrderMutationVariables = Exact<{
  data: CreateSignUpOrderInput;
}>;


export type CreateSignUpOrderMutation = { __typename?: 'Mutation', createSignUpOrder: { __typename?: 'Order', id: number, waitAddressId: string, waitAddress?: { __typename?: 'WaitAddress', id: string, address: string, totalBalance: any } | null } };

export type CompleteOrderMutationVariables = Exact<{
  data: CompleteOrderInput;
}>;


export type CompleteOrderMutation = { __typename?: 'Mutation', completeOrder: { __typename?: 'OrderStatusResponse', status: OrderStatus } };

export type CancelOrderMutationVariables = Exact<{
  data: IdnInput;
}>;


export type CancelOrderMutation = { __typename?: 'Mutation', cancelOrder: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type LoginMutationVariables = Exact<{
  data: MemberLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', memberLogin: { __typename?: 'LoginResponse', status: LoginResult, accessToken: string, passwordExpired: boolean } };

export type SignUpMemberMutationVariables = Exact<{
  data: SignupFormInput;
}>;


export type SignUpMemberMutation = { __typename?: 'Mutation', signUpMember: { __typename?: 'SignupMemberResponse', id: string, email: string, username: string } };

export type SendEmailVerificationCodeMutationVariables = Exact<{ [key: string]: never; }>;


export type SendEmailVerificationCodeMutation = { __typename?: 'Mutation', sendEmailVerificationCode: { __typename?: 'SuccessResponse', message?: string | null, result: SuccessResult } };

export type SendEmailVerificationLinkMutationVariables = Exact<{
  data: EmailInput;
}>;


export type SendEmailVerificationLinkMutation = { __typename?: 'Mutation', sendEmailVerificationLink: { __typename?: 'SuccessResponse', result: SuccessResult, message?: string | null } };

export type EmailVerifyMutationVariables = Exact<{
  data: TokenInput;
}>;


export type EmailVerifyMutation = { __typename?: 'Mutation', emailVerify: { __typename?: 'EmailVerifyResult', result: SuccessResult, message?: string | null, packageID?: number | null, paymentMethod?: string | null } };

export type PromosQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type PromosQuery = { __typename?: 'Query', promos: { __typename?: 'PromoResponse', total?: number | null, promos?: Array<{ __typename?: 'Promo', id: string, code: string, status: boolean, endDate: any, startDate: any, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, description: string }> | null } };

export type QueryQueryVariables = Exact<{
  data: LiveStatsArgs;
}>;


export type QueryQuery = { __typename?: 'Query', liveBlockStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveMiningStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> }, liveUserStats: { __typename?: 'EntityStats', meta?: number | null, total: number, dailyData: Array<{ __typename?: 'DailyStats', count: number, field: string }> } };

export type BlocksQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlocksQuery = { __typename?: 'Query', blocks: { __typename?: 'BlocksResponse', total?: number | null, blocks?: Array<{ __typename?: 'Block', id: string, blockNo: number, hashRate: number, difficulty: number, issuedAt: any, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> | null } };

export type StatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type StatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> | null } };

export type TxcMemberStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type TxcMemberStatisticsQuery = { __typename?: 'Query', memberStatistics: { __typename?: 'MemberStatisticsResponse', total?: number | null, memberStatistics?: Array<{ __typename?: 'MemberStatistics', id: string, hashPower: number, txcShared: any, issuedAt: any, percent: number, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null, member?: { __typename?: 'Member', username: string, email: string, assetId?: string | null } | null, statistics?: { __typename?: 'Statistics', newBlocks: number, status: boolean } | null }> | null } };

export type HistoryStatisticsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type HistoryStatisticsQuery = { __typename?: 'Query', statistics: { __typename?: 'StatisticsResponse', total?: number | null, statistics?: Array<{ __typename?: 'Statistics', id: string, totalHashPower: number, newBlocks: number, totalBlocks: number, totalMembers: number, txcShared: any, issuedAt: any, from: any, to: any, status: boolean, createdAt?: any | null, updatedAt?: any | null, deletedAt?: any | null }> | null } };

export type BlocksDataQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type BlocksDataQuery = { __typename?: 'Query', blocksData: Array<{ __typename?: 'BlockStatsResponse', hashRate: number, difficulty: number, base: string, baseDate?: any | null, soldHashPower: number }> };

export type NewMemberCountsQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type NewMemberCountsQuery = { __typename?: 'Query', newMemberCounts: Array<{ __typename?: 'MinerCountStatsResponse', base: string, baseDate: any, minerCount: number }> };

export type AverageMemberRewardQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type AverageMemberRewardQuery = { __typename?: 'Query', averageMemberReward: Array<{ __typename?: 'AverageMinerRewardStatsResponse', base: string, baseDate: any, reward: number }> };

export type CommissionByPeriodQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type CommissionByPeriodQuery = { __typename?: 'Query', commissionByPeriod: Array<{ __typename?: 'CommissionPeriodResponse', base: string, baseDate: any, commission: number, revenue: number }> };

export type RevenueOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type RevenueOverviewQuery = { __typename?: 'Query', revenueOverview: { __typename?: 'RevenueOverviewResponse', revenue: number, spent?: Array<{ __typename?: 'RevenueSpentItem', label: string, value: number }> | null } };

export type TotalMemberCountsQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type TotalMemberCountsQuery = { __typename?: 'Query', totalMemberCounts: Array<{ __typename?: 'MinerCountStatsResponse', base: string, baseDate: any, minerCount: number }> };

export type LatestStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestStatisticsQuery = { __typename?: 'Query', latestStatistics: Array<{ __typename?: 'LatestStatistics', id: string, newBlocks: number, totalMembers: number, txcShared: number, issuedAt: any }> };

export type TxcSharesQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type TxcSharesQuery = { __typename?: 'Query', txcShares: Array<{ __typename?: 'TXCSharedResponse', base: string, baseDate: any, txc: number }> };

export type TopEarnersQueryVariables = Exact<{ [key: string]: never; }>;


export type TopEarnersQuery = { __typename?: 'Query', topEarners: Array<{ __typename?: 'TopEarnersResponse', avatar?: string | null, earned: number, fullName: string }> };

export type TopRecruitersQueryVariables = Exact<{ [key: string]: never; }>;


export type TopRecruitersQuery = { __typename?: 'Query', topRecruiters: Array<{ __typename?: 'TopRecruitersResponse', avatar?: string | null, fullName: string, totalIntroducers: number }> };

export type MembersByCountryQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersByCountryQuery = { __typename?: 'Query', membersByCountry: Array<{ __typename?: 'MembersByCountryItem', country: string, memberCount: number }> };

export type FetchTeamCommissionStatsQueryVariables = Exact<{
  leftFilter: TeamReportSection;
  rightFilter: TeamReportSection;
  referralFilter: TeamReportSection;
}>;


export type FetchTeamCommissionStatsQuery = { __typename?: 'Query', LEFT: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, RIGHT: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null }, REFERRAL: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null } };

export type TeamCommissionsQueryVariables = Exact<{
  teamReport: TeamReportSection;
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type TeamCommissionsQuery = { __typename?: 'Query', teamCommissions: { __typename?: 'BasicWeeklyCommissionResponse', total?: number | null, weeklyCommissions?: Array<{ __typename?: 'BasicWeeklyCommission', id: string, ID: number, begL: number, begR: number, newL: number, newR: number, maxL: number, maxR: number, endL: number, endR: number, pkgL: number, pkgR: number, note?: string | null, status: ConfirmationStatus, username: string, fullName: string, memberId: string, createdAt: any, shortNote?: string | null, commission: number, weekStartDate: any, commissionDefault: CommissionDefaultEnum }> | null } };

export type IntroducersQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type IntroducersQuery = { __typename?: 'Query', introducers: { __typename?: 'IntroducersResponse', total?: number | null, introducers?: Array<{ __typename?: 'Introducer', id: string, ID: number, email: string, point: number, mobile: string, username: string, fullName: string, createdAt: any }> | null } };

export type SponsorsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSONObject']['input']>;
}>;


export type SponsorsQuery = { __typename?: 'Query', introducers: { __typename?: 'IntroducersResponse', total?: number | null, introducers?: Array<{ __typename?: 'Introducer', id: string, ID: number, point: number, username: string, fullName: string, createdAt: any }> | null } };

export type BlocksdataQueryVariables = Exact<{
  data: PeriodStatsArgs;
}>;


export type BlocksdataQuery = { __typename?: 'Query', blocksData: Array<{ __typename?: 'BlockStatsResponse', base: string, difficulty: number, hashRate: number }> };


export const GenerateReferenceLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GenerateReferenceLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateReferenceLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]} as unknown as DocumentNode<GenerateReferenceLinkQuery, GenerateReferenceLinkQueryVariables>;
export const ResetTokenVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetTokenVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetTokenVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ResetTokenVerifyMutation, ResetTokenVerifyMutationVariables>;
export const CreateBugReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBugReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBugReportInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBugReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<CreateBugReportMutation, CreateBugReportMutationVariables>;
export const CalculateProfitabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CalculateProfitability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfitabilityCalculationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calculateProfitability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"init"}},{"kind":"Field","name":{"kind":"Name","value":"period"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"txcCost"}},{"kind":"Field","name":{"kind":"Name","value":"extraTXC"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"txcPrice"}}]}}]}}]} as unknown as DocumentNode<CalculateProfitabilityQuery, CalculateProfitabilityQueryVariables>;
export const WeeklyCommissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WeeklyCommissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}},{"kind":"Field","name":{"kind":"Name","value":"maxL"}},{"kind":"Field","name":{"kind":"Name","value":"maxR"}},{"kind":"Field","name":{"kind":"Name","value":"endL"}},{"kind":"Field","name":{"kind":"Name","value":"endR"}},{"kind":"Field","name":{"kind":"Name","value":"pkgL"}},{"kind":"Field","name":{"kind":"Name","value":"pkgR"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shortNote"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"weekStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<WeeklyCommissionsQuery, WeeklyCommissionsQueryVariables>;
export const FetchCommissionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCommissionStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pendingFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"declineFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sentFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pending"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pendingFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"decline"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"declineFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sent"},"name":{"kind":"Name","value":"weeklyCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sentFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchCommissionStatsQuery, FetchCommissionStatsQueryVariables>;
export const EmailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Emails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<EmailsQuery, EmailsQueryVariables>;
export const RecipientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recipients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"recipientId"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<RecipientsQuery, RecipientsQueryVariables>;
export const TeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}}]}}]} as unknown as DocumentNode<TeamMembersQuery, TeamMembersQueryVariables>;
export const EmailByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmailById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}}]}}]} as unknown as DocumentNode<EmailByIdQuery, EmailByIdQueryVariables>;
export const RecipientByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecipientById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipientById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"recipientId"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isStarred"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"isDraft"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}}]}}]}}]}}]} as unknown as DocumentNode<RecipientByIdQuery, RecipientByIdQueryVariables>;
export const UpsertEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertEmailMutation, UpsertEmailMutationVariables>;
export const RemoveEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveEmailMutation, RemoveEmailMutationVariables>;
export const SendEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<SendEmailMutation, SendEmailMutationVariables>;
export const SetRecipientStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetRecipientStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailStatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setRecipientStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SetRecipientStatusMutation, SetRecipientStatusMutationVariables>;
export const MoveEmailToTrashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveEmailToTrash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveEmailToTrash"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MoveEmailToTrashMutation, MoveEmailToTrashMutationVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;
export const SetReadNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetReadNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setReadNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<SetReadNotificationMutation, SetReadNotificationMutationVariables>;
export const SetReadAllNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetReadAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setReadAllNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<SetReadAllNotificationsMutation, SetReadAllNotificationsMutationVariables>;
export const NewNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewNotification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newNotification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<NewNotificationSubscription, NewNotificationSubscriptionVariables>;
export const PaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaymentMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PaymentMethodsQuery, PaymentMethodsQueryVariables>;
export const FetchMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorId"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}},{"kind":"Field","name":{"kind":"Name","value":"groupSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefaults"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placementParent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placementChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isMetal"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorCnt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"communications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"open"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"openTime"}},{"kind":"Field","name":{"kind":"Name","value":"sentTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"communication"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<FetchMeQuery, FetchMeQueryVariables>;
export const FetchMemberStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatsQuery, FetchMemberStatsQueryVariables>;
export const FetchMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMembersQuery, FetchMembersQueryVariables>;
export const FetchPlacementMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchPlacementMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchPlacementMembersQuery, FetchPlacementMembersQueryVariables>;
export const PlacementMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacementMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placementMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"placementParentId"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}}]}}]}}]} as unknown as DocumentNode<PlacementMembersQuery, PlacementMembersQueryVariables>;
export const UpdateMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]} as unknown as DocumentNode<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const MemberOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberOverview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberOverview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"totalTXCShared"}},{"kind":"Field","name":{"kind":"Name","value":"currentHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"cashCommissionPotential"}}]}}]}}]} as unknown as DocumentNode<MemberOverviewQuery, MemberOverviewQueryVariables>;
export const MemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsQuery, MemberStatisticsQueryVariables>;
export const PayoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Payouts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payouts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PayoutsQuery, PayoutsQueryVariables>;
export const UpdatePasswordMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePasswordMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePasswordMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMemberMutation, UpdatePasswordMemberMutationVariables>;
export const GenerateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"generateQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generate2FA"}}]}}]} as unknown as DocumentNode<GenerateQueryQuery, GenerateQueryQueryVariables>;
export const Verify2FaAndEnableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify2FAAndEnable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Verify2FAInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify2FAAndEnable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Verify2FaAndEnableMutation, Verify2FaAndEnableMutationVariables>;
export const Verify2FaTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Verify2FAToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verify2FAToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<Verify2FaTokenMutation, Verify2FaTokenMutationVariables>;
export const Disable2FaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Disable2FA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disable2FA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<Disable2FaMutation, Disable2FaMutationVariables>;
export const UpsertSettingByMemberIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertSettingByMemberId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertSettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertSettingByMemberId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertSettingByMemberIdMutation, UpsertSettingByMemberIdMutationVariables>;
export const MemberLogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MemberLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberLogout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MemberLogoutMutation, MemberLogoutMutationVariables>;
export const MemberExchangeLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MemberExchangeLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberExchangeLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"passwordExpired"}}]}}]}}]} as unknown as DocumentNode<MemberExchangeLoginMutation, MemberExchangeLoginMutationVariables>;
export const EmailVerifyCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EmailVerifyCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerificationCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailVerifyCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<EmailVerifyCodeMutation, EmailVerifyCodeMutationVariables>;
export const ResetPasswordRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordRequestMutation, ResetPasswordRequestMutationVariables>;
export const ResetPasswordByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPasswordByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPasswordByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordByTokenMutation, ResetPasswordByTokenMutationVariables>;
export const RewardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Reward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsSales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"saleId"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<RewardQuery, RewardQueryVariables>;
export const FetchMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"statisticsId"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"allowState"}},{"kind":"Field","name":{"kind":"Name","value":"teamReport"}},{"kind":"Field","name":{"kind":"Name","value":"OTPEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"teamStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"syncWithSendy"}},{"kind":"Field","name":{"kind":"Name","value":"isTexitRanger"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryAddress"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContact"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}},{"kind":"Field","name":{"kind":"Name","value":"placementPosition"}},{"kind":"Field","name":{"kind":"Name","value":"cmnCalculatedWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"placementRequested"}},{"kind":"Field","name":{"kind":"Name","value":"preferredContactDetail"}},{"kind":"Field","name":{"kind":"Name","value":"commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"payoutId"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchMemberStatisticsQuery, FetchMemberStatisticsQueryVariables>;
export const CreateStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}}]}}]}}]} as unknown as DocumentNode<CreateStatisticsMutation, CreateStatisticsMutationVariables>;
export const CreateManyMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateManyMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyMemberStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createManyMemberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateManyMemberStatisticsMutation, CreateManyMemberStatisticsMutationVariables>;
export const UpdateStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStatisticsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}}]}}]} as unknown as DocumentNode<UpdateStatisticsMutation, UpdateStatisticsMutationVariables>;
export const RemoveMemberStatisticsByStaitisIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMemberStatisticsByStaitisId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMemberStatisticsByStaitisId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<RemoveMemberStatisticsByStaitisIdMutation, RemoveMemberStatisticsByStaitisIdMutationVariables>;
export const RemoveManyStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveManyStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeManyStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<RemoveManyStatisticsMutation, RemoveManyStatisticsMutationVariables>;
export const RewardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Rewards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsByWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RewardsQuery, RewardsQueryVariables>;
export const DailyRewardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DailyRewards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyRewards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"day"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsByWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"payout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTxc"}}]}}]}}]}}]} as unknown as DocumentNode<DailyRewardsQuery, DailyRewardsQueryVariables>;
export const MemberStatisticsWalletsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberStatisticsWallets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatisticsWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memberStatistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MemberStatisticsWalletsQuery, MemberStatisticsWalletsQueryVariables>;
export const SalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isMetal"}},{"kind":"Field","name":{"kind":"Name","value":"toEmail"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"orderedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorCnt"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"toUsername"}},{"kind":"Field","name":{"kind":"Name","value":"toFullName"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<SalesQuery, SalesQueryVariables>;
export const FetchSaleStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSaleStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"inactive"},"name":{"kind":"Name","value":"sales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inactiveFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchSaleStatsQuery, FetchSaleStatsQueryVariables>;
export const PackagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Packages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productName"}},{"kind":"Field","name":{"kind":"Name","value":"enrollVisibility"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PackagesQuery, PackagesQueryVariables>;
export const CheckAddressWaitStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAddressWaitStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkAddressWaitStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CheckAddressWaitStatusQuery, CheckAddressWaitStatusQueryVariables>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"waitAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"waitAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}}]}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateSignUpOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSignUpOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSignUpOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSignUpOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"waitAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"waitAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSignUpOrderMutation, CreateSignUpOrderMutationVariables>;
export const CompleteOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompleteOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CompleteOrderMutation, CompleteOrderMutationVariables>;
export const CancelOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IDNInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CancelOrderMutation, CancelOrderMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"passwordExpired"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignUpMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupFormInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<SignUpMemberMutation, SignUpMemberMutationVariables>;
export const SendEmailVerificationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendEmailVerificationCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendEmailVerificationCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<SendEmailVerificationCodeMutation, SendEmailVerificationCodeMutationVariables>;
export const SendEmailVerificationLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendEmailVerificationLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendEmailVerificationLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SendEmailVerificationLinkMutation, SendEmailVerificationLinkMutationVariables>;
export const EmailVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EmailVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"packageID"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}}]}}]}}]} as unknown as DocumentNode<EmailVerifyMutation, EmailVerifyMutationVariables>;
export const PromosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Promos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<PromosQuery, PromosQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LiveStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liveBlockStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveMiningStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liveUserStats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"field"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const BlocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blocks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockNo"}},{"kind":"Field","name":{"kind":"Name","value":"hashRate"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<BlocksQuery, BlocksQueryVariables>;
export const StatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Statistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<StatisticsQuery, StatisticsQueryVariables>;
export const TxcMemberStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TXCMemberStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hashPower"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TxcMemberStatisticsQuery, TxcMemberStatisticsQueryVariables>;
export const HistoryStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HistoryStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalHashPower"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<HistoryStatisticsQuery, HistoryStatisticsQueryVariables>;
export const BlocksDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlocksData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocksData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashRate"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"soldHashPower"}}]}}]}}]} as unknown as DocumentNode<BlocksDataQuery, BlocksDataQueryVariables>;
export const NewMemberCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewMemberCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMemberCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"minerCount"}}]}}]}}]} as unknown as DocumentNode<NewMemberCountsQuery, NewMemberCountsQueryVariables>;
export const AverageMemberRewardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AverageMemberReward"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageMemberReward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"reward"}}]}}]}}]} as unknown as DocumentNode<AverageMemberRewardQuery, AverageMemberRewardQueryVariables>;
export const CommissionByPeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommissionByPeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commissionByPeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}}]}}]}}]} as unknown as DocumentNode<CommissionByPeriodQuery, CommissionByPeriodQueryVariables>;
export const RevenueOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RevenueOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenueOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenue"}},{"kind":"Field","name":{"kind":"Name","value":"spent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<RevenueOverviewQuery, RevenueOverviewQueryVariables>;
export const TotalMemberCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TotalMemberCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMemberCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"minerCount"}}]}}]}}]} as unknown as DocumentNode<TotalMemberCountsQuery, TotalMemberCountsQueryVariables>;
export const LatestStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LatestStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"totalMembers"}},{"kind":"Field","name":{"kind":"Name","value":"txcShared"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}}]}}]}}]} as unknown as DocumentNode<LatestStatisticsQuery, LatestStatisticsQueryVariables>;
export const TxcSharesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TxcShares"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txcShares"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"baseDate"}},{"kind":"Field","name":{"kind":"Name","value":"txc"}}]}}]}}]} as unknown as DocumentNode<TxcSharesQuery, TxcSharesQueryVariables>;
export const TopEarnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopEarners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topEarners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"earned"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<TopEarnersQuery, TopEarnersQueryVariables>;
export const TopRecruitersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopRecruiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topRecruiters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"totalIntroducers"}}]}}]}}]} as unknown as DocumentNode<TopRecruitersQuery, TopRecruitersQueryVariables>;
export const MembersByCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MembersByCountry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByCountry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"memberCount"}}]}}]}}]} as unknown as DocumentNode<MembersByCountryQuery, MembersByCountryQueryVariables>;
export const FetchTeamCommissionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTeamCommissionStats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leftFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rightFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referralFilter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"LEFT"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leftFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"RIGHT"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rightFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"REFERRAL"},"name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referralFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<FetchTeamCommissionStatsQuery, FetchTeamCommissionStatsQueryVariables>;
export const TeamCommissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TeamCommissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamReport"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamReportSection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamCommissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamReport"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamReport"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyCommissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"begL"}},{"kind":"Field","name":{"kind":"Name","value":"begR"}},{"kind":"Field","name":{"kind":"Name","value":"newL"}},{"kind":"Field","name":{"kind":"Name","value":"newR"}},{"kind":"Field","name":{"kind":"Name","value":"maxL"}},{"kind":"Field","name":{"kind":"Name","value":"maxR"}},{"kind":"Field","name":{"kind":"Name","value":"endL"}},{"kind":"Field","name":{"kind":"Name","value":"endR"}},{"kind":"Field","name":{"kind":"Name","value":"pkgL"}},{"kind":"Field","name":{"kind":"Name","value":"pkgR"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"shortNote"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"weekStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"commissionDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<TeamCommissionsQuery, TeamCommissionsQueryVariables>;
export const IntroducersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Introducers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<IntroducersQuery, IntroducersQueryVariables>;
export const SponsorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sponsors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"introducers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<SponsorsQuery, SponsorsQueryVariables>;
export const BlocksdataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blocksdata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PeriodStatsArgs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocksData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"hashRate"}}]}}]}}]} as unknown as DocumentNode<BlocksdataQuery, BlocksdataQueryVariables>;