import dayjs from 'dayjs';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { ChartSelect } from 'src/components/chart';
import { ChartWidget } from 'src/components/CustomChart';

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
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = series.find((i) => i.label === selectedSeries);

  const { loading: blocksLoading, blocks, fetchBlocks } = useFetchBlocks();

  useEffect(() => {
    fetchBlocks({ variables: { data: { type: currentSeries?.value ?? '' } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSeries]);

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

      <ChartWidget
        loading={blocksLoading}
        chart={{
          categories: blocks!.map((item) => item.base).reverse(),
          series: [
            {
              name: 'Hashrate',
              data: blocks!
                .map((item) => Number(((item?.hashRate! || 1) / 10 ** 9).toFixed(2)))
                .reverse(),
            },
          ],
          options: {
            xaxis: {
              tooltip: { enabled: false },
              tickAmount: 18,
              categories: blocks!
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
          },
          colors: [alpha(theme.palette.primary.dark, 0.8)],
        }}
        unit="GH/s"
        card
      />
    </Card>
  );
}
