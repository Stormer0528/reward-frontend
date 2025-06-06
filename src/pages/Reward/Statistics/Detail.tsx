import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import StatisticsDetail from 'src/sections/Reward/Statistics/Detail';

// ----------------------------------------------------------------------
const metadata = { title: `${CONFIG.APP_NAME} - Statistics` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <Breadcrumbs
        heading="Statistics"
        links={[{ name: 'Reward', href: paths.dashboard.reward.root }, { name: 'Statistics' }]}
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <StatisticsDetail />
    </>
  );
}
