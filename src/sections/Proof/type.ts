// TODO: Get type from codegen instead of copying
// Copied from src/__generated__/graphql/AccountsQuery

import type { ProofType } from 'src/__generated__/graphql';

export type PFile = {
  __typename?: 'PFile';
  createdAt?: any | null;
  deletedAt?: any | null;
  id: string;
  mimeType: string;
  originalName: string;
  size: number;
  updatedAt?: any | null;
  url: string;
};

export type RefLink = {
  __typename?: 'RefLink';
  link: string;
  linkType: string;
};

export type Proof = {
  __typename?: 'Proof';
  id: string;
  amount: number;
  createdAt?: any | null;
  deletedAt?: any | null;
  files?: Array<PFile> | null;
  mineLocation?: string | null;
  note?: string | null;
  orderedAt: any;
  refId: string;
  reflinks?: Array<RefLink> | null;
  type: ProofType;
  updatedAt?: any | null;
};
