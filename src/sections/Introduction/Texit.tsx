import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/SectionTitle';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

// ----------------------------------------------------------------------

export default function Texit({ sx, ...other }: StackProps) {
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
      title="For Texas by Texans,"
      txtGradient="TXC is built for us"
      description={
        <>
          <Typography sx={{ pb: 2 }}>
            The cryptocurrency revolution has brought many changes to banking, finance & trade.
            Plenty of new and fancy technologies emerge on a regular basis that offer exotic
            contributions to the digital money ecosystem.
          </Typography>
          <Typography sx={{ pb: 2 }}>
            Unfortunately, few blockchains offer an incentive to participate in securing the network
            through mining, directly support a world-changing mission, or work as a usable form of
            money.
          </Typography>
          <Typography sx={{ pb: 2 }}>
            TEXITcoin does all this and more. Join us on the ground floor and help take TXC to the
            moon!
          </Typography>
        </>
      }
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
      <Grid container textAlign="center" spacing={2}>
        <Grid xl={6} xs={12}>
          <Card
            sx={{
              p: 2,
              boxShadow:
                '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
            }}
          >
            <Iconify icon="octicon:feed-star-16" width={60} />
            <Typography variant="h4" sx={{ py: 3 }}>
              254 Block Reward
            </Typography>
            <Typography variant="h6">
              An inflation-crushing block is mined every 3 minutes with coins to compensate miners
              for securing transactions.
            </Typography>
          </Card>
        </Grid>
        <Grid xl={6} xs={12}>
          <Card
            sx={{
              p: 2,
              boxShadow:
                '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
            }}
          >
            <Iconify icon="game-icons:miner" width={60} />
            <Typography variant="h4" sx={{ py: 3 }}>
              O.OO pre-mine
            </Typography>
            <Typography variant="h6">
              No pre-mined coins means everyone starts on a level playing field. Mining is
              permissioned for Texas.
            </Typography>
          </Card>
        </Grid>
        <Grid xl={6} xs={12}>
          <Card
            sx={{
              p: 2,
              boxShadow:
                '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
            }}
          >
            <Iconify icon="mdi:clock-fast" width={60} />
            <Typography variant="h4" sx={{ py: 3 }}>
              3-Minute Spacing
            </Typography>
            <Typography variant="h6">
              Lightning fast transactions are processed every 3 minutes. Enhancements are easy to
              code and deploy.
            </Typography>
          </Card>
        </Grid>
        <Grid xl={6} xs={12}>
          <Card
            sx={{
              p: 2,
              boxShadow:
                '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
            }}
          >
            <Iconify icon="game-icons:axe-in-stump" width={60} />
            <Typography variant="h4" sx={{ py: 3 }}>
              695,662 Halving
            </Typography>
            <Typography variant="h6">
              TXC is a blockchain designed to function for a century of growth. Future generations
              of Texans will benefit.
            </Typography>
          </Card>
        </Grid>
      </Grid>
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
