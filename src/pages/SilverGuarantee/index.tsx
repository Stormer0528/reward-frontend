import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SilverGuarantee from 'src/sections/SilverGuarantee';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Silver Guarantee` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SilverGuarantee />
    </>
  );
}
