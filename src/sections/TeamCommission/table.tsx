import type { LabelColor } from 'src/components/Label';

import { useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';

import { TeamReport, TeamReportSection } from 'src/__generated__/graphql';

import { useAuthContext } from 'src/auth/hooks';

import Report from './report';
import Contact from './contact';

export default function TeamCommissionTable() {
  const { user } = useAuthContext();

  const [statusOptions, setStatusOpions] = useState<
    { value: string; label: string; color: LabelColor }[]
  >([
    { value: 'LEFT', label: 'Left', color: 'info' },
    { value: 'RIGHT', label: 'Right', color: 'success' },
    { value: 'REFERRAL', label: 'Referral', color: 'primary' },
  ]);

  const [contact, setContact] = useState<boolean>(false);
  const [teamReport, setTeamReport] = useState<TeamReportSection>(TeamReportSection.Left);

  const handleTabChange = (event: React.SyntheticEvent, newValue: any) => {
    console.log('newvalue => ', newValue);
    if (
      Object.values(TeamReportSection).includes(newValue) &&
      user?.teamReport.includes(newValue)
    ) {
      setContact(false);
      setTeamReport(newValue);
    } else {
      setContact(true);
      setTeamReport(newValue);
    }
  };

  useEffect(() => {
    if (user?.teamReport.includes(TeamReport.Credentials)) {
      setStatusOpions([
        ...statusOptions,
        { value: 'CREDENTIALS', label: 'Contact', color: 'secondary' },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Card sx={{ borderRadius: '16px 16px 0 0' }}>
        <Tabs
          value={teamReport}
          onChange={handleTabChange}
          sx={{
            px: 2.5,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {statusOptions.map((tab) => (
            <Tab key={tab.value} iconPosition="end" value={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Card>
      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          justifyContent: 'center',
          borderRadius: '0 0 16px 16px',
        }}
      >
        {contact ? <Contact /> : <Report teamReport={teamReport} />}
      </Card>
    </>
  );
}
