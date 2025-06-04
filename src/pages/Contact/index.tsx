import { CONFIG } from 'src/config';

import Contact from 'src/sections/Contact';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Contact`}</title>

      <Contact />
    </>
  );
}
