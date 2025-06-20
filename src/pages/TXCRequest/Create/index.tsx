import { CONFIG } from 'src/config';

import TXCRequestCreate from 'src/sections/TXCRequest/Create';

// ----------------------------------------------------------------------

export default function Create() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} / TXC Request`}</title>

      <TXCRequestCreate />
    </>
  );
}
