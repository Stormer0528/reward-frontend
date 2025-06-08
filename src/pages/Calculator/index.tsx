import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Calculator from 'src/sections/Calculator';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Calculator`}</title>

      <Breadcrumbs
        heading="Calculator"
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Calculator />
    </>
  );
}
