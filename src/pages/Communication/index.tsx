import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import Communication from 'src/sections/Communication';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Communication`}</title>
      </Helmet>

      <Communication />
    </>
  );
}
