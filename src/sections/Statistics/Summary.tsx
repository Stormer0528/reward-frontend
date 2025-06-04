import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import WidgetSummary from 'src/components/WidgetSummary';

import { useFetchLiveStats } from './useApollo';

export default function Summary() {
  const theme = useTheme();

  const { loading, data } = useFetchLiveStats();

  const liveBlockStats = data?.liveBlockStats ?? { dailyData: [], meta: 0, total: 0 };
  const liveMiningStats = data?.liveMiningStats ?? { dailyData: [], meta: 0, total: 0 };
  const liveUserStats = data?.liveUserStats ?? { dailyData: [], meta: 0, total: 0 };

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <WidgetSummary
          loading={loading}
          title="Total blocks"
          meta={liveBlockStats.meta ?? 0}
          metaText="blocks than yesterday"
          total={liveBlockStats.total}
          chart={{
            colors: [theme.palette.primary.light, theme.palette.primary.main],
            categories: liveBlockStats.dailyData.map((item) => item!.field),
            series: liveBlockStats.dailyData.map((item) => item!.count),
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <WidgetSummary
          loading={loading}
          title="New blocks since last reward"
          meta={
            liveBlockStats.dailyData.length
              ? liveBlockStats.dailyData[0].count -
                (liveBlockStats.dailyData.length === 1 ? 0 : liveBlockStats.dailyData[1].count)
              : 0
          }
          metaText="seconds took than previous block"
          total={liveMiningStats.total}
          chart={{
            colors: [theme.palette.info.light, theme.palette.info.main],
            categories: liveMiningStats.dailyData.map((item) => item!.field),
            series: liveMiningStats.dailyData.map((item) => item!.count),
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <WidgetSummary
          loading={loading}
          title="Members"
          meta={liveUserStats.meta ?? 0}
          metaText="users this month"
          total={liveUserStats.total}
          chart={{
            colors: [theme.palette.secondary.light, theme.palette.secondary.main],
            categories: liveUserStats.dailyData.map((item) => item!.field),
            series: liveUserStats.dailyData.map((item) => item!.count),
          }}
        />
      </Grid>
    </Grid>
  );
}
