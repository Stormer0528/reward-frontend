import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import Introduction from 'src/sections/Introduction';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / MineTXC` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Introduction />
    </>
  );
}
