import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import RewardList from 'src/sections/Reward/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Reward`}</title>
      </Helmet>

      <RewardList />
    </>
  );
}
