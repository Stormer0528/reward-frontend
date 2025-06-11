import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  'The cryptokids got greedy; their carelessness handed over control of the bitcoin network to banks, megacorps & foreign nations. Today, most cryptos are centralized, non-mineable, and controlled by a handful of companies and foreign nations. Wallets can be arbitrarily frozen without due process.',
  'Once upon a time, you could mine Bitcoin from your home pc. Anyone with a computer could participate in securing the blockchain and earn a reward for the service. This is called “crypto mining”, and it’s the digital equivalent of physical coin manufacturing. For individuals, it was an easy way to be involved with the creation and security of your own money.',
  'Unfortunately, mining Bitcoin has become a highly competitive "digital arms race", driven by ever-improving chip manufacturers in China and Taiwan.',
  'TEXITcoin returns control of the blockchain to individuals, using new hardware, a permissioned network, and Texas datacenters. TEXITcoin is our 2nd chance at crypto, returning digital currency to its original intended use of money by the people, for the people.',
];

export default function Opportunity() {
  return (
    <Container sx={{ p: '80px 60px 0 60px' }}>
      <Grid container spacing={4}>
        <Grid size={{ md: 8 }} sx={{ pr: { md: 9 } }}>
          <Typography
            variant="h2"
            fontWeight={400}
            fontFamily="Josefin San"
            color={themeConfig.palette.common.texit}
            mb={4}
          >
            THE OPPORTUNITY
          </Typography>
          {content.map((item) => (
            <Typography key={item} variant="h6" fontFamily="Josefin San" fontWeight={400} mb={2}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid size={{ md: 4 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/opportunity.png`}
            sx={{ width: { lg: 400, md: 300 } }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
