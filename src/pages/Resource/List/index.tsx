import { Helmet } from 'react-helmet-async';

import ResourceList from 'src/sections/Resource/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Resouce</title>
      </Helmet>

      <ResourceList />
    </>
  );
}
