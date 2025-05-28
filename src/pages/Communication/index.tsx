import { CONFIG } from 'src/config';

import Communication from 'src/sections/Communication';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Communication`}</title>

      <Communication />
    </>
  );
}
