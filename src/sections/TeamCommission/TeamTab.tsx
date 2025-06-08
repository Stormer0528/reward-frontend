import type { LabelColor } from 'src/components/Label';

import { useMatch } from 'react-router';
import { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { TeamReport } from 'src/__generated__/graphql';

import { useAuthContext } from 'src/auth/hooks';

export const TeamTab = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const param = useMatch(paths.dashboard.team.tabMatch);
  const tabParam = param?.params.tab;

  const [statusOptions, setStatusOptions] = useState<
    { value: string; label: string; color: LabelColor }[]
  >([
    { value: 'left', label: 'Left', color: 'info' },
    { value: 'right', label: 'Right', color: 'success' },
    { value: 'referral', label: 'Referral', color: 'primary' },
  ]);

  useEffect(() => {
    if (user?.teamReport.includes(TeamReport.Credentials)) {
      setStatusOptions([
        ...statusOptions,
        { value: 'contact', label: 'Contact', color: 'secondary' },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Card sx={{ borderRadius: '16px 16px 0 0' }}>
      <Tabs
        value={tabParam || ''}
        onChange={(_, newTab) => {
          router.push(newTab);
        }}
        sx={{
          px: 2.5,
          // boxShadow: (theme) => `inset 0 -2px 0 0 ${varAlpha(theme.palette.grey[500], 0.08)}`,
        }}
      >
        {statusOptions.map((tab) => (
          <Tab key={tab.value} iconPosition="end" value={tab.value} label={tab.label} />
        ))}
      </Tabs>
    </Card>
  );
};
