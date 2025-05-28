import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { SocialIcon } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'About',
    children: [
      { name: 'Discover TEXITcoin', href: 'https://texitcoin.org/Discover-TEXITcoin.html' },
      { name: 'Letter from the Founder', href: 'https://texitcoin.org/Welcome-Letter.html' },
      { name: 'The TEXITcoin Mission', href: 'https://texitcoin.org/The-TEXITcoin-Mission.html' },
      { name: 'News & Updates', href: 'https://texitcoin.org/News-and-Updates.html' },
      { name: 'Meet the Team', href: 'https://texitcoin.org/Meet-the-Team.html' },
      { name: 'The Case for TEXITcoin', href: 'https://texitcoin.org/The-Case-for-TEXITcoin.html' },
      { name: 'TXC Tokenomics', href: 'https://texitcoin.org/Tokenomics.html' },
      { name: 'Events', href: 'https://texitcoin.org/Events.html' },
    ],
  },
  {
    headline: 'Resources',
    children: [
      { name: 'Block Explorer', href: 'https://explorer.texitcoin.org/' },
      { name: 'Mine TEXITcoin', href: 'https://minetxc.com/' },
      { name: 'TXC Wallets', href: 'https://texitcoin.org/TEXITcoin-Wallets.html' },
      { name: 'CoinMerketCap', href: 'https://coinmarketcap.com/currencies/texitcoin/' },
      { name: 'Gear & Apparel', href: 'https://texitcoin.org/Gear-and-Apparel.html' },
    ],
  },
  {
    headline: 'Discover Texas',
    children: [
      { name: 'The Early Days', href: 'https://texitcoin.org/texas/The-Early-Days.html' },
      {
        name: 'The Rise of Modern Texas',
        href: 'https://texitcoin.org/texas/The-Rise-of-Modern-Texas.html',
      },
      {
        name: 'Crisis at the Border',
        href: 'https://texitcoin.org/texas/Crisis-at-the-Border.html',
      },
      { name: 'The Need to Secede', href: 'https://texitcoin.org/texas/The-Need-to-Secede.html' },
      {
        name: 'Beyond the Lone Star State',
        href: 'https://texitcoin.org/texas/Beyond-the-Lone-Star-State.html',
      },
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
    <Box
      component="footer"
      sx={{ position: 'relative', bgcolor: 'background.default', pt: 2, ...sx }}
    >
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <DarkLogo />

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
        <DarkLogo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box>
      </Container>
    </Box>
  );
}
