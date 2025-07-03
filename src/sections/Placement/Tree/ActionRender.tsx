import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { type PlacementMember, type PlacementToBottomInput } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { CustomPopover, type UsePopoverReturn } from 'src/components/custom-popover';

import ExpandModal from './ExpandModal';

interface Props {
  visible: number;
  data: PlacementMember;
  popover: UsePopoverReturn;
  onExpandBottom: (newData: PlacementToBottomInput) => void;
}

export function ActionRender({ visible, popover, data: placementMember, onExpandBottom }: Props) {
  const router = useRouter();
  const isExpand = useBoolean();

  const { id, username, fullName } = placementMember;

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
          {(visible === 3 || visible === 4) && (
            <MenuItem
              onClick={() =>
                router.push(`${paths.dashboard.sponsor.root}/new`, {
                  state: { placementParentId: id, username, fullName },
                })
              }
            >
              <Iconify icon="mdi:plus-circle-outline" />
              Add miner
            </MenuItem>
          )}
        </MenuList>
      </CustomPopover>

      <ExpandModal id={id} open={isExpand} onExpandBottom={onExpandBottom} />
    </>
  );
}
