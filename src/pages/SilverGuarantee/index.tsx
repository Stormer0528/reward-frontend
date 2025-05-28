import { CONFIG } from 'src/config';

import SilverGuarantee from 'src/sections/SilverGuarantee';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Silver Guarantee` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <SilverGuarantee />
    </>
  );
}
