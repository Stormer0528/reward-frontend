import type { StackProps } from '@mui/material/Stack';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from './components/SectionContent';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

export default function Packages({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const goToJoin = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight - 2200, behavior: 'smooth' });
  };

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
          <Grid container spacing={3} sx={{ py: 3 }}>
            <Grid xl={4} md={6} xs={12}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: theme.customShadows.success,
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
                  onClick={goToJoin}
                  sx={{ my: 1 }}
                >
                  Get Started Now
                </Button>
              </Card>
            </Grid>
            <Grid xl={4} md={6} xs={12}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: theme.customShadows.success,
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
                  onClick={goToJoin}
                  sx={{ my: 1 }}
                >
                  Triple Your Output
                </Button>
              </Card>
            </Grid>
            <Grid xl={4} md={6} xs={12}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: theme.customShadows.success,
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
                  onClick={goToJoin}
                  sx={{ my: 1 }}
                >
                  Build Your Network
                </Button>
              </Card>
            </Grid>
          </Grid>
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
