import { CONFIG } from 'src/config';

import { NotFoundView } from 'src/sections/Error';

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Page not found`}</title>

      <NotFoundView />
    </>
  );
}
