import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Chris() {
  return (
    <Wrapper>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/chris.jpg`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Title fontSize={{ md: '3.75rem', xs: '2rem' }}>Meet Chris...</Title>
          <Text>
            Chris is the President of BEX Engraving & Mint in Fullerton, California. Chris and his
            siblings took over the family business in 1993, and have carried the family legacy for
            more than three decades since then, crafting some of the most highly detailed, quality
            tools, dies and coin minting the industry has seen. Chris and his team first worked with
            Bobby and the TXC team in 2009 when they cut the first dies for the Ron Paul Campaign
            for Liberty dies, and have been our go-to source ever since for steel coin manufacturing
            dies.
          </Text>
          <Info>
            <InfoText>Joined MineTXC: April 2024</InfoText>
            <InfoText>Total TXC: 300,000 Total</InfoText>
            <InfoText>Commission Earned: $20,000+</InfoText>
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
