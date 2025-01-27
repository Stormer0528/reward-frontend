import styled from 'styled-components';
import MediaPlayer from 'react-player';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

interface BackgroundProps {
  path: string;
}

export default function Tale() {
  return (
    <Background path={`${CONFIG.site.basePath}/assets/images/mapa_031.png`}>
      <Wrapper>
        <Header fontSize={{ md: '3.75rem', xs: '2rem' }}>A Tale of Two Cities</Header>
        <Grid container spacing={4} justifyContent="center">
          <Grid md={6} sx={{ margin: { md: '100px 0', xs: '10px 0' } }}>
            <Box>
              <Title fontSize={{ md: '3rem', xs: '1.5rem' }}>Nashville Bitcoin 2024</Title>
            </Box>
            <MediaPlayer
              url="https://www.youtube.com/embed/1HHQPD-Lb5o"
              width={300}
              height={200}
              controls
            />
          </Grid>
          <Grid md={6} sx={{ margin: { md: '100px 0', xs: '10px 0' } }}>
            <Box>
              <Title fontSize={{ md: '3rem', xs: '1.5rem' }}>Chicago ANA 2024</Title>
            </Box>
            <MediaPlayer
              url="https://www.youtube.com/embed/UMaJ6b1klDw"
              width={300}
              height={200}
              controls
            />
          </Grid>
        </Grid>
      </Wrapper>
    </Background>
  );
}

const Background = styled(Paper)<BackgroundProps>`
  background: #262262;
  background-image: url(${(props) => encodeURI(props.path)});
  background-position: 50% 50%;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
  font-family: 'Josefin Sans';
`;

const Wrapper = styled(Container)`
  padding: 60px 60px 0;
`;

const Header = styled(Typography)`
  text-align: center;
  color: #ffffff;
`;

const Title = styled(Typography)`
  color: #ffffff;
  line-height: 1.1;
`;
