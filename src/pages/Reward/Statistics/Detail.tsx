import { CONFIG } from 'src/config';

import StatisticsDetail from 'src/sections/Reward/Statistics/Detail';

// ----------------------------------------------------------------------
const metadata = { title: `${CONFIG.site.name} / Statistics` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <StatisticsDetail />
    </>
  );
}
