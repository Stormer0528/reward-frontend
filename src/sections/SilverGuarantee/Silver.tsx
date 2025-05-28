import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Journey() {
  return (
    <Wrapper>
      <Grid container alignItems="center">
        <Grid size={{ md: 6 }} sx={{ py: 2 }}>
          <Image
            src={`${CONFIG.site.basePath}/assets/images/coin_gray.png`}
            sx={{ width: { lg: 400, md: 320 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Title fontSize={{ md: '3rem', xs: '1.8rem' }}>
            But what does this have to do with Silverbugs?
          </Title>
          <Text>No one knows what the future holds for money & value.</Text>
          <Text>
            {`Many die-hard precious metal stackers are waiting patiently for the Zombie Apocalypse or
            a solar flare to wipe out what remains of civilized society; they'll be there to show us
            the way to barter with shiny discs of gold, silver & copper.`}
          </Text>
          <Text>
            {`Meanwhile, the crypto community marches forward, imagining the world will continue to
            turn and society will continue to evolve and improve.`}
          </Text>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding: 0 60px;
`;

const Title = styled(Typography)`
  font-family: 'Josefin San';
  color: #262262;
  line-height: 1;
  margin-bottom: 20px;
`;

const Text = styled(Typography)`
  font-family: 'Josefin San';
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 20px;
`;
