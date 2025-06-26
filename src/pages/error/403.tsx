import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { View403 } from 'src/sections/error';

// ----------------------------------------------------------------------

const metadata = { title: `Error - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <View403 />
    </>
  );
}
