import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

// import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/useBoolean';

import { Main } from './main';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { HeaderBase } from './header-base';
// import { Footer, HomeFooter } from './footer';
import { LayoutSection } from '../core/layout-section';
import { navData as mainNavData } from '../config-nav-main';

import type { NavMainProps } from './nav/types';

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavMainProps['data'];
  };
};

export function MainLayout({ sx, data, children }: MainLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const layoutQuery: Breakpoint = 'md';

  const navData = data?.nav ?? mainNavData;

  return (
    <>
      <NavMobile data={navData} open={mobileNavOpen.value} onClose={mobileNavOpen.onFalse} />

      <LayoutSection
        /** **************************************
         * Header
         *************************************** */
        headerSection={
          <HeaderBase
            layoutQuery={layoutQuery}
            onOpenNav={mobileNavOpen.onTrue}
            slotsDisplay={{
              account: false,
            }}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
              rightAreaStart: (
                <NavDesktop
                  data={navData}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
                  }}
                />
              ),
            }}
            sx={{ pb: 2 }}
          />
        }
        /** **************************************
         * Footer
         *************************************** */
        // footerSection={homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />}
        /** **************************************
         * Style
         *************************************** */
        sx={sx}
      >
        <Main sx={{ pb: 20 }}>{children}</Main>
      </LayoutSection>
    </>
  );
}
