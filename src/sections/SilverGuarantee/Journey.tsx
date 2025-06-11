import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  'No one knows what the future holds for money & value.',
  'Many die-hard precious metal stackers are waiting patiently for the Zombie Apocalypse or a solar flare to wipe out what remains of civilized society; they’ll be there to show us the way to barter with shiny discs of gold, silver & copper.',
  'Meanwhile, the crypto community marches forward, imagining the world will continue to turn and society will continue to evolve and improve.',
];

export default function Journey() {
  return (
    <Container sx={{ padding: '0 60px' }}>
      <Grid container alignItems="center">
        <Grid size={{ md: 6 }} sx={{ py: 2 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/journey.png`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Typography
            variant="h1"
            fontWeight={400}
            color={themeConfig.palette.common.texit}
            fontFamily="Josefin San"
            marginBottom={3}
          >
            The Journey.
          </Typography>
          {content.map((item) => (
            <Typography variant="h6" fontFamily="Josefin San" fontWeight={400} mb={2}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
