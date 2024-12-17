import type { NotificationLevel } from 'src/__generated__/graphql';

import type { Member } from '../Profile/type';

export type NotificationClient = {
  __typename?: 'NotificationClient';
  id: string;
  read: boolean;
  message: string;
  members: Array<Member>;
  level: NotificationLevel;
  createdAt?: any | null;
  updatedAt?: any | null;
  deletedAt?: any | null;
};
