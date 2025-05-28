import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { CampaignMember } from './type';

import { memo } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/Iconify';

import Detail from './Detail';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<CampaignMember>) => {
    const open = useBoolean();

    return (
      <>
        <Tooltip title="View" arrow placement="left">
          <IconButton color="default" onClick={open.onTrue}>
            <Iconify icon="flowbite:eye-outline" />
          </IconButton>
        </Tooltip>

        <Detail open={open} subject={data?.subject!} body={data?.body} />
      </>
    );
  },
  (prev, next) => prev.data?.email === next.data?.email
);
