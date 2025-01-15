import type { StackProps } from '@mui/material/Stack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from './components/SectionContent';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

export default function Packages({ sx, ...other }: StackProps) {
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
      title="3 Packages to Choose From..."
      description={
        <Container sx={{ position: 'relative' }}>
          <Stack direction="row" justifyContent="space-between" columnGap={2} sx={{ py: 3 }}>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Typography variant="h4">Single</Typography>
              <Typography variant="h2" sx={{ py: 1 }}>
                $995
              </Typography>
              <Typography variant="h5" sx={{ pb: 2 }}>
                one-time fee
              </Typography>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>100 megahash mining power</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>One affiliate tracking center</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unique tracking code & URL</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Back-office training & tools</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Dedicated Customer Support</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unlimited hosting & electricity</Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                endIcon={<Iconify icon="pajamas:long-arrow" />}
              >
                Get Started Now
              </Button>
            </Card>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Typography variant="h4">TRIPLE Play</Typography>
              <Typography variant="h2" sx={{ py: 1 }}>
                $2985
              </Typography>
              <Typography variant="h5" sx={{ pb: 2 }}>
                one-time fee
              </Typography>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>300 megahash mining power</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>One affiliate tracking center</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unique tracking code & URL</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Back-office training & tools</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Dedicated Customer Support</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unlimited hosting & electricity</Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                endIcon={<Iconify icon="pajamas:long-arrow" />}
              >
                Triple Your Output
              </Button>
            </Card>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.3)',
              }}
            >
              <Typography variant="h4">BUILDER Plan</Typography>
              <Typography variant="h2" sx={{ py: 1 }}>
                $8955
              </Typography>
              <Typography variant="h5" sx={{ pb: 2 }}>
                one-time fee
              </Typography>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>900 megahash mining power</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Three affiliate tracking center</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unique tracking code & URL</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Back-office training & tools</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Dedicated Customer Support</Typography>
              </Stack>
              <Stack direction="row" sx={{ pb: 1 }}>
                <Iconify icon="radix-icons:dot-filled" />
                <Typography>Unlimited hosting & electricity</Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                endIcon={<Iconify icon="pajamas:long-arrow" />}
              >
                Build Your Network
              </Button>
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
            display="flex"
            justifyContent="center"
          >
            {renderContent}
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
