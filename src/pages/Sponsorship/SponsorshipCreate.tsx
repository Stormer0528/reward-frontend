import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { SponsorshipCreateView } from 'src/sections/Sponsorship/Create';

// ----------------------------------------------------------------------

export default function SponsorshipCreatePage() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Add Miner`}</title>
      <Breadcrumbs
        heading="Sponsorships"
        links={[
          { name: 'Sponsorships', href: paths.dashboard.sponsorships.root },
          { name: 'Add Miner' },
        ]}
        sx={{
          mb: { xs: 1, md: 3 },
        }}
      />
      <SponsorshipCreateView />
    </>
  );
}
