import { useParams } from 'react-router';
import { useQuery as useGraphQuery } from '@apollo/client';

import Grid from '@mui/material/Grid';

import { paths } from 'src/routes/paths';

import { fDateTime } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Table from './Table';
import OverView from './Overview';
import { FETCH_STATISTICS_QUERY } from '../query';

export default function DetailView() {
  const { id } = useParams();

  const { data } = useGraphQuery(FETCH_STATISTICS_QUERY, { variables: { filter: { id } } });

  const statistics = data?.statistics.statistics ?? [];

  const current = statistics[0];

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Statistics"
        links={[
          { name: 'Reward', href: paths.dashboard.reward.root },
          { name: `Statistics : ${fDateTime(current?.from)} - ${fDateTime(current?.to)}` },
        ]}
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <Grid container rowGap={2}>
        {/* TODO: NEED GRID LIKE THIS? */}
        <Grid size={{ xl: 12 }}>
          <OverView data={current!} />
        </Grid>
        <Grid size={{ xl: 12 }}>
          <Table id={id!} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
