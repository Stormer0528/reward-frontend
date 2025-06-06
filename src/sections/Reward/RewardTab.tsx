import { useMatch } from 'react-router';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/Iconify';

const TABS = [
  {
    value: 'daily',
    label: 'Daily',
    icon: <Iconify icon="carbon:analytics" width={24} />,
  },
  { value: 'wallets', label: 'Wallets', icon: <Iconify icon="bxs:wallet" width={24} /> },
];

export default function RewardTab() {
  const router = useRouter();

  const param = useMatch(paths.dashboard.reward.tabMatch);
  const tabParam = param?.params.tab;

  return (
    <Tabs
      value={tabParam || ''}
      onChange={(_, newTab) => router.push(newTab)}
      sx={{ mb: { xs: 2, md: 3 } }}
    >
      {TABS.map((tab) => (
        <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
      ))}
    </Tabs>
  );
}
