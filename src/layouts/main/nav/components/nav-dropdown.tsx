import type { FadeProps } from '@mui/material/Fade';

import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const NavDropdownPaper = styled('div')(({ theme }) => ({
  ...theme.mixins.paperStyles(theme, { dropdown: true }),
  padding: theme.spacing(1, 3),
  borderRadius: theme.shape.borderRadius * 2,
}));

// ----------------------------------------------------------------------

type NavDropdownProps = React.ComponentProps<'div'> & {
  open: FadeProps['in'];
};

export const NavDropdown = styled(({ open, children, ...other }: NavDropdownProps) => (
  <Fade in={open}>
    <div {...other}>
      <NavDropdownPaper>{children}</NavDropdownPaper>
    </div>
  </Fade>
))(({ theme }) => ({
  left: theme.spacing(-3),
  top: theme.spacing(4),
  width: '200px',
  position: 'absolute',
  zIndex: theme.zIndex.drawer * 2,
}));
