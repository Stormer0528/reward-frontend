import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

export default function News() {
  return (
    <Container>
      <Wrapper>
        <Typography fontSize={{ md: '3rem', xs: '2rem' }} sx={{ mb: 3 }} textAlign="center">
          News & Updates
        </Typography>
        <Grid container spacing={3}>
          {/* TODO: NEED THIS KIND OF GRID SIZE? */}
          <Grid size={{ md: 4, lg: 4 }}>
            <Item>
              <Image src={`${CONFIG.site.basePath}/assets/images/news-1.png`} />
              <Description>
                <Typography>June 29th, 2024</Typography>
                <Title>Our first kilo of silver arrives!</Title>
                <Typography sx={{ pb: 3 }}>
                  Just when we thought the Postal Service disappeared the package...
                </Typography>
                <Link>READ MORE</Link>
              </Description>
            </Item>
          </Grid>
          <Grid size={{ md: 4, lg: 4 }}>
            <Item>
              <Image src={`${CONFIG.site.basePath}/assets/images/news-2.png`} />
              <Description>
                <Typography>June 29th, 2024</Typography>
                <Title>Our first kilo of silver arrives!</Title>
                <Typography sx={{ pb: 3 }}>
                  Just when we thought the Postal Service disappeared the package...
                </Typography>
                <Link>READ MORE</Link>
              </Description>
            </Item>
          </Grid>
          <Grid size={{ md: 4, lg: 4 }}>
            <Item>
              <Image src={`${CONFIG.site.basePath}/assets/images/news-3.png`} />
              <Description>
                <Typography>June 29th, 2024</Typography>
                <Title>Our first kilo of silver arrives!</Title>
                <Typography sx={{ pb: 3 }}>
                  Just when we thought the Postal Service disappeared the package...
                </Typography>
                <Link>READ MORE</Link>
              </Description>
            </Item>
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled(Paper)`
  padding: 60px 0;
`;

const Description = styled(Paper)`
  padding: 30px;
`;

const Item = styled(Paper)`
  border: 1px solid #000000;
  border-radius: 0;
`;

const Title = styled(Typography)`
  color: #262262;
  font-size: 1.5rem;
  margin: 20px 0;
`;

const Link = styled('a')`
  color: #262262;
  font-size: 1rem;
  font-weight: 700;
`;
