import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { CONFIG } from 'src/config';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';

import { useAuthContext } from 'src/auth/hooks';

// import Sale from './Sale';
import General from './General';
import History from './History';
// import Commission from './Commission';

const TABS = [
  {
    value: 'history',
    label: 'History',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'edit', label: 'Edit', icon: <Iconify icon="solar:pen-2-bold" width={24} /> },
  // { value: 'sale', label: 'Sale', icon: <Iconify icon="bi:currency-exchange" /> },
  // { value: 'commission', label: 'Commission', icon: <Iconify icon="fluent:reward-32-regular" /> },
];

// ----------------------------------------------------------------------
export default function Profile() {
  const tabs = useTabs('history');

  const { user, loading } = useAuthContext();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to={paths.notFound} replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name}: ${user?.username}`}</title>
      </Helmet>
      <DashboardContent>
        <Breadcrumbs
          heading={user?.username}
          links={[{ name: 'Member', href: '#' }, { name: user?.username }]}
          sx={{
            mb: { xs: 2, md: 3 },
          }}
        />

        <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 2, md: 3 } }}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {tabs.value === 'edit' && <General me={user} />}

        {tabs.value === 'history' && <History me={user} />}

        {/* {tabs.value === 'sale' && <Sale me={user} />} */}

        {/* {tabs.value === 'commission' && <Commission me={user} />} */}
      </DashboardContent>
    </>
  );
}
