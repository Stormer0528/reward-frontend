import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import WidgetSummary from 'src/components/WidgetSummary';

import { useFetchGeneral } from './useApollo';

export default function Summary() {
  const theme = useTheme();

  const { loading, data, fetchGeneral } = useFetchGeneral();

  const liveBlockStats = data?.liveBlockStats ?? { dailyData: [], meta: 0, total: 0 };
  const liveMiningStats = data?.liveMiningStats ?? { dailyData: [], meta: 0, total: 0 };
  const liveUserStats = data?.liveUserStats ?? { dailyData: [], meta: 0, total: 0 };

  useEffect(() => {
    fetchGeneral({ variables: { data: { pastDays: 7 } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3} sx={{ mb: 1 }}>
      <Grid xs={12} md={4}>
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
      <Grid xs={12} md={4}>
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
      <Grid xs={12} md={4}>
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
