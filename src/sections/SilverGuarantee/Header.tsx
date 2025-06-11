import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
      path={`${CONFIG.ASSET_DIR}/assets/images/hero_021.png`}
      sx={{ minHeight: { lg: '616px', md: '490px', xs: '273px' } }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box width="100%" p={3}>
          <Grid container alignItems="center">
            <Grid size={{ lg: 4 }} offset={{ lg: 3 }}>
              <Box sx={{ background: 'transparent' }}>
                <Title fontWeight={400} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  The
                </Title>
                <Title fontWeight={700} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  Silverback
                </Title>
                <Title fontWeight={400} fontSize={{ lg: '6rem', md: '4.5rem', xs: '1.625rem' }}>
                  Guarantee
                </Title>
              </Box>
            </Grid>
            <Grid size={{ lg: 3 }} offset={{ lg: 1 }}>
              <Image
                src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                sx={{ width: { lg: '320px', md: '243px', xs: '130px' } }}
              />
            </Grid>
            <Grid size={{ lg: 5 }} offset={{ lg: 3 }}>
              <Box p={1}>
                <Typography
                  fontFamily="Josefin Sans"
                  fontSize={{ lg: '1.25rem', md: '1.125rem', xs: '0.625rem' }}
                >
                  It&apos;s time for the precious metals community to get off the bench and into the
                  exciting world of digital currencies. Get started with our low-risk offer today!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Image
          src={`${CONFIG.ASSET_DIR}/assets/images/gorilla_041.png`}
          sx={{ height: { lg: '616px', md: '492px', xs: '273px' } }}
        />
      </Stack>
    </Background>
  );
}

const Background = styled(Box)<BackgroundProps>(({ path }) => ({
  display: 'block',
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundImage: `url(${encodeURI(path)})`,
}));

const Title = styled(Typography)`
  line-height: 1;
`;
