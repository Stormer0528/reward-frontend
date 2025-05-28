import { CONFIG } from 'src/config';

import ActionView from 'src/sections/Commission/Action';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Commission`}</title>

      <ActionView />
    </>
  );
}
