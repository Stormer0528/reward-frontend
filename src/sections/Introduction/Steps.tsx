import type { StackProps } from '@mui/material/Stack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from './components/SectionContent';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

export default function WhatsIn({ sx, ...other }: StackProps) {
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

  const renderContent = (
    <SectionContent
      title="Get Started in 3 Easy Steps..."
      description={
        <Container>
          <Stack direction="row" justifyContent="space-between" columnGap={2} sx={{ py: 3 }}>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Iconify icon="fluent-mdl2:join-online-meeting" width={60} />
              <Typography variant="h4" sx={{ py: 3 }}>
                Join Right Now
              </Typography>
              <Typography variant="h6">
                {`Complete the form below and send your payment. We'll get you setup and point the
                  mine at your shiny new Cold Storage Coin.`}
              </Typography>
            </Card>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Iconify icon="game-icons:money-stack" width={60} />
              <Typography variant="h4" sx={{ py: 3 }}>
                Begin Earning Immediately
              </Typography>
              <Typography variant="h6">
                Once the mine is configured and connected to your Coin, your wallet will begin
                receiving $TXC payouts daily. Save or monetize!
              </Typography>
            </Card>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Iconify icon="pepicons-pop:speaker-high-circle-filled" width={60} />
              <Typography variant="h4" sx={{ py: 3 }}>
                Spread the Word
              </Typography>
              <Typography variant="h6">
                {`You're on the rocket ship, and there's nothing left to do. But refer 3 and get
                  more mining power for free! Or use our Rapid Rewards and get cash!`}
              </Typography>
            </Card>
          </Stack>
        </Container>
      }
      sx={{ textAlign: 'center' }}
    />
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
            {renderContent}
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
