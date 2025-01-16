import type { StackProps } from '@mui/material/Stack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from './components/SectionContent';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

// ----------------------------------------------------------------------

const smKey = 'sm';
const lgKey = 'lg';

export default function WhatsIn({ sx, ...other }: StackProps) {
  const customTheme = useTheme();

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
      title="What's in it for you"
      description={
        <Container>
          <Stack sx={{ textAlign: 'center' }}>
            <Grid container spacing={3} sx={{ py: 3 }}>
              <Grid xl={4} md={6} xs={12}>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: customTheme.customShadows.primary,
                  }}
                >
                  <Iconify icon="octicon:feed-star-16" width={60} />
                  <Typography variant="h4" sx={{ py: 3 }}>
                    UNLIMITED TXC
                  </Typography>
                  <Typography variant="h6">
                    Once your enrollment is complete, freshly minted TXC is paid out to your wallet
                    24/7/365; no middle-man, commission manager or delays! $TXC direct to you!
                  </Typography>
                </Card>
              </Grid>
              <Grid xl={4} md={6} xs={12}>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: customTheme.customShadows.primary,
                  }}
                >
                  <Iconify icon="el:group-alt" width={60} />
                  <Typography variant="h4" sx={{ py: 3 }}>
                    ONE, TWO, FREE!
                  </Typography>
                  <Typography variant="h6">
                    {`Share your experience with friends and family. Crypto is exciting and there's
                    lots of room for everyone to win. Refer 3 and we'll light up more mining power
                    just for you!`}
                  </Typography>
                </Card>
              </Grid>
              <Grid xl={4} md={6} xs={12}>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: customTheme.customShadows.primary,
                  }}
                >
                  <Iconify icon="icon-park-solid:every-user" width={60} />
                  <Typography variant="h4" sx={{ py: 3 }}>
                    LIMITLESS BINARY
                  </Typography>
                  <Typography variant="h6">
                    Build out your network and acquire a point for each new member referred anywhere
                    on your team. Get $1000 for each 3 matched points, up to 3 times per week!*
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                [customTheme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
                [customTheme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
              }}
            >
              Check out the Rapid Rewards page for more details on our compensation plan
            </Typography>
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
          <Grid container disableEqualOverflow sx={{ position: 'relative', zIndex: 9 }}>
            {renderContent}
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
