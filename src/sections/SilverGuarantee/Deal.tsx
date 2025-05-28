import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Deal() {
  return (
    <CustomPaper>
      <Container>
        <Grid container spacing={3}>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    {`Join the mineTXC mining pool by completing the form on the bottom of
                    mineTXC.com. You'll send us your ugliest, dirtiest kilo of silver, or purchase
                    one new from a vendor you like and drop-ship it to us.`}
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    If, during the term of your warranty period, you refer (3) new miners to our
                    program, we will return your kilo bar at our expense and the warranty is voided.
                    You get to keep your mining pool share and output.
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    We will mail you your welcome kit, including your new TXC Cold Storage Coin.
                    Your TXC is sent each & every day to this coin. You agree to keep it safe,
                    secure, and in its original condition.
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    After 2 months, if you do not exercise your option to return, your kilo of
                    silver becomes our property.
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    We agree to keep your kilo of silver safe, secure & insured. You have 2 months
                    from the date of your first TXC transfer to return the unaltered, unmodified
                    coin to us at your expense, at which point we will promptly return your kilo bar
                    to you, also at your expense.
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
          <Grid size={{ md: 12, lg: 6 }}>
            <ContentCard>
              <Grid container>
                <Grid size={{ md: 3 }}>
                  <Image
                    src={`${CONFIG.ASSET_DIR}/assets/images/coin_gray.png`}
                    width={120}
                    height={120}
                    display={{ xs: 'none', md: 'inline-flex' }}
                  />
                </Grid>
                <Grid size={{ md: 9 }}>
                  <Typography>
                    You are welcome to participate in our Rapid Rewards program, however, your
                    warranty is voided upon your first cash reward.
                  </Typography>
                </Grid>
              </Grid>
            </ContentCard>
          </Grid>
        </Grid>
      </Container>
    </CustomPaper>
  );
}

const CustomPaper = styled(Paper)`
  background: #f2f2f2;
  padding: 50px 0;
  font-family: 'Josefin Sans';
`;

const ContentCard = styled(Paper)`
  background: transparent;
  padding: 16px;
`;
