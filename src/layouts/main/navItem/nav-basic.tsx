import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';

import DarkLogo from 'src/components/logo/dark-logo';
import { NavBasicDesktop } from 'src/components/NavBasic';

// ----------------------------------------------------------------------

export function NavBasic() {
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
      title: 'TEXITcoin.org',
      path: 'https://texitcoin.org/',
    },
    {
      title: 'JOIN NOW!',
      path: `${paths.pages.intro.root}?tab=sign-up`,
      isJoin: true,
    },
  ];

  return (
    <Paper
      // variant="outlined"
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
      <DarkLogo />

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
      />
    </Paper>
  );
}
