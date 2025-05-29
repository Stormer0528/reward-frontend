import dayjs from 'dayjs';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { formatWeekNumber } from 'src/utils/format-time';

import { ChartSelect } from 'src/components/Chart';
import { ChartMixed } from 'src/components/CustomChart';

import { useFetchCommissionByPeriod } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function MemberReward() {
  const [selectedSeries, setSelectedSeries] = useState('Week');

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = series.find((i) => i.label === selectedSeries);

  const { loading, commission, fetchCommissionByPeriod } = useFetchCommissionByPeriod();

  const max = Math.max(...commission.map((item) => item.revenue));

  useEffect(() => {
    fetchCommissionByPeriod({ variables: { data: { type: currentSeries?.value ?? '' } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSeries]);
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

      <ChartMixed
        loading={loading}
        chart={{
          categories: commission!.map((item) => item.base).reverse(),
          series: [
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
              stepSize: Math.floor(max / 4000),
              labels: {
                formatter(val: any) {
                  return `${Math.floor(val)}K`;
                },
              },
            },
          },
        }}
      />
    </Card>
  );
}
