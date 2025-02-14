import { useContext } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { formatDate } from 'src/utils/format-time';
import { customizeFullName } from 'src/utils/helper';

import { Label } from 'src/components/Label';
import { Iconify } from 'src/components/Iconify';

import NodeContext from './nodeContext';

import type { NodeProps } from './type';

export function StandardNode({
  id,
  username,
  fullName,
  createdAt,
  commission,
  teamStrategy,
}: NodeProps) {
  const { visibleMap, expandTree, collapseTree } = useContext(NodeContext);

  const labelColor: any = {
    LEFT: 'info',
    RIGHT: 'primary',
    MANUAL: 'secondary',
    BALANCE: 'success',
  };

  return (
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
        <Typography
          variant="caption"
          component="div"
          noWrap
          sx={{ color: 'text.secondary', mt: 0.5 }}
        >
          {username}
        </Typography>

        <Stack>
          <Label variant="soft" color={labelColor[teamStrategy]} sx={{ fontSize: 10 }}>
            {teamStrategy}
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
          {visibleMap[id] !== 3 && (
            <Iconify
              icon={`mdi:${visibleMap[id] === 1 ? 'plus' : 'minus'}-circle-outline`}
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
  );
}
