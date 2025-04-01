import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import CommunicationTable from './CommunicationTable';

export default function Communication() {
  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Communication"
        links={[{ name: 'List', href: paths.dashboard.communication.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <CommunicationTable />
    </DashboardContent>
  );
}
