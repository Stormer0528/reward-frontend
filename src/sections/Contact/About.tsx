import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container>
      <CustomPaper>
        <Header>About Us</Header>
        <Paper sx={{ px: { lg: 40 } }}>
          <Text>
            mineTXC.com was launched in April 2024 as the official, exclusive mining partner of TXC.
          </Text>
          <Text>
            {`We're doing something that hasn't been done in a long time. It's new & different, so it
            makes sense that you have questions. Get in contact and let us know how we can serve you
            best.`}
          </Text>
        </Paper>
      </CustomPaper>
    </Container>
  );
}

const CustomPaper = styled(Paper)`
  border-radius: 0;
  padding: 50px 0;
  text-align: center;
`;

const Header = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Text = styled(Typography)`
  margin-bottom: 30px;
`;
