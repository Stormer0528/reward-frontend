import Stack from '@mui/material/Stack';

import Chart from '../Statistics/Chart';
import Reward from '../Statistics/Reward';

export default function Overview() {
  return (
    <Stack spacing={3} sx={{ mb: 3 }}>
      <Chart />
      <Reward />
    </Stack>
  );
}
