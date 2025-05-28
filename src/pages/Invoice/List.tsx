import { CONFIG } from 'src/config';

import InvoiceList from 'src/sections/Invoice/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Invoice`}</title>

      <InvoiceList />
    </>
  );
}
