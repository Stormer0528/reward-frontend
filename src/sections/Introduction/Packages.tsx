import { useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { PACKAGES } from 'src/consts';
import { themeConfig } from 'src/theme';

import { Iconify } from 'src/components/Iconify';

const features = {
  single: [
    '100 megahash mining power',
    'One affiliate tracking center',
    'Unique tracking code & URL',
    'Back-office training & tools',
    'Dedicated Customer Support',
    'Unlimited hosting & electricity',
  ],
  triple: [
    '300 megahash mining power',
    'One affiliate tracking center',
    'Unique tracking code & URL',
    'Back-office training & tools',
    'Dedicated Customer Support',
    'Unlimited hosting & electricity',
  ],
  builder: [
    '900 megahash mining power',
    'Three affiliate tracking center',
    'Unique tracking code & URL',
    'Back-office training & tools',
    'Dedicated Customer Support',
    'Unlimited hosting & electricity',
  ],
};

export function Packages() {
  const navigate = useNavigate();

  const goToJoin = (packageId: string) => {
    navigate(`${paths.pages.intro}#sign-up`, { state: { packageId } });
  };

  return (
    <Box textAlign="center" py={5}>
      <Container>
        <Typography variant="h2" sx={{ my: {xs: 2, md: 4} }}>
          3 Packages to Choose From...
        </Typography>
        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={5} sx={{ py: 3 }}>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <CustomCard>
                <Typography variant="h4">Single</Typography>
                <Typography variant="h2" py={1}>
                  $995
                </Typography>
                <Typography variant="h5" mb={5}>
                  one-time fee
                </Typography>

                {features.single.map((feature) => (
                  <Stack direction="row" sx={{ mb: 1 }} key={feature}>
                    <Iconify icon="radix-icons:dot-filled" sx={{ mt: 0.6 }} />
                    <Typography>{feature}</Typography>
                  </Stack>
                ))}

                <CustomButton
                  variant="contained"
                  endIcon={<Iconify icon="pajamas:long-arrow" sx={{ mt: 0.5 }} />}
                  onClick={() => goToJoin(PACKAGES[0])}
                >
                  Get Started Now
                </CustomButton>
              </CustomCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <TripleCard>
                <Box sx={{ background: '#262262', color: '#ffffff', padding: '30px 30px 0' }}>
                  <Typography variant="h4">TRIPLE Play</Typography>
                  <Typography variant="h2" sx={{ py: 1 }}>
                    $2985
                  </Typography>
                  <Typography variant="h5" sx={{ pb: 2 }}>
                    one-time fee
                  </Typography>
                </Box>
                <Box sx={{ background: '#000000', color: '#ffffff', padding: '20px 30px 20px' }}>
                  {features.triple.map((feature) => (
                    <Stack direction="row" sx={{ mb: 1 }} key={feature}>
                      <Iconify icon="radix-icons:dot-filled" sx={{ mt: 0.6 }} />
                      <Typography>{feature}</Typography>
                    </Stack>
                  ))}

                  <CustomButton
                    variant="contained"
                    endIcon={<Iconify icon="pajamas:long-arrow" sx={{ mt: 0.5 }} />}
                    onClick={() => goToJoin(PACKAGES[1])}
                  >
                    Triple Your Output
                  </CustomButton>
                </Box>
              </TripleCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <CustomCard>
                <Typography variant="h4">BUILDER Plan</Typography>
                <Typography variant="h2" py={1}>
                  $8955
                </Typography>
                <Typography variant="h5" mb={5}>
                  one-time fee
                </Typography>

                {features.builder.map((feature) => (
                  <Stack direction="row" sx={{ mb: 1 }} key={feature}>
                    <Iconify icon="radix-icons:dot-filled" sx={{ mt: 0.6 }} />
                    <Typography>{feature}</Typography>
                  </Stack>
                ))}

                <CustomButton
                  variant="contained"
                  endIcon={<Iconify icon="pajamas:long-arrow" sx={{ mt: 0.5 }} />}
                  onClick={() => goToJoin(PACKAGES[2])}
                >
                  Build Your Network
                </CustomButton>
              </CustomCard>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

const CustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 5),
  background: themeConfig.palette.common.texit,
  marginTop: theme.spacing(3),
}));

const TripleCard = styled(Card)(() => ({
  boxShadow: '5px 5px 20px 0 rgba(0, 0, 0, 0.1)',
}));

const CustomCard = styled(TripleCard)(({ theme }) => ({
  padding: theme.spacing(3, 4),
}));
