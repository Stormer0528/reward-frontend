import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import Calculator from 'src/sections/Calculator';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Commission`}</title>
      </Helmet>

      <Calculator />
    </>
  );
}
