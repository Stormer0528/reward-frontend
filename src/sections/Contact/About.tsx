import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container>
      <Box padding="50px 0" textAlign="center">
        <Typography variant="h2" mb={5}>
          About Us
        </Typography>
        <Paper sx={{ px: { lg: 40 } }}>
          <Text>
            mineTXC.com was launched in April 2024 as the official, exclusive mining partner of TXC.
          </Text>
          <Text>
            We&apos;re doing something that hasn&apos;t been done in a long time. It&apos;s new &
            different, so it makes sense that you have questions. Get in contact and let us know how
            we can serve you best.
          </Text>
        </Paper>
      </Box>
    </Container>
  );
}

const Text = styled(Typography)(() => ({
  marginBottom: 30,
}));
