import { CONFIG } from 'src/config';

import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

const metadata = { title: `404 page not found! | Error - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <NotFoundView />
    </>
  );
}
