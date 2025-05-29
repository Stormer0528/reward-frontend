import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

import { JoinNowButton } from './components/JoinNowButton';

export function Brief() {
  return (
    <Container sx={{ mb: 3, fontFamily: 'sans-serif' }}>
      <Grid container sx={{ mt: '50px' }} alignItems="center" spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" fontWeight={400}>
            TEXITcoin is your <br />
            <b>second chance</b> at
          </Typography>
          <Typography
            variant="h2"
            fontWeight={400}
            component="span"
            sx={{
              position: 'relative',
              '::after': {
                content: '""',
                borderBottom: '2px solid #000',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -5,
              },
            }}
          >
            crypto.
          </Typography>

          <Typography sx={{ mt: 4 }}>
            Faster, cheaper and better than Bitcoin in almost every way, our passionate affiliates
            are on track to make $TXC bigger than the world&apos;s leading crypto. Join us, help
            secure the TEXITcoin network, and play an active role in the success of $TXC.
          </Typography>

          <JoinNowButton sx={{ mt: 3 }} />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}
        >
          <Image src={`${CONFIG.ASSET_DIR}/assets/images/texitcoin-key.png`} />
        </Grid>
      </Grid>
    </Container>
  );
}
