import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { SocialIcon } from 'src/components/Iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'About',
    children: [
      { name: 'Discover TEXITcoin', href: '#' },
      { name: 'Letter from the Founder', href: '#' },
      { name: 'The TEXITcoin Mission', href: '#' },
      { name: 'News & Updates', href: '#' },
      { name: 'Meet the Team', href: '#' },
      { name: 'The Case for TEXITcoin', href: '#' },
      { name: 'TXC Tokenomics', href: '#' },
      { name: 'Events', href: '#' },
    ],
  },
  {
    headline: 'Resources',
    children: [
      { name: 'Block Explorer', href: '#' },
      { name: 'Mine TEXITcoin', href: '#' },
      { name: 'TXC Wallets', href: '#' },
      { name: 'CoinMerketCap', href: '#' },
      { name: 'Gear & Apparel', href: '#' },
    ],
  },
  {
    headline: 'Discover Texas',
    children: [
      { name: 'The Early Days', href: '#' },
      { name: 'The Rise of Modern Texas', href: '#' },
      { name: 'Crisis at the Border', href: '#' },
      { name: 'The Need to Secede', href: '#' },
      { name: 'Beyond the Lone Star State', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              Join us, help secure the TEXITcoin network, and play an active role in the success of
              TXC.
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.name}>
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 6 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box>
      </Container>
    </Box>
  );
}
