import type { NavMainProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

import { HELP_MINETXC_URL } from 'src/consts';
// ----------------------------------------------------------------------

export const mainNav = (isSignedIn: boolean): NavMainProps['data'] => {
  const mainNavConfig = [
    {
      title: 'Rapid Rewards',
      path: paths.pages.rapidRewards,
    },
    {
      title: 'Contact',
      path: paths.pages.contact,
    },
    {
      title: 'Statistics',
      path: paths.pages.statistics,
      // path: token ? paths.dashboard.history : paths.pages.statistics,
    },
    {
      title: 'Communities',
      path: '#',
      children: [
        {
          subheader: '',
          items: [
            {
              title: 'Silverbugs',
              path: paths.pages.silverGuarantee,
            },
          ],
        },
      ],
    },
    {
      title: 'TEXITcoin.org',
      path: 'https://texitcoin.org/',
    },
    {
      title: 'Help',
      path: HELP_MINETXC_URL,
    },
  ];

  if (!isSignedIn) {
    mainNavConfig.push({
      title: 'Sign In',
      path: paths.auth.signIn,
    });
  }

  return mainNavConfig;
};
