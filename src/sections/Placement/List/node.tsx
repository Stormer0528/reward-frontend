import Card from '@mui/material/Card';
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
      <Typography variant="subtitle2" noWrap sx={{ mb: 0.5 }}>
        {username}
      </Typography>

      <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
        {`${firstName} ${lastName.length && lastName[0].toUpperCase()}.`}
      </Typography>

      <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
        {fDate(createdAt)}
      </Typography>
    </Card>
  );
}
