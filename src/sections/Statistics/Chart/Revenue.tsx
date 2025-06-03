import { useMemo } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { formatCurrency } from 'src/utils/formatCurrency';

import { Chart, useChart } from 'src/components/Chart';

import { useFetchRevenue } from '../useApollo';

// ----------------------------------------------------------------------

export default function RevenueOverview() {
  const { revenue, loading } = useFetchRevenue();

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: ['Income', ...revenue.spent.map((item) => item?.label ?? '')],
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              formatter(w) {
                return formatCurrency(
                  w.globals.seriesTotals.reduce((prev: any, save: any) => prev + save, 0)
                );
              },
            },
            value: {
              show: true,
              formatter(val) {
                return formatCurrency(+val);
              },
            },
          },
        },
      },
    },
    yaxis: {
      labels: {
        formatter(val) {
          return formatCurrency(val);
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  const series = useMemo(
    () => [
      revenue.total - revenue.spent.reduce((prev, cur) => prev + (cur?.value ?? 0), 0),
      ...revenue.spent.map((spt) => spt?.value ?? 0),
    ],
    [revenue]
  );

  return (
    <Card>
      <CardHeader title="Use of Funds" />

      <Chart
        type="donut"
        series={series}
        options={chartOptions}
        loading={loading}
        sx={{
          my: 3,
          mx: 'auto',
          width: 259,
          height: 259,
        }}
      />
    </Card>
  );
}
