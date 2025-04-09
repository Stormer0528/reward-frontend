export type CampaignMember = {
  __typename?: 'CampaignMember';
  open: boolean;
  sent: boolean;
  email: string;
  sender: string;
  subject?: string | null;
  body?: string | null;
  openTime?: any | null;
  sentTime?: any | null;
};
