import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  'No one knows what the future holds for money & value.',
  "Many die-hard precious metal stackers are waiting patiently for the Zombie Apocalypse or a solar flare to wipe out what remains of civilized society; they'll be there to show us the way to barter with shiny discs of gold, silver & copper.",
  'Meanwhile, the crypto community marches forward, imagining the world will continue to turn and society will continue to evolve and improve.',
];

export default function Journey() {
  return (
    <Container sx={{ p: '0 60px' }}>
      <Grid container alignItems="center">
        <Grid size={{ md: 6 }} sx={{ py: 2 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
            sx={{ width: { lg: 400, md: 320 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Typography
            variant="h2"
            fontFamily="Josefin San"
            fontWeight={400}
            color={themeConfig.palette.common.texit}
            mb={2}
          >
            But what does this have to do with Silverbugs?
          </Typography>
          {content.map((item) => (
            <Typography key={item} fontFamily="Josefin San" variant="h6" fontWeight={400} mb={2}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
