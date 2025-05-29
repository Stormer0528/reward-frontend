import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

export function Steps() {
  return (
    <Box sx={{ my: { xs: 4, md: 6 } }}>
      <Container>
        <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 }}}>
          Get Started in 3 Easy Steps...
        </Typography>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageWrapper>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/step-icon1.png`} />
              </ImageWrapper>
              <Typography variant="h5" sx={{ my: 2 }}>
                Join Right Now
              </Typography>
              <Typography>
                <i>
                  Complete the form below and send your payment. We&apos;ll get you setup and point
                  the mine at your shiny new Cold Storage Coin.
                </i>
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageWrapper>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/step-icon2.png`} />
              </ImageWrapper>
              <Typography variant="h5" sx={{ my: 2 }}>
                Begin Earning Immediately
              </Typography>
              <Typography>
                <i>
                  Once the mine is configured and connected to your Coin, your wallet will begin
                  receiving $TXC payouts daily. Save or monetize!
                </i>
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageWrapper>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/step-icon3.png`} />
              </ImageWrapper>
              <Typography variant="h5" sx={{ my: 2 }}>
                Spread the Word
              </Typography>
              <Typography>
                <i>
                  You&apos;re on the rocket ship, and there&apos;s nothing left to do. But refer 3
                  and get more mining power for free! Or use our Rapid Rewards and get cash!
                </i>
              </Typography>
            </ContentCard>
          </Grid>
        </Grid>
        <Typography color="white">
          *Check out the{' '}
          <Link
            component={RouterLink}
            href={paths.pages.rapidRewards}
            variant="body1"
            color="white"
          >
            Rapid Rewards
          </Link>{' '}
          page for more details on our compensation plan.
        </Typography>
      </Container>
    </Box>
  );
}

const ContentCard = styled(Box)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(6),
  backgroundColor: theme.vars.palette.grey['A200'],
  textAlign: 'center',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: themeConfig.palette.common.texit,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50%',
  width: 70,
  height: 70,
  padding: theme.spacing(2),
  margin: '0 auto',
}));
