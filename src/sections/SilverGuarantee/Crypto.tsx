import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

export default function Crypto() {
  return (
    <Container sx={{ padding: '80px 60px 0 60px' }}>
      <Grid container spacing={4}>
        <Grid size={{ md: 6 }}>
          <Title variant="h1" fontWeight={400}>
            Crypto is exciting...
          </Title>
          <Text variant="h6" fontWeight={400}>
            The community is growing - it&apos;s where the action is! Blockchain technology has been
            around for 16 years now. Now a multi-trillion dollar industry, the world of digital
            currency is evolving in new and strange directions, including non-fungible tokens,
            in-game rewards, asset tracking and authentication, and each year new & exciting
            advancements are introduced to the community.
          </Text>
          <Text variant="h6" fontWeight={400}>
            These vastly different conventions - both the largest of their type in the USA - tell an
            important tale of what lays ahead for both industries.
          </Text>
        </Grid>
        <Grid size={{ md: 6 }} sx={{ py: 2 }}>
          <Image
            src={`${CONFIG.ASSET_DIR}/assets/images/crypto.png`}
            sx={{ width: { lg: 458, md: 400 } }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

const Title = styled(Typography)(() => ({
  fontFamily: 'Josefin San',
  color: themeConfig.palette.common.texit,
  marginBottom: 30,
}));

const Text = styled(Typography)(() => ({
  fontFamily: 'Josefin San',
  marginBottom: 20,
}));
