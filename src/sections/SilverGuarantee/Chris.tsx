import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  'Joined MineTXC: April 2024',
  'Total TXC: 300,000 Total',
  'Commission Earned: $20,000+',
];

export default function Chris() {
  return (
    <Container sx={{ padding: '80px 60px' }}>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/chris.jpg`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Typography
            variant="h1"
            fontWeight={500}
            fontFamily="Josefin San"
            color={themeConfig.palette.common.texit}
            mb={2}
          >
            Meet Chris...
          </Typography>
          <Typography fontFamily="Josefin San" variant="h6" fontWeight={400}>
            Chris is the President of BEX Engraving & Mint in Fullerton, California. Chris and his
            siblings took over the family business in 1993, and have carried the family legacy for
            more than three decades since then, crafting some of the most highly detailed, quality
            tools, dies and coin minting the industry has seen. Chris and his team first worked with
            Bobby and the TXC team in 2009 when they cut the first dies for the Ron Paul Campaign
            for Liberty dies, and have been our go-to source ever since for steel coin manufacturing
            dies.
          </Typography>
          <Box
            sx={{
              marginTop: 3.5,
              padding: 2.5,
              display: 'inline-block',
              borderRadius: '20px 20px 0 0',
              background: '#00492c',
            }}
          >
            {content.map((item) => (
              <Typography
                key={item}
                variant="h6"
                fontWeight={400}
                fontFamily="Josefin San"
                color={themeConfig.palette.common.white}
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
