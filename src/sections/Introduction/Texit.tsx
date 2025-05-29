import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export function Texit() {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.vars.palette.grey['A200'],
        py: { xs: 4, md: 6 },
      })}
    >
      <Container>
        <Description container spacing={2.5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Container>
              <TexitTitle>For Texas by Texans,</TexitTitle>
              <TexitTitle>
                <strong>TXC is built for us.</strong>
              </TexitTitle>
              <Line />
              <Text>
                The cryptocurrency revolution has brought many changes to banking, finance & trade.
                Plenty of new and fancy technologies emerge on a regular basis that offer exotic
                contributions to the digital money ecosystem.
              </Text>
              <Text>
                Unfortunately, few blockchains offer an incentive to participate in securing the
                network through mining, directly support a world-changing mission, or work as a
                usable form of money.
              </Text>
              <Text>
                TEXITcoin does all this and more. Join us on the ground floor and help take TXC to
                the moon!
              </Text>
            </Container>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} container>
            <Grid size={{ xs: 12, md: 6 }}>
              <ContentCard sx={{ height: { xs: '280px', md: '370px', lg: '290px' } }}>
                <IconImg src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon1.png`} />
                <Title>254 Block Reward</Title>
                <Typography>
                  An inflation-crushing block is mined every 3 minutes with coins to compensate
                  miners for securing transactions.
                </Typography>
              </ContentCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ContentCard sx={{ height: { xs: '280px', md: '370px', lg: '290px' } }}>
                <IconImg src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon2.png`} />
                <Title>O.OO pre-mine</Title>
                <Typography>
                  No pre-mined coins means everyone starts on a level playing field. Mining is
                  permissioned for Texas.
                </Typography>
              </ContentCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ContentCard sx={{ height: { xs: '280px', md: '370px', lg: '290px' } }}>
                <IconImg src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon3.png`} />
                <Title>3-Minute Spacing</Title>
                <Typography>
                  Lightning fast transactions are processed every 3 minutes. Enhancements are easy
                  to code and deploy.
                </Typography>
              </ContentCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ContentCard sx={{ height: { xs: '280px', md: '370px', lg: '290px' } }}>
                <IconImg src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon4.png`} />
                <Title>695,662 Halving</Title>
                <Typography>
                  TXC is a blockchain designed to function for a century of growth. Future
                  generations of Texans will benefit.
                </Typography>
              </ContentCard>
            </Grid>
          </Grid>
        </Description>
      </Container>
    </Box>
  );
}

const ContentCard = styled(Card)`
  padding: 25px;
  border: 1px solid #000000;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 0;
  text-align: center;
`;

const Description = styled(Grid)`
  padding: 40px 20px;
`;

const IconImg = styled(Image)`
  width: 42px;
  height: 42px;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 20px 0;
`;

const TexitTitle = styled(Typography)`
  font-size: 3rem;
  line-height: 1.1;
`;

const Line = styled(Divider)`
  width: 80%;
  margin: 20px 0px;
  border: 1.2px solid #000000;
`;

const Text = styled(Typography)`
  margin-bottom: 40px;
`;
