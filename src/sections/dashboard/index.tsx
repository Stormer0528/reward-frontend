import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import Chart from '../Statistics/Chart';
import Reward from '../Statistics/Reward';

export default function Dashboard() {
  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ pb: 2 }}>
        Dashboard
      </Typography>

      <Chart />
      <Reward />
    </DashboardContent>
  );
}
