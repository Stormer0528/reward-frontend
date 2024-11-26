import Grid from '@mui/material/Unstable_Grid2';

import Latest from './Latest';

export default function Reward() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={6}>
        <Latest />
      </Grid>
    </Grid>
  );
}
