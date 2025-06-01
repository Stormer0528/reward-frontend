import { CONFIG } from 'src/config';

import StatisticsSection from 'src/sections/Statistics';

export default function StatisticsPage() {
  return (
    <>
      <title>{`${CONFIG.APP_NAME} - Statistics`}</title>

      <StatisticsSection />
    </>
  );
}
