import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import TXCRequest from 'src/sections/TXCRequest/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / TXC Request`}</title>

      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.txcRequest.root }, { name: 'list' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Button
            component={RouterLink}
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
            href="new"
          >
            New
          </Button>
        }
      />

      <TXCRequest />
    </>
  );
}
