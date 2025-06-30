import { ReactFlowProvider } from '@xyflow/react';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { PlacementTreeBox } from './TreeBox';

export default function PlacementTreeView() {
  return (
    <ReactFlowProvider>
      <DashboardContent sx={{ overflow: 'hidden' }}>
        <Breadcrumbs
          heading="Placement"
          links={[{ name: 'Placement', href: paths.dashboard.placement.root }]}
          sx={{ mb: { xs: 1, md: 2 } }}
        />

        <PlacementTreeBox />
      </DashboardContent>
    </ReactFlowProvider>
  );
}
