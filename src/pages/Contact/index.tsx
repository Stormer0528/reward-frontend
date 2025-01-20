import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import Contact from 'src/sections/Contact';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Contact` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Contact />
    </>
  );
}
