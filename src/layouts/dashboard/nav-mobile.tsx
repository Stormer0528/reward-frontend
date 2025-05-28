import type { NavSectionProps } from 'src/components/nav-section';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';

import { ScrollBar } from 'src/components/ScrollBar';
import DarkLogo from 'src/components/logo/dark-logo';
import { useSettingsContext } from 'src/components/Settings';
import { NavSectionVertical } from 'src/components/nav-section';

// ----------------------------------------------------------------------

type NavMobileProps = NavSectionProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx, ...other }: NavMobileProps) {
  const pathname = usePathname();
  const { state } = useSettingsContext();

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
      sx={{
        [`& .${drawerClasses.paper}`]: {
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box sx={{ pl: 3.5, pt: 2.5, pb: 1 }}>
          {state.navColor === 'apparent' ? (
            <DarkLogo sx={{ background: '#ffffff', borderRadius: 50 }} />
          ) : (
            <DarkLogo />
          )}
        </Box>
      )}

      <ScrollBar fillContent>
        <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />
      </ScrollBar>

      {slots?.bottomArea}
    </Drawer>
  );
}
