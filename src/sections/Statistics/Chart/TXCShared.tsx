import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { alpha, useTheme } from '@mui/material/styles';

import { ChartSelect } from 'src/components/chart';
import ChartWidget from 'src/components/ChartWidget';

import { useFetchTXCShares } from '../useApollo';

// ----------------------------------------------------------------------

const series = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
];

export default function TXCShared() {
  const [selectedSeries, setSelectedSeries] = useState('Day');
  const theme = useTheme();

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = series.find((i) => i.label === selectedSeries);

  const { loading, txcShares, fetchTXCShares } = useFetchTXCShares();

  useEffect(() => {
    fetchTXCShares({ variables: { data: { type: currentSeries?.value ?? '' } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <ChartWidget
        loading={loading}
        title="TXC Shared"
        chart={{
          series: [
            {
              name: 'TXC Shared',
              data: txcShares!.map((item) => item.txc).reverse(),
            },
          ],
          options: {
            xaxis: {
              tooltip: { enabled: false },
              tickAmount: 18,
              categories: txcShares!.map((item) => item.base).reverse(),
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
        card
      />
    </Card>
  );
}
