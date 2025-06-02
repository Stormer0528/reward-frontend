import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Overview from 'src/sections/Overview';
// ----------------------------------------------------------------------

export default function OverviewPage() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Overview`}</title>
      <Breadcrumbs
        heading="Overview"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <Overview />
    </>
  );
}
