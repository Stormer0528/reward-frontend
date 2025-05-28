import { CONFIG } from 'src/config';

import MemberStatisticsList from 'src/sections/MemberStatistics/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - MemberStatistics`}</title>

      <MemberStatisticsList />
    </>
  );
}
