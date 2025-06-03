import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/Chart';

import { useFetchMemberReward } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Day');

  const currentSeries = series.find((i) => i.label === selectedSeries)!;

  const { loading, memberReward } = useFetchMemberReward(currentSeries.value);

  const chartSeries = useMemo(
    () => [
      {
        name: 'Reward',
        data: memberReward.map((item) => Number(item.reward.toFixed(8))).reverse(),
      },
    ],
    [memberReward]
  );

  const chartOptions = useChart({
    colors: [alpha(theme.palette.info.dark, 0.8)],
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 10,
      categories: memberReward!
        .map((item) =>
          currentSeries?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: {
      title: { text: 'Reward' },
      labels: {
        formatter(val) {
          return `${Math.floor(val)}`;
        },
      },
    },
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card>
      <CardHeader
        title="Average per Miner"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        type="area"
        loading={loading}
        options={chartOptions}
        series={chartSeries}
        sx={{ height: 305, p: 2 }}
      />
    </Card>
  );
}
