import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from '../Introduction/components/SectionContent';
import {
  FloatLine,
  CircleSvg,
  FloatTriangleDownIcon,
} from '../Introduction/components/SvgElements';

export default function Description({ sx, ...other }: StackProps) {
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
      title=""
      description={
        <Grid container spacing={3}>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.success }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.success.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">01</Typography>
                </Box>
                <Typography>
                  Join today and get started. Each package includes one tracking center for you to
                  begin building your network of affiliates. The 900 megahash pack includes THREE
                  tracking centers for networking professionals.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.info }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.info.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">02</Typography>
                </Box>
                <Typography>
                  Join today and get started. Each package includes one tracking center for you to
                  begin building your network of affiliates. The 900 megahash pack includes THREE
                  tracking centers for networking professionals.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.success }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.success.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">03</Typography>
                </Box>
                <Typography>
                  {`We'll track both your direct referrals and the referrals anywhere in your team,
                  all the way to infinity. You'll earn points - one for each new package - on all
                  customers, down to infinity.`}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.info }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.info.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">04</Typography>
                </Box>
                <Typography>
                  Each affiliate tracking center has two legs - a left leg and a right leg.
                  Immediately once you have a referral, let us know where you would like new members
                  to be placed.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.success }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.success.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">05</Typography>
                </Box>
                <Typography>
                  {`Your goal is to build both legs of your team. For every 3 points on the left and 3
                  points on the right, you'll earn a $1000 commission check. Unmatched points roll
                  over until paid.`}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.info }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.info.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">06</Typography>
                </Box>
                <Typography>
                  {`If, in one weekly commission period, you get 6 points in your left leg and 6 points in your right, you'll earn $2000 in commission. And it doesn't stop there!`}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.success }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.success.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">07</Typography>
                </Box>
                <Typography>
                  {`9 points on your left and 9 points on the right!? Receive a $3000 commission. And
                  that's the limit. Even if you have 934 points on the left and 658 on the right,
                  you'll receive a maximum payout of $3000 per commission period.`}
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.info }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.info.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">08</Typography>
                </Box>
                <Typography>
                  Any points unpaid and below the weekly max roll over to the next period. Points
                  above the max do not roll over to future periods. So if you have 2 points on your
                  right and 700 on your left, 2 will carry over on the right and 9 on the left.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.success }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.success.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">09</Typography>
                </Box>
                <Typography>
                  Once your points are matched and paid, your points balance will reset for the next
                  commission period. Learn to balance your legs and sales schedules for maximum
                  benefits.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid lg={6} md={12}>
            <Card
              sx={{ p: 2, height: { lg: 155 }, boxShadow: (theme) => theme.customShadows.info }}
            >
              <Stack direction="row" columnGap={2}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: '50%',
                    alignItems: 'center',
                    color: 'white',
                    justifyContent: 'center',
                    bgcolor: (theme) => theme.palette.info.dark,
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">10</Typography>
                </Box>
                <Typography>
                  There are 2 bonuses as well! Get 9 direct sales in a single commission period for
                  a $1000 bonus. And, we have a bonus pool established for master builders - details
                  coming soon!
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
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
