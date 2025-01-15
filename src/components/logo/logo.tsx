import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Box, { type BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    // OR using local (public folder)
    // -------------------------------------------------------
    const logo = (
      <Box
        component="img"
        src="https://i.ibb.co/wYDCzV6/texit-logo-v4.png"
        sx={{ width: 60, height: 60, cursor: 'pointer', ...sx }}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/intro" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);
