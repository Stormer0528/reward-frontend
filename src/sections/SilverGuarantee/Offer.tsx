import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

interface BackgroundProps {
  path: string;
}

export default function Offer() {
  return (
    <Background path={`${CONFIG.site.basePath}/assets/images/texit-background.png`}>
      <Container sx={{ p: 10 }}>
        <Box sx={{ px: { md: 12, xs: 2 } }}>
          <Wrapper>
            <Title fontSize={{ md: '3.75rem', xs: '2rem' }}>The Offer:</Title>
            <Paper sx={{ px: { md: 30, xs: 2 } }}>
              <Title fontSize={{ md: '1.875rem', xs: '1.2rem' }}>
                SEND A KILO OF SILVER & MINE <Texitcoin>TEXITCOIN</Texitcoin> WITH US.
              </Title>
            </Paper>
            <Paper sx={{ px: { md: 14, xs: 2 } }}>
              <Typography fontSize="1.125rem">
                {`We'll send you a TXC Cold Storage Coin, linked to your mining output. Monitor your
                progress. If, anytime you are not satisfied with the results for 2 months from the
                date of your first TXC transfer, return your coin and we'll send back your exact
                same kilo of silver.`}
              </Typography>
            </Paper>
            <Paper sx={{ py: 4 }}>
              <Text fontSize="1.25rem" fontWeight={700}>
                Tommy did it. Chris did it.
              </Text>
              <Text fontSize="1.25rem" fontWeight={700}>
                And now, we invite you to do it too.
              </Text>
            </Paper>
          </Wrapper>
        </Box>
      </Container>
    </Background>
  );
}

const Background = styled(Paper)<BackgroundProps>`
  background: #262262;
  background-image: url(${(props) => encodeURI(props.path)});
  background-position: 50% 50%;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
  font-family: 'Josefin Sans';
  text-align: center;
`;

const Wrapper = styled(Paper)`
  padding: 20px;
`;

const Title = styled(Typography)`
  color: #262262;
  margin: 20px 0;
`;

const Text = styled(Typography)`
  color: #262262;
`;

const Texitcoin = styled.strong`
  color: #00492c;
`;
