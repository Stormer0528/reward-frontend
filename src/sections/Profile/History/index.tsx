import Grid from '@mui/material/Grid';

import { ProfileDetailView } from './Detail';
import { ProfileHistoryOverView } from './OverView';
import { RewardHistoryTable } from './RewardHistoryTable';

export function ProfileHistoryView() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 12, xl: 8 }}>
        <RewardHistoryTable />
      </Grid>
      <Grid size={{ md: 12, xl: 4 }}>
        <ProfileHistoryOverView />
        <ProfileDetailView />
      </Grid>
    </Grid>
  );
}
