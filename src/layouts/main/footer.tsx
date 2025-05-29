import type { Breakpoint } from '@mui/material/styles';
import type { IconifyName } from 'src/components/Iconify';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Logo } from 'src/components/Logo';
import { Iconify } from 'src/components/Iconify';

// ----------------------------------------------------------------------

export const SOCIAL_LINKS = [
  {
    value: 'tiktok',
    icon: 'iconoir:tiktok',
    path: 'https://www.tiktok.com/@BlockchainMint',
  },
  {
    value: 'telegram',
    icon: 'ic:baseline-telegram',
    path: 'https://t.me/texitcoin_txc',
  },
  {
    value: 'instagram',
    icon: 'mdi:instagram',
    path: 'https://www.instagram.com/coldstoragecoins/',
  },
  {
    value: 'twitter',
    icon: 'proicons:x-twitter',
    path: 'https://twitter.com/texitcoin_txc',
  },
];

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.grey['A700'],
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

export function Footer({
  sx,
  layoutQuery = 'md',
  ...other
}: FooterProps & { layoutQuery?: Breakpoint }) {
  return (
    <FooterRoot
      sx={[
        (theme) => ({
          py: 4,
          [theme.breakpoints.up(layoutQuery)]: { py: 6 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid
            size={{ xs: 12, [layoutQuery]: 'auto' }}
            sx={{
              textAlign: 'center',
            }}
          >
            <Logo sx={{ background: '#ffffff', borderRadius: 50 }} />
          </Grid>
          <Grid size="grow" sx={{ textAlign: 'center' }}>
            <Typography color="white">© Copyright 2025 TEXITcoin.</Typography>
            <Typography color="white">All Rights Reserved.</Typography>
          </Grid>
          <Grid size={{ xs: 12, [layoutQuery]: 'auto' }}>
            <Box
              sx={(theme) => ({
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              })}
            >
              {SOCIAL_LINKS.map((social) => (
                <IconButton key={social.value} href={social.path} target="_blank">
                  <Iconify icon={social.icon as IconifyName} />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterRoot>
  );
}
