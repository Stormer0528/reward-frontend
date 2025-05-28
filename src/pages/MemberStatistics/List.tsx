import { CONFIG } from 'src/config';

import MemberStatisticsList from 'src/sections/MemberStatistics/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`${CONFIG.site.name} / MemberStatistics`}</title>

      <MemberStatisticsList />
    </>
  );
}
