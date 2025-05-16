import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import Order from 'src/sections/Order';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Order`}</title>
      </Helmet>

      <Order />
    </>
  );
}
