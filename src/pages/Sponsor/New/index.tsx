import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SponsorNew from 'src/sections/Sponsor/Create';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Sponsor`}</title>
      </Helmet>

      <SponsorNew />
    </>
  );
}
