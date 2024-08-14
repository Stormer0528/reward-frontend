import { Helmet } from 'react-helmet-async';

import ResourceDetailPage from 'src/sections/Resource/Detail';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Resouce</title>
      </Helmet>

      <ResourceDetailPage />
    </>
  );
}
