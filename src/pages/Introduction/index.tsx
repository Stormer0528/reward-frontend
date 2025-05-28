import { CONFIG } from 'src/config';

import Introduction from 'src/sections/Introduction';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Introduction` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <Introduction />
    </>
  );
}
