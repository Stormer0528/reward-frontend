import Card from '@mui/material/Card';

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
          mb: { xs: 1, md: 3 },
        }}
      />

      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          height: { xs: 'calc(100vh - var(--layout-header-mobile-height) - 20px)', md: 2 },
        }}
      >
        <InvoiceList />
      </Card>
    </>
  );
}
