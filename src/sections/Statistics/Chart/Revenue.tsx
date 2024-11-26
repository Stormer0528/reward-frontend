import { useEffect } from 'react';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { formatCurrency } from 'src/utils/formatCurrency';

import { Chart, useChart } from 'src/components/chart';

import { useFetchRevenue } from '../useApollo';

// ----------------------------------------------------------------------

const categories = [
  { label: 'Income', value: 'revenue' },
  { label: 'Facility', value: 'mineFacility' },
  { label: 'Electricity', value: 'mineElectricy' },
  { label: 'Pending Commission', value: 'commissionPending' },
  { label: 'Maintainance', value: 'mineMaintainance' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'New Equipment', value: 'mineNewEquipment' },
  { label: 'Approved Commission', value: 'commissionApprovedPaid' },
  { label: 'TXC Promotion', value: 'marketingTXCPromotion' },
  { label: 'MineTXC Promotion', value: 'marketingMineTXCPromotion' },
];

export default function RevenueOverview() {
  const theme = useTheme();

  const chartColors = [
    hexAlpha(theme.palette.primary.dark, 0.8),
    theme.palette.info.dark,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.error.main,
    theme.palette.warning.dark,
    theme.palette.primary.main,
    theme.palette.info.light,
    theme.palette.warning.main,
  ];

  const { loading, revenue, fetchRevenue } = useFetchRevenue();

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    labels: categories.map((item) => item.label),
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
    tooltip: {
      custom: ({ seriesIndex, w }) => {
        const data = w.globals.series[seriesIndex];
        const legend = w.globals.seriesNames[seriesIndex];
        const color = w.globals.colors[seriesIndex];

        return `<div style="background: #ffffff; color: #6a7987;"><div style="display: flex; padding: 10px;">
        <div style="margin-right: 8px; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; margin-top: 4px;">
        </div>
        <div><span style="color: #637381; margin-right: 5px;">${legend}:</span> <span style="font-weight: bold;">${formatCurrency(data)}</span></div></div></div>`;
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  useEffect(() => {
    fetchRevenue({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type RevenueKeys = keyof typeof revenue;

  return (
    <Card>
      <CardHeader title="Use Of Funds" />
      {loading ? (
        <Paper sx={{ p: 3 }}>
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
        </Paper>
      ) : (
        <Chart
          type="donut"
          series={[
            revenue.revenue -
              Object.keys(revenue)
                .filter(
                  (ky): ky is Exclude<RevenueKeys, 'revenue' | '__typename'> =>
                    ky !== 'revenue' && ky !== '__typename'
                )
                .reduce((prev, cur) => prev + revenue[cur], 0),
            revenue.mineFacility,
            revenue.mineElectricy,
            revenue.commissionPending,
            revenue.mineMaintainance,
            revenue.infrastructure,
            revenue.mineNewEquipment,
            revenue.commissionApproved,
            revenue.commissionPaid,
            revenue.marketingTXCPromotion,
            revenue.marketingMineTXCPromotion,
          ]}
          options={chartOptions}
          width={274}
          height={274}
          sx={{
            my: 3,
            mx: 'auto',
          }}
        />
      )}
    </Card>
  );
}
