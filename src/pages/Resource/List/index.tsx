import { CONFIG } from 'src/config';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import ResourceList from 'src/sections/Resource/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - resources`}</title>

      <Breadcrumbs
        heading="Resources"
        links={[{ name: 'Resources', href: '#' }, { name: 'list' }]}
        sx={{
          mb: { xs: 2, md: 3 },
        }}
      />

      <ResourceList />
    </>
  );
}
