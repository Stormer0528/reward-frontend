import styled from 'styled-components';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function WhatsIn() {
  return (
    <CustomPaper>
      <Container>
        <Header>{`What's In It for You?`}</Header>
        <Description container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/what-icon1.png`} />
                </Avatar>
              </ImageContent>
              <Title>UNLIMITED TXC</Title>
              <Typography>
                Once your enrollment is complete, freshly minted TXC is paid out to your wallet
                24/7/365; no middle-man, commission manager or delays! $TXC direct to you!
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/what-icon2.png`} />
                </Avatar>
              </ImageContent>
              <Title>ONE, TWO, FREE!</Title>
              <Typography>
                {`Share your experience with friends and family. Crypto is exciting and there's lots
                of room for everyone to win. Refer 3 and we'll light up more mining power just for
                you!`}
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Avatar>
                  <IconImg src={`${CONFIG.site.basePath}/assets/intro/what-icon3.png`} />
                </Avatar>
              </ImageContent>
              <Title>LIMITLESS BINARY</Title>
              <Typography>
                {`Build out your network and acquire a point for each new member referred anywhere on
                your team. Get $1000 for each 3 matched points, up to 3 times per week!*`}
              </Typography>
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
  background-color: #262262;
  border-radius: 0;
  padding: 50px 0 20px;
  text-align: center;
`;

const ContentCard = styled(Card)`
  padding: 30px;
`;

const Description = styled(Grid)`
  padding: 40px 20px;
`;

const Header = styled(Typography)`
  font-size: 3rem;
  color: #ffffff;
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
`;

const IconImg = styled(Image)`
  width: 42px;
  height: 42px;
`;

const Title = styled(Typography)`
  color: #262262;
  font-size: 1.875rem;
  font-weight: 500;
  margin: 20px 0;
`;
