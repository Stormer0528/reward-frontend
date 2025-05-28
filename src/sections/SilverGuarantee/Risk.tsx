import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Risk() {
  return (
    <Wrapper>
      <Container>
        <Description>
          <Paper sx={{ background: 'transparent', px: { md: 12, xs: 2 } }}>
            <Title fontSize={{ md: '2.25rem', xs: '1.2rem' }}>
              We understand and respect your RISK TOLERANCE, and have an offer just for you…
            </Title>
          </Paper>
        </Description>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  background: #00492c;
  border-radius: 0;
  text-align: center;
`;

const Description = styled(Paper)`
  background: transparent;
  padding: 0 30px;
`;

const Title = styled(Typography)`
  margin: 30px 0;
  font-family: Josefin Sans;
  color: #ffffff;
`;
