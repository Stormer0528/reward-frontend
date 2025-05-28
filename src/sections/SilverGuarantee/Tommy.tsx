import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Tommy() {
  return (
    <Wrapper>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Image
            src={`${CONFIG.site.basePath}/assets/images/tommy.jpg`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Title fontSize={{ md: '3.75rem', xs: '2rem' }}>Meet Tommy...</Title>
          <Text>
            Tom Haines, the founder of Stacking.NYC, has been passionate about precious metals since
            his father introduced him to the hobby with a 1986 Silver Eagle during his childhood.
            Through Stacking.NYC, Tom aims to educate, entertain, and foster a peer-to-peer sales
            environment within the precious metals community. He actively engages with fellow
            enthusiasts on Instagram (@stacking.nyc), hosting trivia nights, auctions, and
            discussions to share his love for precious metals and their rich cultural and historical
            significance.
          </Text>
          <Info>
            <InfoText>Joined MineTXC: July 2024</InfoText>
            <InfoText>Total TXC: 9,000 Total</InfoText>
            <InfoText>Commission Earned: $0</InfoText>
          </Info>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding: 80px 60px;
`;

const Title = styled(Typography)`
  margin-top: 10px;
  font-family: 'Josefin San';
  color: #262262;
  line-height: 1;
  margin-bottom: 20px;
`;

const Text = styled(Typography)`
  font-family: 'Josefin San';
  font-size: 1.125rem;
  font-weight: 400;
`;

const Info = styled(Paper)`
  margin-top: 30px;
  display: inline-block;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  background: #00492c;
`;

const InfoText = styled(Typography)`
  color: #ffffff;
  font-size: 1.25rem;
  font-family: 'Josefin San';
`;
