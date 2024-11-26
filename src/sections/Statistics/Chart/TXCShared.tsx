import { useEffect } from 'react';

import { alpha, useTheme } from '@mui/material/styles';

import { formatDate } from 'src/utils/format-time';

import ChartWidget from 'src/components/ChartWidget';

import { useFetchStatistics } from '../useApollo';

export default function TXCShared() {
  const theme = useTheme();

  const { loading, statistics, fetchStatistics } = useFetchStatistics();

  useEffect(() => {
    fetchStatistics({ variables: { page: '1,30', sort: 'issuedAt' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChartWidget
      loading={loading}
      title="TXC Shared"
      chart={{
        series: [
          {
            name: 'TXC Shared',
            data: statistics!.map((item) => (item!.txcShared ?? 0) / 10 ** 8).reverse(),
          },
        ],
        options: {
          xaxis: {
            tooltip: { enabled: false },
            tickAmount: 18,
            categories: statistics!.map((item) => formatDate(item!.issuedAt)).reverse(),
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
    />
  );
}
