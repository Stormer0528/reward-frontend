import { CONFIG } from 'src/config';

import RapidRewards from 'src/sections/RapidRewards';

// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.site.name} / Rapid Rewards` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <RapidRewards />
    </>
  );
}
