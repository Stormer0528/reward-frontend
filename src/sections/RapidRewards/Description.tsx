import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const steps = [
  {
    color: '#111111',
    text: `Join today and get started. Each package includes one tracking center for you to
    begin building your network of affiliates. The 900 megahash pack includes THREE
    tracking centers for networking professionals.`,
  },
  {
    color: '#262262',
    text: `Refer others to our mining program via your unique tracking URL or sign them up
    directly. Encourage your team to do the same! We'll calculate commissions weekly
    on Sunday to Saturday period. Payouts are done by Wed!`,
  },
  {
    color: '#111111',
    text: `We'll track both your direct referrals and the referrals anywhere in your team,
    all the way to infinity. You'll earn points - one for each new package - on all
    customers, down to infinity.`,
  },
  {
    color: '#262262',
    text: `Each affiliate tracking center has two legs - a left leg and a right leg.
    Immediately once you have a referral, let us know where you would like new members
    to be placed.`,
  },
  {
    color: '#111111',
    text: `Your goal is to build both legs of your team. For every 3 points on the left and 3
    points on the right, you'll earn a $1000 commission check. Unmatched points roll
    over until paid.`,
  },
  {
    color: '#262262',
    text: `If, in one weekly commission period, you get 6 points in your left leg and 6 points in your right, you'll earn $2000 in commission. And it doesn't stop there!`,
  },
  {
    color: '#111111',
    text: `9 points on your left and 9 points on the right!? Receive a $3000 commission. And
    that's the limit. Even if you have 934 points on the left and 658 on the right,
    you'll receive a maximum payout of $3000 per commission period.`,
  },
  {
    color: '#262262',
    text: `Any points unpaid and below the weekly max roll over to the next period. Points
    above the max do not roll over to future periods. So if you have 2 points on your
    right and 700 on your left, 2 will carry over on the right and 9 on the left.`,
  },
  {
    color: '#111111',
    text: `Once your points are matched and paid, your points balance will reset for the next
    commission period. Learn to balance your legs and sales schedules for maximum
    benefits.`,
  },
  {
    color: '#262262',
    text: `There are 2 bonuses as well! Get 9 direct sales in a single commission period for
    a $1000 bonus. And, we have a bonus pool established for master builders - details
    coming soon!`,
  },
];

export default function Description() {
  return (
    <Box sx={{ background: '#f2f2f2', p: '50px 0' }}>
      <Container>
        <Grid container spacing={3}>
          {steps.map((step, idx) => (
            <Grid key={idx} size={{ md: 12, lg: 6 }}>
              <Box p={2}>
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
                      bgcolor: step.color,
                      display: { xs: 'none', md: 'inline-flex' },
                    }}
                  >
                    <Typography variant="h3">{String(idx + 1).padStart(2, '0')}</Typography>
                  </Box>
                  <Typography>{step.text}</Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
