import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import { Card, CardHeader } from '@mui/material';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/Chart';

import { useFetchCommissionByPeriod } from '../useApollo';

const series = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function Commission() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Week');

  const currentSeries = series.find((i) => i.label === selectedSeries)!;

  const { loading, commission } = useFetchCommissionByPeriod(currentSeries.value);

  const max = Math.max(...commission.map((item) => item.revenue));

  const chartColors = [hexAlpha(theme.palette.primary.dark, 0.8), theme.palette.warning.main];

  const chartSeries = useMemo(
    () => [
      {
        name: 'Commission',
        type: 'column',
        data: commission.map((item) => item.commission / 1000).reverse(),
      },
      {
        name: 'Revenue',
        type: 'area',
        data: commission.map((item) => item.revenue / 1000).reverse(),
      },
    ],
    [commission]
  );

  const chartOptions = useChart({
    colors: chartColors,
    stroke: { width: [0, 2] },
    fill: { type: ['solid', 'gradient'] },
    legend: { show: true },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      categories: commission!
        .map((item) =>
          currentSeries?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: {
      stepSize: Math.floor(max / 4000),
      labels: {
        formatter(val: any) {
          return `${Math.floor(val)}K`;
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
        title="Revenue & Commission"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        type="line"
        loading={loading}
        series={chartSeries}
        options={chartOptions}
        sx={{ height: 305, p: 2 }}
      />
    </Card>
  );
}
