import { CONFIG } from 'src/config';

import RewardList from 'src/sections/Reward/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / Reward`}</title>

      <RewardList />
    </>
  );
}
