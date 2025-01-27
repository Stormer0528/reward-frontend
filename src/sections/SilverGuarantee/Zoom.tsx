import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Zoom() {
  return (
    <Wrapper>
      <Container>
        <Description>
          <Title fontSize={{ md: '3rem', xs: '2rem' }}>{`And that's it!`}</Title>
          <Text>{`This is as close to risk-free as you can possibly get! Dip a toe into the crypto waters with TEXITcoin - the future of money in Texas. Join us on our informative Zoom calls Tuesday evenings. Be a part of our growing community of people that dare to do something new & different. Let's learn together and win together!`}</Text>
          <Text sx={{ color: '#d9d9d9 !important' }}>
            Check back often for news & updates, as we share our progress and results with you and
            the rest of our community.
          </Text>
        </Description>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  background: #262262;
  border-radius: 0;
  padding-bottom: 30px;
`;

const Description = styled(Paper)`
  background: transparent;
  padding: 0 30px;
`;

const Title = styled(Typography)`
  margin-top: 50px;
  font-family: Josefin Sans;
  color: #ffffff;
`;

const Text = styled(Typography)`
  color: #ffffff;
  margin: 20px 0;
`;
