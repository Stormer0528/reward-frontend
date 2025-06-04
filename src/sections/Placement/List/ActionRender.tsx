import type { UsePopoverReturn } from 'src/components/custom-popover';

import { useNavigate } from 'react-router';

import MenuItem from '@mui/material/MenuItem';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/Iconify';
import { CustomPopover } from 'src/components/custom-popover';

interface Props {
  id: string;
  popover: UsePopoverReturn;
  expandAll?: (id: string) => Promise<void>;
  collapseAll?: (id: string) => Promise<void>;
}

export default function ActionRender({ id, popover, expandAll, collapseAll }: Props) {
  const navigate = useNavigate();

  return (
    <CustomPopover
      open={popover.open}
      anchorEl={popover.anchorEl}
      onClose={popover.onClose}
      slotProps={{ arrow: { placement: 'left-center' } }}
    >
      <MenuItem
        onClick={() => {
          if (expandAll) expandAll(id);
          popover.onClose();
        }}
      >
        <Iconify icon="fluent:arrow-expand-all-16-filled" />
        Expand All
      </MenuItem>
      <MenuItem
        onClick={() => {
          if (collapseAll) collapseAll(id);
          popover.onClose();
        }}
      >
        <Iconify icon="fluent:arrow-collapse-all-16-filled" />
        Collapse All
      </MenuItem>
      <MenuItem
        onClick={() =>
          navigate(`${paths.dashboard.sponsor.root}/new`, {
            state: { placementParentId: id },
          })
        }
      >
        <Iconify icon="gridicons:user-add" />
        Add Miner
      </MenuItem>
    </CustomPopover>
  );
}
