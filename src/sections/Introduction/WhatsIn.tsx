import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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

export function WhatsIn() {
  return (
    <Box
      sx={{
        bgcolor: themeConfig.palette.common.texit,
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" color="white">
          What&apos;s In It for You?
        </Typography>
        <Grid container spacing={2.5} sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 2, md: 4 } }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/what-icon1.png`} />
              </ImageContent>
              <Title variant='h3'>UNLIMITED TXC</Title>
              <Typography>
                Once your enrollment is complete, freshly minted TXC is paid out to your wallet
                24/7/365; no middle-man, commission manager or delays! $TXC direct to you!
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/what-icon2.png`} />
              </ImageContent>
              <Title variant='h3'>ONE, TWO, FREE!</Title>
              <Typography>
                Share your experience with friends and family. Crypto is exciting and there&apos;s
                lots of room for everyone to win. Refer 3 and we&apos;ll light up more mining power
                just for you!
              </Typography>
            </ContentCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ContentCard>
              <ImageContent>
                <Image src={`${CONFIG.ASSET_DIR}/assets/intro/what-icon3.png`} />
              </ImageContent>
              <Title variant='h3'>LIMITLESS BINARY</Title>
              <Typography>
                Build out your network and acquire a point for each new member referred anywhere on
                your team. Get $1000 for each 3 matched points, up to 3 times per week!*
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

const ContentCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(6),
}));

const ImageContent = styled(Box)(({ theme }) => ({
  backgroundColor: themeConfig.palette.common.texit,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50%',
  width: 70,
  height: 70,
  padding: theme.spacing(2),
  margin: '0 auto',
}));

const Title = styled(Typography)(({theme}) => ({
  color: themeConfig.palette.common.texit,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
