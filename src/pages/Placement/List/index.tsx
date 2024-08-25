import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import PlacementList from 'src/sections/Placement/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Placement`}</title>
      </Helmet>

      <PlacementList />
    </>
  );
}
