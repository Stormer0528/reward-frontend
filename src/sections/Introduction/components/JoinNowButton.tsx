import type { Theme, SxProps } from '@mui/material/styles';

import Fab from '@mui/material/Fab';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { themeConfig } from 'src/theme';

interface Props {
  sx?: SxProps<Theme>;
}

export const JoinNowButton = ({ sx }: Props) => (
  <Fab
    component={RouterLink}
    color="inherit"
    variant="extended"
    size="small"
    href={`${paths.pages.intro}#sign-up`}
    sx={{
      color: '#fff',
      bgcolor: themeConfig.palette.common.texit,
      fontWeight: 600,
      px: 4,
      py: 2,
      mt: 0.5, // Due to text horizontal alignment...
      ...sx,
    }}
  >
    JOIN NOW!
  </Fab>
);
