import dayjs from 'dayjs';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { ChartSelect } from 'src/components/chart';
import ChartWidget from 'src/components/ChartWidget';

import { useFetchCommissionByPeriod } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const [selectedSeries, setSelectedSeries] = useState('Week');
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = series.find((i) => i.label === selectedSeries);

  const { loading, commission, fetchCommissionByPeriod } = useFetchCommissionByPeriod();

  useEffect(() => {
    fetchCommissionByPeriod({ variables: { data: { type: currentSeries?.value ?? '' } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSeries]);
  return (
    <Card>
      <CardHeader
        title="Commission"
        action={
          <ChartSelect
            options={series.map((item) => item.label)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <ChartWidget
        loading={loading}
        chart={{
          categories: commission!.map((item) => item.base).reverse(),
          series: [
            {
              name: 'Commission',
              data: commission.map((item) => item.commission).reverse(),
            },
          ],
          options: {
            xaxis: {
              tooltip: { enabled: false },
              tickAmount: 10,
              categories: commission!
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
        card
      />
    </Card>
  );
}
