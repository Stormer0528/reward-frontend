import MediaPlayer from 'react-player';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

interface BackgroundProps {
  path: string;
}

export default function Tale() {
  return (
    <Background path={`${CONFIG.ASSET_DIR}/assets/images/mapa_031.png`}>
      <Container sx={{ p: '60px 60px 0' }}>
        <Typography
          textAlign="center"
          color={themeConfig.palette.common.white}
          variant="h1"
          fontWeight={400}
        >
          A Tale of Two Cities
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ md: 6 }} sx={{ margin: { md: '100px 0', xs: '10px 0' } }}>
            <Box>
              <Typography variant="h2" fontWeight={400} color={themeConfig.palette.common.white}>
                Nashville Bitcoin 2024
              </Typography>
            </Box>
            <MediaPlayer
              url="https://www.youtube.com/embed/1HHQPD-Lb5o"
              width={300}
              height={200}
              controls
            />
          </Grid>
          <Grid size={{ md: 6 }} sx={{ margin: { md: '100px 0', xs: '10px 0' } }}>
            <Box>
              <Typography variant="h2" fontWeight={400} color={themeConfig.palette.common.white}>
                Chicago ANA 2024
              </Typography>
            </Box>
            <MediaPlayer
              url="https://www.youtube.com/embed/UMaJ6b1klDw"
              width={300}
              height={200}
              controls
            />
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
}

const Background = styled(Paper)<BackgroundProps>(({ path }) => ({
  backgroundColor: themeConfig.palette.common.texit,
  backgroundImage: `url(${encodeURI(path)})`,
  backgroundPosition: '50% 50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  objectFit: 'cover',
  display: 'block',
  borderRadius: 0,
  fontFamily: 'Josefin Sans',
}));
