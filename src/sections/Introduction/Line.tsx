import type { Theme, SxProps } from '@mui/material/styles';

import { Typography } from '@mui/material';

interface Props {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function Line({ children, sx }: Props) {
  return (
    <Typography
      variant="h2"
      component="span"
      sx={[
        {
          position: 'relative',
          '::after': {
            content: '""',
            borderBottom: '2px solid #000',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -5,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  );
}
