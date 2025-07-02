import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { useBoolean } from 'src/hooks/useBoolean';

import {
  PlacementStatus,
  type PlacementMember,
  type PlacementToBottomInput,
} from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { CustomPopover, type UsePopoverReturn } from 'src/components/custom-popover';

import ExpandModal from './ExpandModal';
import { InsertModal } from './InsertModal';

interface Props {
  visible: number;
  data: PlacementMember;
  popover: UsePopoverReturn;
  onExpandBottom: (newData: PlacementToBottomInput) => void;
}

export function ActionRender({ visible, popover, data: placementMember, onExpandBottom }: Props) {
  const isInsert = useBoolean();
  const isExpand = useBoolean();

  const { id, placementStatus } = placementMember;

  return (
    <>
      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'left-center' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              isExpand.onTrue();
              popover.onClose();
            }}
          >
            <Iconify icon="fluent:arrow-expand-all-16-filled" />
            Expand Bottom
          </MenuItem>
          {placementStatus !== PlacementStatus.Temp && visible === 3 && (
            <MenuItem
              onClick={() => {
                isInsert.onTrue();
                popover.onClose();
              }}
            >
              <Iconify icon="mdi:plus-circle-outline" />
              Add child
            </MenuItem>
          )}
        </MenuList>
      </CustomPopover>

      <InsertModal id={id} open={isInsert} />
      <ExpandModal id={id} open={isExpand} onExpandBottom={onExpandBottom} />
    </>
  );
}
