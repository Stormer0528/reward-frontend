import type { NavListProps, NavSubListProps } from '../types';

import { useBoolean } from 'minimal-shared/hooks';
import { useRef, useEffect, useCallback } from 'react';
import { isEqualPath, isActiveLink, isExternalLink } from 'minimal-shared/utils';

import { usePathname } from 'src/routes/hooks';

import { NavItem } from './nav-desktop-item';
import { Nav, NavLi, NavUl, NavDropdown } from '../components';

// ----------------------------------------------------------------------

export function NavList({ data, sx, ...other }: NavListProps) {
  const pathname = usePathname();
  const navItemRef = useRef<HTMLButtonElement>(null);

  const isActive = isActiveLink(pathname, data.path, data.deepMatch ?? !!data.children);

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      onOpen();
    }
  }, [data.children, onOpen]);

  const renderNavItem = () => (
    <NavItem
      ref={navItemRef}
      // slots
      path={data.path}
      title={data.title}
      // state
      open={open}
      active={isActive}
      // options
      hasChild={!!data.children}
      externalLink={isExternalLink(data.path)}
      // action
      onMouseEnter={handleOpenMenu}
      onMouseLeave={onClose}
    />
  );

  const renderDropdown = () =>
    !!data.children && (
      <NavDropdown open={open} onMouseEnter={handleOpenMenu} onMouseLeave={onClose}>
        <Nav>
          <NavUl sx={{ gap: 3, flexDirection: 'row' }}>
            {data.children.map((list) => (
              <NavSubList key={list.subheader} data={list.items} />
            ))}
          </NavUl>
        </Nav>
      </NavDropdown>
    );

  return (
    <NavLi sx={sx} {...other}>
      {renderNavItem()}
      {renderDropdown()}
    </NavLi>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ data, sx, ...other }: NavSubListProps) {
  const pathname = usePathname();

  return (
    <NavLi
      sx={[
        () => ({
          flexGrow: 1,
          flexBasis: 'auto',
          flexShrink: 0,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <NavUl>
        {data.map((item) => (
          <NavLi key={item.title} sx={{ my: 0.75 }}>
            <NavItem
              subItem
              title={item.title}
              path={item.path}
              active={isEqualPath(item.path, pathname)}
            />
          </NavLi>
        ))}
      </NavUl>
    </NavLi>
  );
}
