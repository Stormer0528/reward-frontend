import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/SectionTitle';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

// ----------------------------------------------------------------------

export default function Brief({ sx, ...other }: StackProps) {
  const renderLines = (
    <>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          position: 'absolute',
          transform: 'translateX(-15px)',
        }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon
          sx={{
            width: 30,
            height: 15,
            opacity: 0.24,
            position: 'static',
          }}
        />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <SectionTitle
      caption={<Logo />}
      title="Texitcoin"
      txtGradient="is your second chance at Crypto"
      description="Faster, cheaper and better than Bitcoin in almost every way, our passionate affiliates are on track to make $TXC bigger than the world's leading crypto. Join us, help secure the TEXITcoin network, and play an active role in the success of $TXC."
      sx={{ textAlign: 'center' }}
    />
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inDown}
      alignItems="flex-end"
      sx={{
        filter: (theme) =>
          `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)})`,
        [stylesMode.dark]: {
          filter: (theme) =>
            `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
        },
      }}
    >
      <Box
        component="img"
        alt="Zone landing page"
        src={`${CONFIG.site.basePath}/assets/images/texitcoin-key.png`}
        sx={{
          width: 720,
          objectFit: 'cover',
          aspectRatio: '16/10',
          borderRadius: '16px 16px 0 16px',
          border: (theme) => `solid 2px ${theme.vars.palette.common.white}`,
        }}
      />

      <Box sx={{ p: 0.5, borderRadius: '0 0 8px 8px', bgcolor: 'common.white' }}>
        <Button
          variant="contained"
          target="_blank"
          rel="noopener"
          href={paths.auth.signUp}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          sx={{
            color: 'grey.800',
            bgcolor: 'common.white',
            '&:hover': { bgcolor: 'common.white' },
          }}
        >
          Join Now
        </Button>
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        pb: { xs: 10, md: 20 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative' }}>
          <Grid
            container
            disableEqualOverflow
            spacing={{ xs: 5, md: 8 }}
            sx={{ position: 'relative', zIndex: 9 }}
          >
            <Grid xs={12} md={6} lg={5}>
              {renderDescription}
            </Grid>

            <Grid xs={12} md={6} lg={7}>
              {renderImg}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
