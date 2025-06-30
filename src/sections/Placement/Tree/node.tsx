import type { NodeProps } from '@xyflow/react';
import type { PlacementMember, PlacementToBottomInput } from 'src/__generated__/graphql';

import { Handle, Position } from '@xyflow/react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';

import { PlacementStatus } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';
import { usePopover } from 'src/components/custom-popover';

import { ActionRender } from './ActionRender';

interface Props extends PlacementMember {
  visible: number;
  onExpandNode: (id: string) => void;
  onCollapseNode: (id: string) => void;
  onExpandBottom: (newData: PlacementToBottomInput) => void;
}

// ----------------------------------------------------------------------

const labelColor: any = {
  LEFT: 'info',
  RIGHT: 'primary',
  MANUAL: 'secondary',
  BALANCE: 'success',
};

export function StandardNode({ data }: NodeProps & { data: Props }) {
  const popover = usePopover();

  const {
    id,
    username,
    fullName,
    createdAt,
    commission,
    placementStatus,
    teamStrategy: tStrategy,
    visible,
    onExpandNode,
    onCollapseNode,
    onExpandBottom,
  } = data;

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
          onClick={() => {
            // Call the custom function if provided
            onExpandNode?.(id);
          }}
        >
          {customizeFullName(fullName)}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mb: 0.5, background: 'translation' }}
        >
          <Typography
            variant="caption"
            component="div"
            noWrap
            sx={{ color: 'text.secondary', mt: 0.5 }}
          >
            {username}
          </Typography>

          <Stack>
            <Label variant="soft" color={labelColor[tStrategy]} sx={{ fontSize: 10 }}>
              {tStrategy}
            </Label>
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

        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="caption"
            component="div"
            noWrap
            sx={{ color: 'text.secondary', mt: 0.5 }}
          >
            {formatDate(createdAt)}
          </Typography>

          <Stack>
            {visible !== 3 && (
              <Iconify
                icon={`mdi:${visible === 1 ? 'plus' : 'minus'}-circle-outline`}
                sx={{ mt: 0.15, cursor: 'pointer' }}
                onClick={async () => {
                  if (visible === 1) {
                    await onExpandNode(id);
                  } else if (visible === 2) {
                    await onCollapseNode(id);
                  }
                }}
              />
            )}
          </Stack>
        </Stack>
      </Card>

      <ActionRender
        popover={popover}
        data={data}
        visible={visible}
        onExpandBottom={onExpandBottom}
      />
    </>
  );
}
