import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SponsorTree from 'src/sections/Sponsor/SponsorTree';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Sponsor`}</title>
      </Helmet>

      <SponsorTree />
    </>
  );
}
