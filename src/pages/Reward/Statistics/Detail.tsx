import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import StatisticsDetail from 'src/sections/Reward/Statistics/Detail';

// ----------------------------------------------------------------------
const metadata = { title: `${CONFIG.site.name} / Statistics` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <StatisticsDetail />
    </>
  );
}
