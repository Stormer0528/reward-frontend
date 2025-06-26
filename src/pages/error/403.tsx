import { CONFIG } from 'src/config';

import { ForbiddenView } from 'src/sections/Error/ForbiddenView';

export default function Page() {
  return (
    <>
      <title> {`${CONFIG.APP_NAME} - Permission`}</title>

      <ForbiddenView />
    </>
  );
}
