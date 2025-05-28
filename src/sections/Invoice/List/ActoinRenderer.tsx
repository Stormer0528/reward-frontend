import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Invoice } from './type';

import { memo } from 'react';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import Detail from './Detail';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<Invoice>) => {
    const open = useBoolean();
    const popover = usePopover();

    return (
      <>
        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>
        <CustomPopover
          open={popover.open}
          anchorEl={popover.anchorEl}
          onClose={popover.onClose}
          slotProps={{ arrow: { placement: 'right-top' } }}
        >
          <MenuList>
            <MenuItem
              onClick={() => {
                open.onTrue();
                popover.onClose();
              }}
            >
              <Iconify icon="solar:eye-bold" />
              View
            </MenuItem>
          </MenuList>
        </CustomPopover>

        <Detail open={open} row={data as Invoice} />
      </>
    );
  },
  (prev, next) => prev.data?.id === next.data?.id
);
