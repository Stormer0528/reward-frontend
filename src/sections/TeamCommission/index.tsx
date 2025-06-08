import type { TeamReportSection } from 'src/__generated__/graphql';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { useAuthContext } from 'src/auth/hooks';

import Report from './report';
import Contact from './contact';

interface Props {
  contact: boolean;
  teamReport: TeamReportSection;
}

export default function TeamCommissionListView({ contact, teamReport }: Props) {
  const { user } = useAuthContext();

  return (
    <>
      {user!.teamReport.length ? (
        <Card
          sx={{
            flexGrow: 1,
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'center',
            borderRadius: '0 0 16px 16px',
            height: { xs: 'calc(100vh - var(--layout-header-mobile-height) - 20px)', md: 2 },
          }}
        >
          {contact ? <Contact /> : <Report teamReport={teamReport} />}
        </Card>
      ) : (
        <Typography variant="subtitle1" textAlign="center">
          Please contact the office to enable TEAM reporting!
        </Typography>
      )}
    </>
  );
}
