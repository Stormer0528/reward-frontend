import type { PlacementMember } from 'src/__generated__/graphql';

import { use } from 'react';
import { usePopover } from 'minimal-shared/hooks';
import { Handle, Position, type NodeProps } from '@xyflow/react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';
import { CustomPopover } from 'src/components/CustomPopover';

import NodeContext from './nodeContext';

export function StandardNode({
  data: { id, placementPosition, username, fullName, commission, createdAt },
}: NodeProps & { data: PlacementMember }) {
  const popover = usePopover();

  const { visibleMap, expandTree, collapseTree, expandAll, collapseAll } = use(NodeContext);

  return (
    <>
      <Handle type="target" position={Position.Top} isConnectable />
      <Handle type="source" position={Position.Bottom} isConnectable />
      <Card
        sx={{
          p: 2,
          minWidth: 200,
          borderRadius: 1.5,
          textAlign: 'left',
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        <IconButton
          color={popover.open ? 'inherit' : 'default'}
          onClick={popover.onOpen}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>

        <Typography
          variant="subtitle2"
          noWrap
          sx={{
            mb: 0.5,
            cursor: 'pointer',
            '&:hover': { color: (theme) => theme.vars.palette.Alert.errorIconColor },
          }}
        >
          {customizeFullName(fullName)}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mb: 0.5, background: 'translation' }}
        >
          <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
            {username}
          </Typography>

          <Stack>
            {placementPosition !== 'NONE' && (
              <Label
                variant={placementPosition === 'LEFT' ? 'soft' : 'outlined'}
                color="info"
                sx={{ fontSize: 10, border: placementPosition === 'LEFT' ? 'none' : 1 }}
              >
                {placementPosition}
              </Label>
            )}
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color="gray" component="div" noWrap sx={{ mt: 1 }}>
            L {commission?.begL || 0}/{commission?.newL || 0}
          </Typography>
          <Typography variant="caption" color="gray" component="div" noWrap sx={{ mt: 1 }}>
            {commission?.begR || 0}/{commission?.newR || 0} R
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" sx={{ background: 'translation' }}>
          <Typography
            variant="caption"
            component="div"
            noWrap
            sx={{ color: 'text.secondary', mt: 0.5 }}
          >
            {formatDate(createdAt)}
          </Typography>

          <Stack>
            {visibleMap[id] !== 3 && (
              <Iconify
                icon={visibleMap[id] === 1 ? 'mdi:plus-circle-outline' : 'mdi:minus-circle-outline'}
                sx={{ mt: 0.15, cursor: 'pointer' }}
                onClick={() => {
                  if (visibleMap[id] === 1) expandTree(id);
                  else if (visibleMap[id] === 2) collapseTree(id);
                }}
              />
            )}
          </Stack>
        </Stack>
      </Card>

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
      </CustomPopover>
    </>
  );
}
