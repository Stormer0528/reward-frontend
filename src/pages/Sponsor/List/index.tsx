import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SponsorList from 'src/sections/Sponsor';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Sponsor`}</title>
      </Helmet>

      <SponsorList />
    </>
  );
}
