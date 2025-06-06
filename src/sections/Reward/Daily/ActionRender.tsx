import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Statistics } from 'src/sections/Statistics/type';

import { memo } from 'react';
import { useBoolean, usePopover } from 'minimal-shared/hooks';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/Iconify';
import { CustomPopover } from 'src/components/CustomPopover';

import { WalletsDrawer } from './Detail';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<Statistics>) => {
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
              <Iconify icon="bxs:wallet" />
              Wallets
            </MenuItem>
          </MenuList>
        </CustomPopover>

        {open.value && <WalletsDrawer open={open} current={data as Statistics} />}
      </>
    );
  },
  (prev, next) => prev.data?.id === next.data?.id
);
