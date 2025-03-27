import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import ActionView from 'src/sections/Commission/Action';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Commission`}</title>
      </Helmet>

      <ActionView />
    </>
  );
}
