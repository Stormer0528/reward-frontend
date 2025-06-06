import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import InvoiceList from 'src/sections/Invoice/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Invoice`}</title>

      <Breadcrumbs
        heading="Invoice"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <InvoiceList />
    </>
  );
}
