import dayjs from 'dayjs';
import { useMemo, useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';
import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, useChart, ChartSelect } from 'src/components/Chart';

import { useFetchTXCShares } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function TXCShared() {
  const theme = useTheme();
  const [selectedSeries, setSelectedSeries] = useState('Day');

  const currentSeries = series.find((i) => i.label === selectedSeries)!;

  const { loading, txcShares } = useFetchTXCShares(currentSeries.value);

  const chartSeries = useMemo(
    () => [
      {
        name: 'TXC Shared',
        data: txcShares!.map((item) => item.txc).reverse(),
      },
    ],
    [txcShares]
  );

  const chartOptions = useChart({
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 12,
      categories: txcShares!
        .map((item) =>
          currentSeries?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: {
      title: { text: 'TXC Shared' },
      labels: {
        formatter(val: number) {
          return `${fNumber(Math.ceil(val))}`;
        },
      },
    },
    colors: [alpha(theme.palette.warning.main, 0.8)],
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card>
      <CardHeader
        title="TXC Shared"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        loading={loading}
        options={chartOptions}
        series={chartSeries}
        type="area"
        sx={{ height: 305, p: 2 }}
      />
    </Card>
  );
}
