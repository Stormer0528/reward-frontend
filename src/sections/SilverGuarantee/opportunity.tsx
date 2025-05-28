import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Opportunity() {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid size={{ md: 8 }} sx={{ pr: { md: 9 } }}>
          <Title fontSize={{ md: '3rem', xs: '1.6rem' }}>THE OPPORTUNITY</Title>
          <Text>
            The cryptokids got greedy; their carelessness handed over control of the bitcoin network
            to banks, megacorps & foreign nations. Today, most cryptos are centralized,
            non-mineable, and controlled by a handful of companies and foreign nations. Wallets can
            be arbitrarily frozen without due process.
          </Text>
          <Text>
            {`Once upon a time, you could mine Bitcoin from your home pc. Anyone with a computer could
            participate in securing the blockchain and earn a reward for the service. This is
            called “crypto mining”, and it's the digital equivalent of physical coin manufacturing.
            For individuals, it was an easy way to be involved with the creation and security of
            your own money.`}
          </Text>
          <Text>
            {`Unfortunately, mining Bitcoin has become a highly competitive "digital arms race", driven by ever-improving chip manufacturers in China and Taiwan.`}
          </Text>
          <Text>
            TEXITcoin returns control of the blockchain to individuals, using new hardware, a
            permissioned network, and Texas datacenters. TEXITcoin is our 2nd chance at crypto,
            returning digital currency to its original intended use of money by the people, for the
            people.
          </Text>
        </Grid>
        <Grid size={{ md: 4 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/opportunity.png`}
            sx={{ width: { lg: 400, md: 300 } }}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding: 80px 60px 0 60px;
`;

const Title = styled(Typography)`
  font-family: 'Josefin San';
  color: #262262;
  line-height: 1;
  margin-bottom: 30px;
`;

const Text = styled(Typography)`
  font-family: 'Josefin San';
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 20px;
`;
