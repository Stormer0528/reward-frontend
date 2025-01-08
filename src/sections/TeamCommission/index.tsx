import type { Member } from 'src/__generated__/graphql';

import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Table from './table';

interface Props {
  me: Member;
}

export default function TeamCommissionListView({ me }: Props) {
  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Team"
        links={[{ name: 'Team', href: paths.dashboard.team.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />
      {me.teamReport === 'NONE' ? (
        <Typography variant="subtitle1" textAlign="center">
          Please contact the office to enable TEAM reporting!
        </Typography>
      ) : (
        <Table />
      )}
    </DashboardContent>
  );
}
