import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Join() {
  return (
    <Container>
      <Description>
        <Title fontSize={{ md: '3.125rem', xs: '2rem' }}>
          Will you join Chris & Tommy for the journey?
        </Title>
        <Paper sx={{ px: { md: 30, xs: 4 } }}>
          <Text>
            The world of digital currency has some great news for those that missed the Bitcoin
            bandwagon and waited on the sidelines.
          </Text>
        </Paper>
      </Description>
    </Container>
  );
}

const Description = styled(Paper)`
  background: transparent;
  padding: 0 30px;
  text-align: center;
`;

const Title = styled(Typography)`
  margin-top: 50px;
  font-family: Josefin Sans;
  color: #262262;
`;

const Text = styled(Typography)`
  margin: 20px 0 50px;
`;
