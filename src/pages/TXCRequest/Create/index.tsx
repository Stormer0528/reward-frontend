import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import TXCRequestCreate from 'src/sections/TXCRequest/Create';

// ----------------------------------------------------------------------

export default function Create() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / TXC Request`}</title>
      </Helmet>

      <TXCRequestCreate />
    </>
  );
}
