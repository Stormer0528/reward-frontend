import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

const content = [
  {
    title: `"If you don't hold it, you don't own it…"`,
    description: `For most in the precious metals community, it's nearly impossible to understand and respect the idea of money that has no physical form. Also, gold and silver have worked as money, holding their value for thousands of years.`,
    path: `${CONFIG.ASSET_DIR}/assets/images/problem_1.png`,
  },
  {
    title: `Stackers got some bad information in 2012.`,
    description: `Long ago, back when it was impossible to know if Bitcoin and crypto were going to stand the tests of time, several industry loudmouths were aggressively anti-bitcoin. Instead of encouraging a diversified and open-minded approach to the emerging technology, “experts” were passionately advising against buying bitcoin. Obviously, if you could go back in time, you’d convince your younger self to act differently.`,
    path: `${CONFIG.ASSET_DIR}/assets/images/problem_2.png`,
  },
  {
    title: `Stackers think it's too late.`,
    description: `Upon missing what could be the greatest investment opportunity of a lifetime, most precious metals collectors have made peace with missing the bitcoin bandwagon and now turn a blind eye to the continued growth of the crypto market. Fortunately, by staying out of crypto, these cautious collectors did manage to avoid plenty of scams and hacks along the way. After all, you can't lose what you don't risk.`,
    path: `${CONFIG.ASSET_DIR}/assets/images/problem_3.png`,
  },
];

export default function Problem() {
  return (
    <Container sx={{ p: '20px 60px', fontFamily: 'Josefin Sans' }}>
      <Typography
        variant="h1"
        fontWeight={400}
        fontFamily="Josefin Sans"
        color={themeConfig.palette.common.texit}
        textAlign="center"
        mb={2}
      >
        The Problem
      </Typography>
      <Paper sx={{ padding: { lg: '0 120px' } }}>
        {content.map(({ title, description, path }) => (
          <Box p="30px 0">
            <Grid container alignItems="center">
              <Grid size={{ md: 2 }}>
                <Image src={path} />
              </Grid>
              <Grid size={{ md: 10 }}>
                <Typography variant="h4" fontWeight={700} mb={1}>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Paper>
    </Container>
  );
}
