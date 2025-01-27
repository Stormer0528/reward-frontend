import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Right() {
  return (
    <Wrapper>
      <Container>
        <Description>
          <Title
            fontSize={{ md: '3rem', xs: '2rem' }}
          >{`Who's right? Only time will tell….`}</Title>
          <Text>{`Whilte many 'bugs are waiting for a doomsday that may never come, some have taken the first step and ventured in to the strange and often scammy world of digital currency. Two of these brave pioneers have even offered to document their journey and share it with us, so that you can learn from their experiences.`}</Text>
        </Description>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  background: #262262;
  border-radius: 0;
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
  margin: 20px 0 50px;
`;
