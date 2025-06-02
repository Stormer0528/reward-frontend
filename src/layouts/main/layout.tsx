import type { Breakpoint } from '@mui/material/styles';
import type { FooterProps } from './footer';
import type { MainSectionProps, HeaderSectionProps, LayoutSectionProps } from '../core';

import { useBoolean } from 'minimal-shared/hooks';

import { Logo } from 'src/components/Logo';

// TODO: Consider move JoinNowButton to layouts/components folder...
import { JoinNowButton } from 'src/sections/Introduction/components/JoinNowButton';

import { useAuthContext } from 'src/auth/hooks';

import { Footer } from './footer';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { mainNav } from '../nav-config-main';
import { MenuButton } from '../components/menu-button';
import { accountNavData } from '../nav-config-account';
import { AccountDrawer } from '../components/AccountDrawer';
import { MainSection, LayoutSection, HeaderSection } from '../core';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type MainLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    main?: MainSectionProps;
    footer?: FooterProps;
  };
};

export function MainLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: MainLayoutProps) {
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const { isAuthenticated } = useAuthContext();

  const navData = mainNav(isAuthenticated);

  const renderHeader = () => {
    const headerSlots: HeaderSectionProps['slots'] = {
      // topArea: (
      //   <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
      //     This is an info Alert.
      //   </Alert>
      // ),
      leftArea: (
        <>
          {/** @slot Nav mobile */}
          <MenuButton
            onClick={onOpen}
            sx={(theme) => ({
              mr: 1,
              ml: -1,
              [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
            })}
          />
          <NavMobile data={navData} open={open} onClose={onClose} />

          {/** @slot Logo */}
          <Logo sx={slotProps?.header?.slotProps?.logo?.sx} />
        </>
      ),
      rightArea: (
        <>
          {/** @slot Nav desktop */}
          <NavDesktop
            data={navData}
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
            })}
          />
          {isAuthenticated ? (
            <AccountDrawer data={accountNavData} />
          ) : (
            <JoinNowButton sx={{ ml: 2 }} />
          )}
        </>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={headerSlots}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () => <Footer sx={slotProps?.footer?.sx} layoutQuery={layoutQuery} />;

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
