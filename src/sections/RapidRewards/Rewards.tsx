import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Rewards() {
  return (
    <Container>
      <CustomPaper>
        <Header>Our Rapid Rewards Program</Header>
        <Paper sx={{ p: { lg: 40 } }}>
          <Typography>
            In addition to our simple one, two, free referral program (refer three and get more
            mining hash power for free), we also offer a compensation plan that pays CASH for
            referrals. There are some important basics to understand so that you can make the most
            of our commission program.
          </Typography>
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
