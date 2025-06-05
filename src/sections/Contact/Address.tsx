import type { IconifyName } from 'src/components/Iconify';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { themeConfig } from 'src/theme';

import { Iconify } from 'src/components/Iconify';

import ContactForm from './ContactForm';

const items = [
  {
    icon: 'basil:telegram-solid',
    title: 'TELEGRAM',
    text: [
      '@<a href="https://t.me/blockchainmint">BlockchainMint</a> (general inquiries)',
      '@<a href="https://t.me/texitcoin_txc">TEXITcoin_TXC</a> (announcements)',
    ],
  },
  {
    icon: 'carbon:phone-filled',
    title: 'PHONE (or TEXT)',
    text: ['+1 484 MINE TXC', '+1 484 646 3892'],
  },
  {
    icon: 'icomoon-free:location',
    title: 'OUR OFFICE LOCATION',
    text: ['424 Rose Garden Drive', 'McKinney, Republic of Texas'],
  },
];

export default function Address() {
  return (
    <Box sx={{ mt: 12, pb: 5, background: themeConfig.palette.common.texit }}>
      <Container>
        <Box sx={{ mt: -8, background: themeConfig.palette.grey[100] }}>
          <Grid container>
            {items.map((item) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Box key={item.title} mt={-5} pb={5} textAlign="center">
                  <ContactAvatar icon={item.icon as IconifyName} />
                  <Typography variant="h5" fontFamily="'Open sans' sans-serif" m="20px 0 10px">
                    {item.title}
                  </Typography>
                  {item.text.map((text, index) => (
                    <Typography
                      variant="body1"
                      key={index}
                      lineHeight={2}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            background: themeConfig.palette.common.white,
            m: '100px 30px 0',
            textAlign: 'center',
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
              <Typography variant="h2" fontWeight={600} mb={2}>
                Get in Touch
              </Typography>
              <Typography>
                Have an inquiry or some feedback for us? Fill out the form below to contact our
                team.
              </Typography>

              <ContactForm />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Map
                title="McKinney"
                src="https://maps.google.com/maps?output=embed&amp;q=McKinney%2C%20Texas&amp;z=10&amp;t=m"
                data-map="JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1jS2lubmV5JTJDJTIwVGV4YXMlMjIlMkMlMjJ6b29tJTIyJTNBMTAlMkMlMjJ0eXBlSWQlMjIlM0ElMjJyb2FkJTIyJTJDJTIybGFuZyUyMiUzQW51bGwlMkMlMjJhcGlLZXklMjIlM0FudWxsJTJDJTIybWFya2VycyUyMiUzQSU1QiU1RCU3RA=="
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const ContactAvatar = styled(Iconify)(() => ({
  width: 100,
  height: 100,
  color: themeConfig.palette.info.main,
  border: `2px solid ${themeConfig.palette.common.texit}`,
  borderRadius: 50,
  padding: 15,
}));

const Map = styled('iframe')(() => ({
  width: '100%',
  height: '100%',
  border: 'none',
}));
