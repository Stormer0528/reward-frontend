import Grid from '@mui/material/Grid';

import HashRate from './HashRate';
import TXCShared from './TXCShared';
import Commission from './Commission';
import TotalMiner from './TotalMiner';
import MemberCount from './MemberCount';
import RevenueOverview from './Revenue';
import MemberReward from './MemberReward';
import MemberByCountry from './MemberByCountry';

export default function Chart() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <HashRate />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TXCShared />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <MemberReward />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <RevenueOverview />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <MemberCount />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Commission />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TotalMiner />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <MemberByCountry />
      </Grid>
    </Grid>
  );
}
