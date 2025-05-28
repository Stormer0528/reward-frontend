import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { PACKAGES } from 'src/consts';

import { Iconify } from 'src/components/Iconify';

export default function Packages() {
  const navigate = useNavigate();

  const goToJoin = (packageId: string) => {
    navigate(`${paths.pages.intro.root}#sign-up`, { state: { packageId } });
  };

  return (
    <CustomPaper>
      <Container>
        <Header>3 Packages to Choose From...</Header>
        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={5} sx={{ py: 3 }}>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <ContentCard>
                <Typography variant="h4">Single</Typography>
                <Typography variant="h2" sx={{ py: 1 }}>
                  $995
                </Typography>
                <Typography variant="h5" sx={{ pb: 2 }}>
                  one-time fee
                </Typography>
                <Stack direction="row" sx={{ pb: 1, pt: 3 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>100 megahash mining power</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>One affiliate tracking center</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Unique tracking code & URL</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Back-office training & tools</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Dedicated Customer Support</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Unlimited hosting & electricity</Typography>
                </Stack>

                <CustomButton
                  variant="contained"
                  color="secondary"
                  endIcon={<Iconify icon="pajamas:long-arrow" />}
                  onClick={() => goToJoin(PACKAGES[0])}
                  sx={{ my: 1 }}
                >
                  Get Started Now
                </CustomButton>
              </ContentCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <SecondCard>
                <CardHeader>
                  <Typography variant="h4">TRIPLE Play</Typography>
                  <Typography variant="h2" sx={{ py: 1 }}>
                    $2985
                  </Typography>
                  <Typography variant="h5" sx={{ pb: 2 }}>
                    one-time fee
                  </Typography>
                </CardHeader>
                <CardBody>
                  <Stack direction="row" sx={{ pb: 1, pt: 3 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>300 megahash mining power</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ pb: 1 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>One affiliate tracking center</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ pb: 1 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>Unique tracking code & URL</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ pb: 1 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>Back-office training & tools</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ pb: 1 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>Dedicated Customer Support</Typography>
                  </Stack>
                  <Stack direction="row" sx={{ pb: 1 }}>
                    <Iconify icon="radix-icons:dot-filled" />
                    <Typography>Unlimited hosting & electricity</Typography>
                  </Stack>

                  <CustomButton
                    variant="contained"
                    color="secondary"
                    endIcon={<Iconify icon="pajamas:long-arrow" />}
                    onClick={() => goToJoin(PACKAGES[1])}
                    sx={{ my: 1 }}
                  >
                    Triple Your Output
                  </CustomButton>
                </CardBody>
              </SecondCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 4 }}>
              <ContentCard>
                <Typography variant="h4">BUILDER Plan</Typography>
                <Typography variant="h2" sx={{ py: 1 }}>
                  $8955
                </Typography>
                <Typography variant="h5" sx={{ pb: 2 }}>
                  one-time fee
                </Typography>
                <Stack direction="row" sx={{ pb: 1, pt: 3 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>900 megahash mining power</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Three affiliate tracking center</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Unique tracking code & URL</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Back-office training & tools</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Dedicated Customer Support</Typography>
                </Stack>
                <Stack direction="row" sx={{ pb: 1 }}>
                  <Iconify icon="radix-icons:dot-filled" />
                  <Typography>Unlimited hosting & electricity</Typography>
                </Stack>

                <CustomButton
                  variant="contained"
                  color="secondary"
                  endIcon={<Iconify icon="pajamas:long-arrow" />}
                  onClick={() => goToJoin(PACKAGES[2])}
                  sx={{ my: 1 }}
                >
                  Build Your Network
                </CustomButton>
              </ContentCard>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </CustomPaper>
  );
}

const CustomPaper = styled(Paper)`
  border-radius: 0;
  padding: 50px 0;
  text-align: center;
`;

const Header = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  margin: 30px 0;
`;

const ContentCard = styled(Card)`
  padding: 20px 30px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
`;

const SecondCard = styled(Card)`
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
`;

const CustomButton = styled(Button)`
  padding: 15px 40px;
  background: #262262;
  margin-top: 30px;
`;

const CardHeader = styled(Paper)`
  color: #ffffff;
  background: #262262;
  border-radius: 0;
  padding: 20px 30px 0;
`;

const CardBody = styled(Paper)`
  color: #ffffff;
  background: #000000;
  border-radius: 0;
  padding: 0 30px 20px;
`;
