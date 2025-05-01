import type { Member } from 'src/__generated__/graphql';
import type { Theme, SxProps } from '@mui/material/styles';
import type { OrgChartBaseNode } from 'src/components/organizationalChart';

export type NodeProps = OrgChartBaseNode &
  Member & {
    children?: any;
    sx?: SxProps<Theme>;
  };

export type Introducer = {
  __typename?: 'Introducer';
  ID: number;
  id: string;
  email: string;
  point: number;
  mobile: string;
  fullName: string;
  username: string;
  createdAt: any | null;
};
