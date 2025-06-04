import { use } from 'react';
import { usePopover } from 'minimal-shared/hooks';
import { Handle, Position, type NodeProps } from '@xyflow/react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';

import { PlacementStatus, type PlacementMember } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';

import NodeContext from './nodeContext';
import ActionRender from './ActionRender';

export function StandardNode({
  data: { id, placementStatus, placementPosition, username, fullName, commission, createdAt },
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
          ...(placementStatus === PlacementStatus.Temp && {
            border: (theme) => `1px solid ${theme.palette.error.main}`,
          }),
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

      <ActionRender id={id} expandAll={expandAll} collapseAll={collapseAll} popover={popover} />
    </>
  );
}
