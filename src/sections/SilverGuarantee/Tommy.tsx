import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = ['Joined MineTXC: July 2024', 'Total TXC: 9,000 Total', 'Commission Earned: $0'];

export default function Tommy() {
  return (
    <Container sx={{ p: '80px 60px' }}>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/tommy.jpg`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Typography
            variant="h1"
            fontWeight={400}
            fontFamily="Josefin San"
            color={themeConfig.palette.common.texit}
            mt={1}
            mb={2}
          >
            Meet Tommy...
          </Typography>
          <Typography variant="h6" fontFamily="Josefin San" fontWeight={400}>
            Tom Haines, the founder of Stacking.NYC, has been passionate about precious metals since
            his father introduced him to the hobby with a 1986 Silver Eagle during his childhood.
            Through Stacking.NYC, Tom aims to educate, entertain, and foster a peer-to-peer sales
            environment within the precious metals community. He actively engages with fellow
            enthusiasts on Instagram (@stacking.nyc), hosting trivia nights, auctions, and
            discussions to share his love for precious metals and their rich cultural and historical
            significance.
          </Typography>
          <Box
            sx={{
              background: '#00492c',
              color: themeConfig.palette.common.white,
              borderRadius: '20px 20px 0 0',
              display: 'inline-block',
              p: 2,
              mt: 4,
            }}
          >
            {content.map((item) => (
              <Typography
                key={item}
                variant="h6"
                color={themeConfig.palette.common.white}
                fontFamily="Josefin San"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
