import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/useBoolean';

import { Iconify } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';
import { NavBasicMobile, NavBasicDesktop } from 'src/components/NavBasic';

// ----------------------------------------------------------------------

export function NavBasic() {
  const mobileOpen = useBoolean();
  const token = localStorage.getItem('token');

  const NAV_ITEMS = [
    {
      title: 'Rapid Rewards',
      path: paths.pages.rapidRewards.root,
    },
    {
      title: 'Contact',
      path: paths.pages.contact.root,
    },
    {
      title: 'Dashboard',
      path: token ? paths.dashboard.history.root : paths.pages.statistics.root,
    },
    {
      title: 'Communities',
      path: '#',
      children: [
        {
          title: 'Silver Guarantee',
          path: paths.pages.silverGuarantee.root,
        },
      ],
    },
    {
      title: 'TEXITcoin.org',
      path: 'https://texitcoin.org/',
    },
    {
      title: 'JOIN NOW!',
      path: `${paths.pages.intro.root}#sign-up`,
      isJoin: true,
    },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        gap: 2,
        width: 1,
        borderRadius: 2,
        display: 'flex',
        overflowX: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <IconButton onClick={mobileOpen.onTrue} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Iconify icon="heroicons-solid:menu-alt-1" />
      </IconButton>

      <DarkLogo sx={{ width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 } }} />

      <NavBasicDesktop
        data={NAV_ITEMS}
        cssVars={{
          '--nav-item-gap': '50px',
        }}
        slotProps={{
          rootItem: {
            sx: {},
            icon: {},
            texts: {},
            title: {
              // typography: 'subtitle1',
              // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
            },
            caption: {},
            arrow: {},
          },
          subItem: {
            sx: {},
            icon: {},
            texts: {},
            title: {},
            caption: {},
            arrow: {},
          },
          paper: {},
        }}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      />

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{ sx: { width: 280 } }}
      >
        <Box sx={{ pl: 2.5, py: 2 }}>
          <DarkLogo />
        </Box>

        <NavBasicMobile
          sx={{ px: 1.5 }}
          data={NAV_ITEMS}
          cssVars={{
            '--nav-item-gap': '8px',
          }}
          slotProps={{
            rootItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {
                // typography: 'subtitle1',
                // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              caption: {},
              info: {},
              arrow: {},
            },
            subItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {},
              caption: {},
              info: {},
              arrow: {},
            },
            paper: {},
          }}
        />
      </Drawer>
    </Paper>
  );
}
