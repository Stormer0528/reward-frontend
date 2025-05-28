import styled from 'styled-components';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Description() {
  return (
    <CustomPaper>
      <Container>
        <Grid container spacing={3}>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#111111',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#262262',
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">02</Typography>
                </Box>
                <Typography>
                  {`Refer others to our mining program via your unique tracking URL or sign them up
                    directly. Encourage your team to do the same! We'll calculate commissions weekly
                    on Sunday to Saturday period. Payouts are done by Wed!`}
                </Typography>
              </Stack>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#111111',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#262262',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#111111',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#262262',
                    display: { xs: 'none', md: 'inline-flex' },
                  }}
                >
                  <Typography variant="h3">06</Typography>
                </Box>
                <Typography>
                  {`If, in one weekly commission period, you get 6 points in your left leg and 6 points in your right, you'll earn $2000 in commission. And it doesn't stop there!`}
                </Typography>
              </Stack>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#111111',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#262262',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#111111',
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
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
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
                    bgcolor: '#262262',
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
            </ContentCard>
          </Grid>
        </Grid>
      </Container>
    </CustomPaper>
  );
}

const CustomPaper = styled(Paper)`
  background: #f2f2f2;
  padding: 50px 0;
`;

const ContentCard = styled(Paper)`
  background: transparent;
  padding: 16px;
`;
