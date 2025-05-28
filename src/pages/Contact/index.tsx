import { CONFIG } from 'src/config';

import Contact from 'src/sections/Contact';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Contact` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <Contact />
    </>
  );
}
