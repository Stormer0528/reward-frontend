import { CONFIG } from 'src/config';

import Calculator from 'src/sections/Calculator';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Commission`}</title>

      <Calculator />
    </>
  );
}
