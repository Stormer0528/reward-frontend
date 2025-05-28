import styled from 'styled-components';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Crypto() {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid size={{ md: 6 }}>
          <Title fontSize={{ md: '3.75rem', xs: '2rem' }}>Crypto is exciting...</Title>
          <Text>
            {`The community is growing - it's where the action is! Blockchain technology has been
            around for 16 years now. Now a multi-trillion dollar industry, the world of digital
            currency is evolving in new and strange directions, including non-fungible tokens,
            in-game rewards, asset tracking and authentication, and each year new & exciting
            advancements are introduced to the community.`}
          </Text>
          <Text>
            {`These vastly different conventions - both
            the largest of their type in the USA - tell an important tale of what lays ahead for
            both industries.`}
          </Text>
        </Grid>
        <Grid size={{ md: 6 }} sx={{ py: 2 }}>
          <Image
            src={`${CONFIG.site.basePath}/assets/images/crypto.png`}
            sx={{ width: { lg: 458, md: 400 } }}
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
