import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Chart from '../Statistics/Chart';
import Reward from '../Statistics/Reward';

export default function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Breadcrumbs
        heading="Dashboard"
        links={[{ name: 'Dashboard', href: paths.dashboard.history.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Chart />
      <Reward />
    </Container>
  );
}
