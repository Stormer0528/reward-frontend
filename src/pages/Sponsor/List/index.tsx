import { CONFIG } from 'src/config';

import SponsorList from 'src/sections/Sponsor';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Sponsor`}</title>

      <SponsorList />
    </>
  );
}
