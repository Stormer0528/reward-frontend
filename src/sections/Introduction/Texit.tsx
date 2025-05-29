import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

import { Line } from './Line';

export function Texit() {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.vars.palette.grey['A200'],
        py: { xs: 4, md: 6 },
      })}
    >
      <Container>
        <Grid container spacing={2.5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Container>
              <Typography variant="h2" fontWeight={400}>
                For Texas by Texans, <br />
              </Typography>

              <Line>TXC is built for us.</Line>

              <Typography sx={{ mt: 4 }}>
                The cryptocurrency revolution has brought many changes to banking, finance & trade.
                Plenty of new and fancy technologies emerge on a regular basis that offer exotic
                contributions to the digital money ecosystem.
              </Typography>
              <Typography sx={{ mt: 4 }}>
                Unfortunately, few blockchains offer an incentive to participate in securing the
                network through mining, directly support a world-changing mission, or work as a
                usable form of money.
              </Typography>
              <Typography sx={{ mt: 4 }}>
                TEXITcoin does all this and more. Join us on the ground floor and help take TXC to
                the moon!
              </Typography>
            </Container>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} container>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomCard>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon1.png`} />
                <Title variant="h4">254 Block Reward</Title>
                <Typography>
                  An inflation-crushing block is mined every 3 minutes with coins to compensate
                  miners for securing transactions.
                </Typography>
              </CustomCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomCard>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon2.png`} />
                <Title variant="h4">O.OO pre-mine</Title>
                <Typography>
                  No pre-mined coins means everyone starts on a level playing field. Mining is
                  permissioned for Texas.
                </Typography>
              </CustomCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomCard>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon3.png`} />
                <Title variant="h4">3-Minute Spacing</Title>
                <Typography>
                  Lightning fast transactions are processed every 3 minutes. Enhancements are easy
                  to code and deploy.
                </Typography>
              </CustomCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomCard>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/texit-icon4.png`} />
                <Title variant="h4">695,662 Halving</Title>
                <Typography>
                  TXC is a blockchain designed to function for a century of growth. Future
                  generations of Texans will benefit.
                </Typography>
              </CustomCard>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const CustomCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  border: `1px solid ${theme.vars.palette.common.black}`,
  boxShadow: '5px 5px 20px 0 rgba(0, 0, 0, 0.4)',
  borderRadius: 0,
  textAlign: 'center',
  height: '100%',
}));

const Title = styled(Typography)(() => ({
  fontWeight: 400,
  margin: '20px 0',
}));
