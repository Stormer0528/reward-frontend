import { useContext } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/Iconify';

import NodeContext from './nodeContext';

import type { NodeProps } from './type';

export function StandardNode({ id, username, fullName, createdAt }: NodeProps) {
  const [firstName, lastName] = fullName ? fullName.split(' ') : ['', ''];

  const { visibleMap, expandTree, collapseTree } = useContext(NodeContext);

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
        }}
      >
        {`${firstName} ${lastName.length && lastName[0].toUpperCase()}.`}
      </Typography>

      <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
        {username}
      </Typography>

      <Stack direction="row" justifyContent="space-between" sx={{ background: 'translation' }}>
        <Typography
          variant="caption"
          component="div"
          noWrap
          sx={{ color: 'text.secondary', mt: 0.5 }}
        >
          {fDate(createdAt)}
        </Typography>

        <Stack direction="row" columnGap={1}>
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
      </Stack>
    </Card>
  );
}
