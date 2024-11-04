import { useQuery as useGraphQuery } from '@apollo/client';

import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';

import { useTabs } from 'src/hooks/use-tabs';

import { formatDate } from 'src/utils/format-time';

import ChartWidget from 'src/components/ChartWidget';
import { CustomTabs } from 'src/components/custom-tabs';

import { FETCH_STATISTICS_QUERY, FETCH_BLOCKS_DATA_QUERY } from './query';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'block', label: 'Block' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

export default function Summary() {
  const tabs = useTabs('block');
  const theme = useTheme();

  const { loading, data } = useGraphQuery(FETCH_STATISTICS_QUERY, {
    variables: {
      page: '1,30',
      sort: 'issuedAt',
    },
  });

  const { loading: blocksLoading, data: blocksData } = useGraphQuery(FETCH_BLOCKS_DATA_QUERY, {
    variables: {
      data: { type: tabs.value },
    },
  });

  const chartData = blocksData?.blocksData ?? [];
  const statistics = data?.statistics ?? { statistics: [], total: 0 };

  const renderTabs = (
    <CustomTabs
      value={tabs.value}
      onChange={tabs.onChange}
      variant="fullWidth"
      slotProps={{ tab: { px: 0 } }}
    >
      {TABS.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </CustomTabs>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={6}>
        <Card>
          {renderTabs}
          <ChartWidget
            loading={blocksLoading}
            chart={{
              categories: chartData!.map((item) => item.base).reverse(),
              series: [
                {
                  name: 'New Blocks',
                  data: chartData!
                    .map((item) => Number(((item?.hashRate! || 1) / 10 ** 9).toFixed(2)))
                    .reverse(),
                },
              ],
              options: {
                xaxis: {
                  tooltip: { enabled: false },
                  tickAmount: 30,
                  categories: chartData!.map((item) => item.base).reverse(),
                },
                yaxis: {
                  labels: {
                    formatter(val) {
                      return `${Math.floor(val)}`;
                    },
                  },
                },
              },
              colors: [alpha(theme.palette.primary.dark, 0.8)],
            }}
            unit="GH/s"
            card
          />
        </Card>
      </Grid>
      <Grid xs={12} md={6}>
        <ChartWidget
          loading={loading}
          title="TXC Shared"
          chart={{
            series: [
              {
                name: 'Daily Reward',
                data: statistics!
                  .statistics!.map((item) => (item!.txcShared ?? 0) / 10 ** 8)
                  .reverse(),
              },
            ],
            options: {
              xaxis: {
                tooltip: { enabled: false },
                tickAmount: 30,
                categories: statistics
                  ?.statistics!.map((item) => formatDate(item!.issuedAt))
                  .reverse(),
              },
              yaxis: {
                labels: {
                  formatter(val) {
                    return `${Math.floor(val)}`;
                  },
                },
              },
            },
            colors: [alpha(theme.palette.warning.main, 0.8)],
          }}
        />
      </Grid>
    </Grid>
  );
}
