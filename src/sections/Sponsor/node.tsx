import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

import type { NodeProps } from './type';

export function StandardNode({ username, fullName, createdAt }: NodeProps) {
  const [firstName, lastName] = fullName ? fullName.split(' ') : ['', ''];

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
      </Stack>
    </Card>
  );
}
