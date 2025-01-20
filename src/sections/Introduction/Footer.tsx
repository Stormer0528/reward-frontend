import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/Iconify';
import DarkLogo from 'src/components/logo/dark-logo';

export default function Footer() {
  return (
    <Content>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid xs={12} md={6} lg={4}>
            <DarkLogo />
          </Grid>
          <Grid xs={12} md={6} lg={4} sx={{ textAlign: { xs: 'left', lg: 'center' } }}>
            <Text>© Copyright 2024 TEXITcoin.</Text>
            <Text>All Rights Reserved.</Text>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent={{ xs: 'flex-start', lg: 'flex-end' }}
          >
            <SocialAvatar icon="mage:tiktok-circle" />
            <SocialAvatar icon="logos:telegram" />
            <SocialAvatar icon="skill-icons:instagram" />
            <SocialAvatar icon="skill-icons:twitter" />
          </Grid>
        </Grid>
      </Container>
    </Content>
  );
}

const Content = styled(Paper)`
  background: #333333;
  padding: 30px;
  border-radius: 0;
`;

const Text = styled(Typography)`
  color: #ffffff;
  font-weight: 300;
  line-height: 1.6;
`;

const SocialAvatar = styled(Iconify)`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 12px;
`;
