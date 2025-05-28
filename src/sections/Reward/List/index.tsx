import { useTabs } from 'minimal-shared/hooks';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Wallets from './Wallets';
import StatisticsTable from './Daily';

const TABS = [
  {
    value: 'daily',
    label: 'Daily',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'wallets', label: 'Wallets', icon: <Iconify icon="bxs:wallet" width={24} /> },
];

export default function RewardListView() {
  const tabs = useTabs('daily');

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Reward"
        links={[{ name: 'Reward', href: '#' }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 2, md: 3 } }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {tabs.value === 'daily' && <StatisticsTable />}

      {tabs.value === 'wallets' && <Wallets />}
    </DashboardContent>
  );
}
