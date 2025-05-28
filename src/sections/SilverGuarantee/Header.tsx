import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

interface BackgroundProps {
  path: string;
}

export default function Header() {
  return (
    <Background
      path={`${CONFIG.site.basePath}/assets/images/hero_021.png`}
      sx={{ minHeight: { lg: '616px', md: '490px', xs: '273px' } }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Container>
          <Grid container alignItems="center">
            <Grid size={{ lg: 4 }} offset={{ lg: 3 }}>
              <Paper sx={{ background: 'transparent' }}>
                <Title fontWeight={400} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  The
                </Title>
                <Title fontWeight={700} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  Silverback
                </Title>
                <Title fontWeight={400} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  Guarantee
                </Title>
              </Paper>
            </Grid>
            <Grid size={{ lg: 3 }} offset={{ lg: 1 }}>
              <Image
                src={`${CONFIG.site.basePath}/assets/images/coin_gray.png`}
                sx={{ width: { lg: '320px', md: '243px', xs: '130px' } }}
              />
            </Grid>
            <Grid size={{ lg: 5 }} offset={{ lg: 3 }}>
              <TextPaper>
                <Text
                  fontSize={{ lg: '1.25rem', md: '1.125rem', xs: '0.625rem' }}
                >{`It's time for the precious metals community to get off the bench and into the exciting world of digital currencies. Get started with our low-risk offer today!`}</Text>
              </TextPaper>
            </Grid>
          </Grid>
        </Container>
        <Image
          src={`${CONFIG.site.basePath}/assets/images/gorilla_041.png`}
          sx={{ height: { lg: '616px', md: '492px', xs: '273px' } }}
        />
      </Stack>
    </Background>
  );
}

const Background = styled(Paper)`
  background-image: url(${(props) => encodeURI(props.path)});
  background-position: 50% 50%;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Container = styled(Paper)`
  width: 100%;
  padding: 20px;
  background: transparent;
`;

const TextPaper = styled(Paper)`
  background: transparent;
  padding: 10px;
`;

const Text = styled(Typography)`
  font-family: 'Josefin Sans';
`;
const Title = styled(Typography)`
  line-height: 1;
`;
