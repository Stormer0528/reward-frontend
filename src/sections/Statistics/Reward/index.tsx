import Grid from '@mui/material/Unstable_Grid2';

import Latest from './Latest';
import TopEarners from './TopEarners';
import TopRecruiters from './TopRecruiters';

export default function Reward() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={6}>
        <Latest />
      </Grid>
      <Grid xs={12} md={6} container spacing={{ xs: 1, md: 3 }}>
        <Grid xs={12} md={6}>
          <TopEarners />
        </Grid>
        <Grid xs={12} md={6}>
          <TopRecruiters />
        </Grid>
      </Grid>
    </Grid>
  );
}
