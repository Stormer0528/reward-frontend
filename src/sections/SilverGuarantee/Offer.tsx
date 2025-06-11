import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

interface BackgroundProps {
  path: string;
}

export default function Offer() {
  return (
    <Background path={`${CONFIG.ASSET_DIR}/assets/images/texit-background.png`}>
      <Container sx={{ p: 10 }}>
        <Box sx={{ px: { md: 12, xs: 2 } }}>
          <Box sx={{ p: 3, background: themeConfig.palette.common.white }}>
            <Title variant="h1" fontWeight={500}>
              The Offer:
            </Title>
            <Box sx={{ px: { md: 30, xs: 2 } }}>
              <Title variant="h3" fontWeight={400}>
                SEND A KILO OF SILVER & MINE <Texitcoin>TEXITCOIN</Texitcoin> WITH US.
              </Title>
            </Box>
            <Box sx={{ px: { md: 14, xs: 2 } }}>
              <Typography variant="h6" fontWeight={400}>
                We&apos;ll send you a TXC Cold Storage Coin, linked to your mining output. Monitor
                your progress. If, anytime you are not satisfied with the results for 2 months from
                the date of your first TXC transfer, return your coin and we&apos;ll send back your
                exact same kilo of silver.
              </Typography>
            </Box>
            <Box sx={{ py: 4 }}>
              <Text variant="h5" fontWeight={700}>
                Tommy did it. Chris did it.
              </Text>
              <Text variant="h5" fontWeight={700}>
                And now, we invite you to do it too.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Background>
  );
}

const Background = styled(Box)<BackgroundProps>(({ path }) => ({
  background: themeConfig.palette.common.texit,
  backgroundImage: `url(${encodeURI(path)})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  objectFit: 'cover',
  display: 'block',
  borderRadius: 0,
  fontFamily: 'Josefin Sans',
  textAlign: 'center',
}));

const Text = styled(Typography)(() => ({
  color: themeConfig.palette.common.texit,
}));

const Title = styled(Text)`
  margin: 20px 0;
`;

const Texitcoin = styled('strong')`
  color: #00492c;
`;
