import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import InvoiceList from 'src/sections/Invoice/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Invoice`}</title>
      </Helmet>

      <InvoiceList />
    </>
  );
}
