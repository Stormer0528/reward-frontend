import dayjs from 'dayjs';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { formatWeekNumber } from 'src/utils/format-time';

import { ChartSelect } from 'src/components/chart';
import ChartWidget from 'src/components/ChartWidget';

import { useFetchMemberReward } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const [selectedSeries, setSelectedSeries] = useState('Day');
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = series.find((i) => i.label === selectedSeries);

  const { loading, memberReward, fetchMemberReward } = useFetchMemberReward();

  useEffect(() => {
    fetchMemberReward({ variables: { data: { type: currentSeries?.value ?? '' } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSeries]);

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

      <ChartWidget
        loading={loading}
        chart={{
          categories: memberReward!.map((item) => item.baseDate).reverse(),
          series: [
            {
              name: 'Reward',
              data: memberReward.map((item) => Number(item.reward.toFixed(8))).reverse(),
            },
          ],
          options: {
            xaxis: {
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
              labels: {
                formatter(val) {
                  return `${Math.floor(val)}`;
                },
              },
            },
          },
          colors: [alpha(theme.palette.info.dark, 0.8)],
        }}
        card
      />
    </Card>
  );
}
