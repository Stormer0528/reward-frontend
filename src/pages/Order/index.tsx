import { CONFIG } from 'src/config';

import Order from 'src/sections/Order';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Order`}</title>

      <Order />
    </>
  );
}
