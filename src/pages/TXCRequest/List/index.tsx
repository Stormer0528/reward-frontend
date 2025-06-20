import { CONFIG } from 'src/config';

import TXCRequest from 'src/sections/TXCRequest/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / TXC Request`}</title>

      <TXCRequest />
    </>
  );
}
