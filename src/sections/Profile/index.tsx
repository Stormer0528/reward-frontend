import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';
import { useBoolean } from 'src/hooks/useBoolean';

import { CONFIG } from 'src/config';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';

import { useAuthContext } from 'src/auth/hooks';

import General from './General';
import History from './History';
import VerifyModal from './Verify';

const TABS = [
  {
    value: 'history',
    label: 'History',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'edit', label: 'Edit', icon: <Iconify icon="solar:pen-2-bold" width={24} /> },
];

// ----------------------------------------------------------------------
export default function Profile() {
  const tabs = useTabs('history');
  const [tabEvent, setTabEvent] = useState<any>(null);
  const open = useBoolean();
  const { user, code, loading } = useAuthContext();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to={paths.notFound} replace />;
  }

  const onTabChange = (event: any, newValue: any) => {
    if (newValue === 'edit') {
      if (code) {
        tabs.onChange(event, newValue);
        return;
      }

      open.onTrue();
      setTabEvent(event);
    } else {
      tabs.onChange(event, newValue);
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name}: ${user?.username}`}</title>
      </Helmet>

      <DashboardContent>
        <Breadcrumbs
          heading="My account"
          sx={{
            mb: { xs: 2, md: 3 },
          }}
        />

        <Tabs value={tabs.value} onChange={onTabChange} sx={{ mb: { xs: 2, md: 3 } }}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {tabs.value === 'edit' && <General me={user} />}

        {tabs.value === 'history' && <History me={user} />}
      </DashboardContent>

      <VerifyModal open={open} tabs={tabs} event={tabEvent} />
    </>
  );
}
