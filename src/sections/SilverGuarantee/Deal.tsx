import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const contents = [
  `Join the mineTXC mining pool by completing the form on the bottom of mineTXC.com. You'll send us your ugliest, dirtiest kilo of silver, or purchase one new from a vendor you like and drop-ship it to us.`,
  `If, during the term of your warranty period, you refer (3) new miners to our program, we will return your kilo bar at our expense and the warranty is voided. You get to keep your mining pool share and output.`,
  `We will mail you your welcome kit, including your new TXC Cold Storage Coin. Your TXC is sent each & every day to this coin. You agree to keep it safe, secure, and in its original condition.`,
  `After 2 months, if you do not exercise your option to return, your kilo of silver becomes our property.`,
  `We agree to keep your kilo of silver safe, secure & insured. You have 2 months from the date of your first TXC transfer to return the unaltered, unmodified coin to us at your expense, at which point we will promptly return your kilo bar to you, also at your expense.`,
  `You are welcome to participate in our Rapid Rewards program, however, your warranty is voided upon your first cash reward.`,
];

export default function Deal() {
  return (
    <Box
      sx={{
        background: themeConfig.palette.grey[100],
        fontFamily: 'Josefin Sans',
        padding: '50px 0',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {contents.map((content) => (
            <Grid size={{ md: 12, lg: 6 }}>
              <Box p={2}>
                <Grid container spacing={2}>
                  <Grid size={{ md: 3 }}>
                    <Image
                      src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                      sx={{ width: 120, height: 120, display: { xs: 'none', md: 'inline-flex' } }}
                    />
                  </Grid>
                  <Grid size={{ md: 9 }}>
                    <Typography>{content}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
