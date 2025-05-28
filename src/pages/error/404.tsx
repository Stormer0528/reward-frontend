import { CONFIG } from 'src/config';

import { NotFoundView } from 'src/sections/Error';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - 404 page not found` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <NotFoundView />
    </>
  );
}
