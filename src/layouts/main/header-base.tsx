import type { HeaderSectionProps } from './header-section';
import type { NavSectionProps } from 'src/components/nav-section';
import type { AccountDrawerProps } from '../components/account-drawer';
import type { WorkspacesPopoverProps } from '../components/workspaces-popover';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { STORAGE_TOKEN_KEY } from 'src/consts';

import DarkLogo from 'src/components/logo/dark-logo';

import { HeaderSection } from './header-section';
import { _account } from '../config-nav-account';
import { MenuButton } from '../components/menu-button';
import { AccountDrawer } from '../components/account-drawer';
import { SettingsButton } from '../components/settings-button';

// ----------------------------------------------------------------------

export type HeaderBaseProps = HeaderSectionProps & {
  onOpenNav: () => void;
  data?: {
    nav?: NavSectionProps['data'];
    account?: AccountDrawerProps['data'];
    workspaces?: WorkspacesPopoverProps['data'];
  };
  slots?: {
    navMobile?: {
      topArea?: React.ReactNode;
      bottomArea?: React.ReactNode;
    };
  };
  slotsDisplay?: {
    account?: boolean;
    settings?: boolean;
    searchbar?: boolean;
    workspaces?: boolean;
    menuButton?: boolean;
  };
};

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,
  slotsDisplay: { account = true, settings = true, workspaces = true, menuButton = true } = {},
  ...other
}: HeaderBaseProps) {
  const theme = useTheme();
  const router = useRouter();

  const token = localStorage.getItem(STORAGE_TOKEN_KEY);

  return (
    <HeaderSection
      sx={sx}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* -- Menu button -- */}
            {menuButton && (
              <MenuButton
                data-slot="menu-button"
                onClick={onOpenNav}
                sx={{ mr: 1, ml: -1, [theme.breakpoints.up(layoutQuery)]: { display: 'none' } }}
              />
            )}

            {/* -- Logo -- */}
            <DarkLogo data-slot="logo" />

            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              {/* -- Settings button -- */}
              {settings && <SettingsButton data-slot="settings" />}

              {/* -- Login button -- */}
              {token ? (
                <AccountDrawer data-slot="account" data={_account} />
              ) : (
                settings && (
                  <>
                    <LoadingButton
                      color="inherit"
                      size="medium"
                      type="submit"
                      onClick={() => router.push(paths.auth.signIn)}
                      variant="contained"
                      data-slot="login"
                    >
                      Sign In
                    </LoadingButton>
                    <LoadingButton
                      color="inherit"
                      size="medium"
                      type="submit"
                      onClick={() => router.push(`${paths.pages.intro.root}#sign-up`)}
                      variant="contained"
                      data-slot="login"
                    >
                      Join Now
                    </LoadingButton>
                  </>
                )
              )}
            </Box>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
