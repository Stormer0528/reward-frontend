import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import TXCRequest from 'src/sections/TXCRequest/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / TXC Request`}</title>
      </Helmet>

      <TXCRequest />
    </>
  );
}
