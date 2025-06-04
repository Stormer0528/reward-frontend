import type { UsePopoverReturn } from 'src/components/custom-popover';

import MenuItem from '@mui/material/MenuItem';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';
import { CustomPopover } from 'src/components/custom-popover';

interface Props {
  id: string;
  popover: UsePopoverReturn;
  expandAll?: (id: string) => Promise<void>;
  collapseAll?: (id: string) => Promise<void>;
}

export default function ActionRender({ id, popover, expandAll, collapseAll }: Props) {
  const open = useBoolean();

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
      <MenuItem onClick={open.onTrue}>
        <Iconify icon="gridicons:user-add" />
        Add Miner
      </MenuItem>
    </CustomPopover>
  );
}
