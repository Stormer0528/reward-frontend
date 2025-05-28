import type { Theme, Components } from '@mui/material/styles';

import { tabClasses } from '@mui/material/Tab';

// ----------------------------------------------------------------------

const MuiTabs: Components<Theme>['MuiTabs'] = {
  // ▼▼▼▼▼▼▼▼ ⚙️ PROPS ▼▼▼▼▼▼▼▼
  defaultProps: {
    textColor: 'inherit',
    variant: 'scrollable',
    allowScrollButtonsMobile: true,
  },
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    flexContainer: ({ ownerState, theme }) => ({
      ...(ownerState.variant !== 'fullWidth' && {
        gap: '24px',
        [theme.breakpoints.up('sm')]: {
          gap: ownerState.orientation === 'vertical' ? '16px' : '40px',
        },
      }),

      ...(ownerState.orientation === 'vertical' && {
        [`>.${tabClasses.root}`]: {
          padding: theme.spacing(0, 1),
          justifyContent: 'right',
          minHeight: 32,
        },
      }),
    }),
    list: {
      variants: [
        {
          props: (props) => props.variant !== 'fullWidth',
          style: ({ theme }) => ({
            gap: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
              gap: theme.spacing(5),
            },
          }),
        },
      ],
    },
    indicator: { backgroundColor: 'currentColor' },
  },
};

const MuiTab: Components<Theme>['MuiTab'] = {
  // ▼▼▼▼▼▼▼▼ ⚙️ PROPS ▼▼▼▼▼▼▼▼
  defaultProps: {
    disableRipple: true,
    iconPosition: 'start',
  },
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    root: ({ theme }) => ({
      opacity: 1,
      minWidth: 48,
      minHeight: 48,
      padding: theme.spacing(1, 0),
      color: theme.vars.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: theme.typography.body2.lineHeight,
      [`&.${tabClasses.selected}`]: {
        color: theme.vars.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
      },
    }),
  },
};

/* **********************************************************************
 * 🚀 Export
 * **********************************************************************/
export const tabs: Components<Theme> = {
  MuiTab,
  MuiTabs,
};
