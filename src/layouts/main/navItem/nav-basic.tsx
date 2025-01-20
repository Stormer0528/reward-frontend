import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';

import DarkLogo from 'src/components/logo/dark-logo';
import { NavBasicDesktop } from 'src/components/NavBasic';

// ----------------------------------------------------------------------

export function NavBasic() {
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

export const NAV_ITEMS = [
  {
    title: 'Rapid Rewards',
    path: paths.pages.rapidRewards.root,
  },
  {
    title: 'Contact',
    path: '#',
  },
  {
    title: 'TEXITcoin.org',
    path: 'https://texitcoin.org/',
  },
  {
    title: 'JOIN NOW!',
    path: '#',
    isJoin: true,
  },
];
