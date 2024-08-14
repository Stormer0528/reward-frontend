import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import MemberStatisticsList from 'src/sections/MemberStatistics/List';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / MemberStatistics`}</title>
      </Helmet>

      <MemberStatisticsList />
    </>
  );
}
