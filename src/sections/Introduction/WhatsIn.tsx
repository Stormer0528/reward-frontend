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
            <Grid container spacing={2} sx={{ py: 3 }}>
              <Grid xl={4} md={6} xs={12}>
                <Card
                  sx={{
                    p: 2,
                    boxShadow:
                      '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
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
                    boxShadow:
                      '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
                  }}
                >
                  <Iconify icon="el:group-alt" width={60} />
                  <Typography variant="h4" sx={{ py: 3 }}>
                    ONE, TWO, FREE!
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
                    boxShadow:
                      '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
                  }}
                >
                  <Iconify icon="icon-park-solid:every-user" width={60} />
                  <Typography variant="h4" sx={{ py: 3 }}>
                    LIMITLESS BINARY
                  </Typography>
                  <Typography variant="h6">
                    Once your enrollment is complete, freshly minted TXC is paid out to your wallet
                    24/7/365; no middle-man, commission manager or delays! $TXC direct to you!
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
