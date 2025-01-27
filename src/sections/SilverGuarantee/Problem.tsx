import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function Problem() {
  return (
    <Wrapper>
      <Title fontSize={{ md: '3.75rem', xs: '2rem' }}>The Problem</Title>
      <Paper sx={{ padding: { lg: '0 120px' } }}>
        <Item container alignItems="center">
          <Grid md={2}>
            <ImageWrapper src={`${CONFIG.site.basePath}/assets/images/problem_1.png`} />
          </Grid>
          <Grid md={10}>
            <SubTitle>{`"If you don't hold it, you don't own it…"`}</SubTitle>
            <Typography>
              {`For most in the precious metals community, it's nearly impossible to understand and respect the idea of money that has no physical form. Also, gold and silver have worked as money, holding their value for thousands of years.`}
            </Typography>
          </Grid>
        </Item>
        <Item container alignItems="center">
          <Grid md={2}>
            <ImageWrapper src={`${CONFIG.site.basePath}/assets/images/problem_2.png`} />
          </Grid>
          <Grid md={10}>
            <SubTitle>Stackers got some bad information in 2012.</SubTitle>
            <Typography>
              {`Long ago, back when it was impossible to know if Bitcoin and crypto were going to stand the tests of time, several industry loudmouths were aggressively anti-bitcoin. Instead of encouraging a diversified and open-minded approach to the emerging technology, “experts” were passionately advising against buying bitcoin. Obviously, if you could go back in time, you'd convince your younger self to act differently.`}
            </Typography>
          </Grid>
        </Item>
        <Item container alignItems="center">
          <Grid md={2}>
            <ImageWrapper src={`${CONFIG.site.basePath}/assets/images/problem_3.png`} />
          </Grid>
          <Grid md={10}>
            <SubTitle>{`Stackers think it's too late.`}</SubTitle>
            <Typography>
              {`Upon missing what could be the greatest investment opportunity of a lifetime, most precious metals collectors have made peace with missing the bitcoin bandwagon and now turn a blind eye to the continued growth of the crypto market. Fortunately, by staying out of crypto, these cautious collectors did manage to avoid plenty of scams and hacks along the way. After all, you can't lose what you don't risk.`}
            </Typography>
          </Grid>
        </Item>
      </Paper>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  padding: 20px 60px;
  font-family: 'Josefin Sans';
`;

const ImageWrapper = styled(Image)``;

const Item = styled(Grid)`
  padding: 30px 0;
`;

const Title = styled(Typography)`
  font-family: 'Josefin San';
  color: #262262;
  line-height: 1;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled(Typography)`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
