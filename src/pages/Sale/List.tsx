import { CONFIG } from 'src/config';

import SaleList from 'src/sections/Sales/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Sales`}</title>

      <SaleList />
    </>
  );
}
