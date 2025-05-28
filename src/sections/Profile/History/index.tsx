import type { Member } from 'src/__generated__/graphql';

import Grid from '@mui/material/Unstable_Grid2';

import Table from './Table';
import Reward from './Reward';
import OverView from './OverView';
import Personal from './Personal';

interface Props {
  me: Member;
}

export default function HistoryView({ me }: Props) {
  return (
    <Grid container>
      <Grid size={{ md: 12, xl: 8 }}>
        <Reward me={me} />
        <Table />
      </Grid>
      <Grid size={{ md: 12, xl: 4 }}>
        <OverView me={me} />
        <Personal me={me} />
      </Grid>
    </Grid>
  );
}
