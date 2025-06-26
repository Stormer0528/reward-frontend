import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import TXCRequestCreate from 'src/sections/TXCRequest/Create';

// ----------------------------------------------------------------------

export default function Create() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / TXC Request`}</title>

      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.txcRequest.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <TXCRequestCreate />
    </>
  );
}
