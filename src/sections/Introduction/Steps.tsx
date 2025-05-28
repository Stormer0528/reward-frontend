import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Steps() {
  return (
    <CustomPaper>
      <Container>
        <Header>Get Started in 3 Easy Steps...</Header>
        <Description container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/step-icon1.png`} />
                </Avatar>
              </ImageContent>
              <Title>Join Right Now</Title>
              <Text>
                {`Complete the form below and send your payment. We'll get you setup and point the
                mine at your shiny new Cold Storage Coin.`}
              </Text>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/step-icon2.png`} />
                </Avatar>
              </ImageContent>
              <Title>Begin Earning Immediately</Title>
              <Text>
                Once the mine is configured and connected to your Coin, your wallet will begin
                receiving $TXC payouts daily. Save or monetize!
              </Text>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/step-icon3.png`} />
                </Avatar>
              </ImageContent>
              <Title>Spread the Word</Title>
              <Text>
                {`You're on the rocket ship, and there's nothing left to do. But refer 3 and get more
                mining power for free! Or use our Rapid Rewards and get cash!`}
              </Text>
            </ContentCard>
          </Grid>
        </Description>
        <Footer>
          *Check out the <strong>Rapid Rewards</strong> page for more details on our compensation
          plan.
        </Footer>
      </Container>
    </CustomPaper>
  );
}

const CustomPaper = styled(Paper)`
  border-radius: 0;
  padding: 50px 0 20px;
  text-align: center;
`;

const ContentCard = styled(Card)`
  padding: 30px;
  background-color: #f2f2f2;
  border-radius: 0;
`;

const Description = styled(Grid)`
  padding: 40px 20px;
`;

const Header = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
`;

const Footer = styled(Typography)`
  color: #ffffff;
`;

const Avatar = styled(Typography)`
  background-color: #262262;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 13px;
`;

const ImageContent = styled(Paper)`
  display: flex;
  justify-content: center;
  background: transparent;
`;

const IconImg = styled(Image)`
  width: 42px;
  height: 42px;
`;

const Title = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 20px 0;
`;

const Text = styled(Typography)`
  font-style: italic;
`;
