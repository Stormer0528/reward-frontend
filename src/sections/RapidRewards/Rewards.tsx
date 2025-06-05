import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Rewards() {
  return (
    <Container>
      <Box textAlign="center" p="50px 0">
        <Typography variant="h2" mb={5}>
          Our Rapid Rewards Program
        </Typography>
        <Paper sx={{ px: { lg: 40 } }}>
          <Typography>
            In addition to our simple one, two, free referral program (refer three and get more
            mining hash power for free), we also offer a compensation plan that pays CASH for
            referrals. There are some important basics to understand so that you can make the most
            of our commission program.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
