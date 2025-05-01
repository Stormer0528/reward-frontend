import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { usePopover } from 'src/components/custom-popover';

import SponsorList from './SponsorList';
import SponsorTree from './SponsorTree';

const TABS = [
  { value: 'list', label: 'List', icon: <Iconify icon="oui:list" width={24} /> },
  { value: 'tree', label: 'Tree', icon: <Iconify icon="bi:diagram-3" width={24} /> },
];

export default function SponsorView() {
  const popover = usePopover();

  const tabs = useTabs('list');

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="Sponsor"
        links={[{ name: 'Sponsor', href: paths.dashboard.sponsor.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
        action={
          <Stack direction="row" columnGap={1}>
            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-horizontal-fill" />
            </IconButton>
          </Stack>
        }
      />

      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: 1 }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {tabs.value === 'list' && <SponsorList />}

      {tabs.value === 'tree' && <SponsorTree />}
    </DashboardContent>
  );
}
