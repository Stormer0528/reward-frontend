import { CONFIG } from 'src/config';

import PlacementList from 'src/sections/Placement/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Placement`}</title>

      <PlacementList />
    </>
  );
}
