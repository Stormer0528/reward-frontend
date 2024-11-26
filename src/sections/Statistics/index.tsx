import Container from '@mui/material/Container';

import Chart from './Chart';
import Reward from './Reward';
import Summary from './Summary';

export default function StatisticsSection() {
  return (
    <Container maxWidth="xl">
      <Summary />
      <Chart />
      <Reward />
    </Container>
  );
}
