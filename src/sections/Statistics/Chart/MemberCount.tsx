import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/Chart';
// import { ChartWidget } from 'src/components/CustomChart';

import { useFetchMemberCounts } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberCount() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Day');

  const currentSeries = series.find((i) => i.label === selectedSeries)!;

  const { loading, memberCount } = useFetchMemberCounts(currentSeries.value);

  const chartSeries = useMemo(
    () => [
      {
        name: 'Miners',
        data: memberCount.map((item) => item.minerCount).reverse(),
      },
    ],
    [memberCount]
  );

  const chartOptions = useChart({
    stroke: { width: 0 },
    plotOptions: {
      bar: { columnWidth: '80%' },
    },
    colors: [alpha(theme.palette.success.darker, 0.8)],
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 10,
      categories: memberCount!
        .map((item) =>
          currentSeries?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: {
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
        title="New Miners"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        type="bar"
        loading={loading}
        series={chartSeries}
        options={chartOptions}
        sx={{ height: 305, p: 2 }}
      />
    </Card>
  );
}
