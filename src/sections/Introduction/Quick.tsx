import styled from 'styled-components';
import MediaPlayer from 'react-player';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Quick() {
  return (
    <Content>
      <Container>
        <Header>A Quick Introduction...</Header>

        <CustomContainer>
          <MediaPlayer
            url="https://www.youtube.com/watch?v=-XP4JzOFYFI"
            width={360}
            height={300}
            controls
          />
        </CustomContainer>
      </Container>
    </Content>
  );
}

const Content = styled(Paper)`
  background-color: #e5e5e5;
  padding: 50px 0 30px;
  text-align: center;
  border-radius: 0;
`;

const CustomContainer = styled(Container)`
  padding: 40px 0;
`;

const Header = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
`;
