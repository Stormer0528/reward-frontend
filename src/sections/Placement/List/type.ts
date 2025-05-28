import type { Theme, SxProps } from '@mui/material/styles';
import type { Member } from 'src/__generated__/graphql';
import type { OrgChartBaseNode } from 'src/components/organizationalChart';

export type NodeProps = OrgChartBaseNode &
  Member & {
    // commissions?: any;
    children?: any;
    sx?: SxProps<Theme>;
  };
