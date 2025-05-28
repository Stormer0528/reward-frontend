import { CONFIG } from 'src/config';

import ActionView from 'src/sections/Commission/Action';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Commission`}</title>

      <ActionView />
    </>
  );
}
