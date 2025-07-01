import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SaleList from 'src/sections/Sales/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Orders`}</title>
      </Helmet>

      <SaleList />
    </>
  );
}
