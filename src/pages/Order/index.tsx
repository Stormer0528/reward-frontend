import { CONFIG } from 'src/config';

import Order from 'src/sections/Order';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Order`}</title>

      <Order />
    </>
  );
}
