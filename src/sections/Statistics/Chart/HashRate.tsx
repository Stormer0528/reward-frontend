import type { ApexOptions } from 'apexcharts';

import dayjs from 'dayjs';
import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { formatWeekNumber } from 'src/utils/format-time';

import { Chart, ChartSelect } from 'src/components/Chart';

import { useFetchBlocks } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'block', label: 'Block' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

export default function HashRate() {
  const [selectedSeries, setSelectedSeries] = useState('Block');

  const currentSeries = series.find((i) => i.label === selectedSeries)!;

  const { loading, blocks } = useFetchBlocks(currentSeries.value);

  const chartSeries = [
    {
      name: 'Hashrate',
      data: blocks!.map((item) => Number(((item?.hashRate ?? 0) / 10 ** 9).toFixed(2))).reverse(),
      type: 'area',
    },
    {
      name: 'Sold HashPower',
      data: blocks!.map((item) => item.soldHashPower / 1000).reverse(),
      type: 'line',
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: [2.5, 2.5],
    },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      tooltip: { enabled: false },
      tickAmount: 5,
      categories: blocks!
        .map((item) =>
          currentSeries?.value === 'week'
            ? `#${formatWeekNumber(item.baseDate)} (${dayjs(item.baseDate).utc().format('MM/DD')} - ${dayjs(item.baseDate).utc().add(6, 'day').format('MM/DD')})`
            : item.base
        )
        .reverse(),
    },
    yaxis: [
      {
        title: {
          text: 'HashRate',
        },
        labels: {
          formatter: (value: number) => `${Math.floor(value)}GH/s`,
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sold HashPower',
        },
        labels: {
          formatter: (value: number) => `${value}GH/s`,
        },
        min: 0,
      },
    ],
    colors: ['#228a7c', '#ca2f31'],
    fill: {
      opacity: 0.6,
    },
    legend: { show: false },
  };

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card>
      <CardHeader
        title="Hash Rate"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        loading={loading}
        sx={{ height: 305, p: 2 }}
      />
    </Card>
  );
}
