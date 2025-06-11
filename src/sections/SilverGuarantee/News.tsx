import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  {
    date: 'June 29th, 2024',
    title: 'Our first kilo of silver arrives!',
    description: 'Just when we thought the Postal Service disappeared the package...',
    image: `${CONFIG.ASSET_DIR}/assets/images/news-1.png`,
  },
  {
    date: 'June 29th, 2024',
    title: 'Our first kilo of silver arrives!',
    description: 'Just when we thought the Postal Service disappeared the package...',
    image: `${CONFIG.ASSET_DIR}/assets/images/news-2.png`,
  },
  {
    date: 'June 29th, 2024',
    title: 'Our first kilo of silver arrives!',
    description: 'Just when we thought the Postal Service disappeared the package...',
    image: `${CONFIG.ASSET_DIR}/assets/images/news-3.png`,
  },
];

export default function News() {
  return (
    <Container>
      <Box p="60px 0">
        <Typography variant="h2" textAlign="center" mb={3}>
          News & Updates
        </Typography>
        <Grid container spacing={3}>
          {/* TODO: NEED THIS KIND OF GRID SIZE? */}
          {content.map(({ date, title, description, image }, index) => (
            <Grid key={index} size={{ md: 4, lg: 4 }}>
              <Box border={`1px solid ${themeConfig.palette.common.black}`} borderRadius={0}>
                <Image src={image} />
                <Box p={4}>
                  <Typography>{date}</Typography>
                  <Typography
                    variant="h4"
                    fontWeight={400}
                    color={themeConfig.palette.common.texit}
                    m="20px 0"
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ pb: 3 }}>{description}</Typography>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color={themeConfig.palette.common.texit}
                  >
                    READ MORE
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
