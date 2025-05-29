import type { NavMainProps } from '../types';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { useRouter, usePathname } from 'src/routes/hooks';

import { NavUl } from 'src/components/NavSection';
import { ScrollBar } from 'src/components/ScrollBar';
import DarkLogo from 'src/components/logo/dark-logo';

import { NavList } from './nav-mobile-list';

// ----------------------------------------------------------------------

export type NavMobileProps = NavMainProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>
          <DarkLogo />
        </Box>
      )}

      <ScrollBar fillContent>
        <Box component="nav" display="flex" flexDirection="column" flex="1 1 auto" sx={{ pb: 3 }}>
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Box>
      </ScrollBar>

      {slots?.bottomArea ?? (
        <Box gap={1.5} display="flex" sx={{ px: 2.5, py: 3 }}>
          <Button
            color="inherit"
            size="medium"
            type="submit"
            onClick={() => router.push(paths.auth.signIn)}
            variant="contained"
            data-slot="login"
          >
            Login
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
