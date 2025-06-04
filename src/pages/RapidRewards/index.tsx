import { CONFIG } from 'src/config';

import RapidRewards from 'src/sections/RapidRewards';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Rapid Rewards`}</title>

      <RapidRewards />
    </>
  );
}
