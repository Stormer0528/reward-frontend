import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Chart from './Chart';
import Reward from './Reward';
import Summary from './Summary';

export default function StatisticsSection() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={3} sx={{my: 3}}>
        <Summary />
        <Chart />
        <Reward />
      </Stack>
    </Container>
  );
}
