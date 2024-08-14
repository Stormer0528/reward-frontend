import { Helmet } from 'react-helmet-async';

import Dashboard from 'src/sections/dashboard';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>mineTXC Payout / Dashboard</title>
      </Helmet>

      <Dashboard />
    </>
  );
}
