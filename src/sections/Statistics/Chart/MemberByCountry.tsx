import { useEffect } from 'react';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import CardHeader from '@mui/material/CardHeader';
import { useColorScheme } from '@mui/material/styles';

import { Chart, useChart } from 'src/components/chart';

import { useFetchMemberByCountry } from '../useApollo';

export default function MemberByCountry() {
  const { colorScheme } = useColorScheme();

  const { loading, members, fetchMembersByCountry } = useFetchMemberByCountry();

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    // colors: chartColors,
    labels: members.map((item) => item?.country ?? ''),
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    tooltip: {
      custom: ({ seriesIndex, w }) => {
        const data = w.globals.series[seriesIndex];
        const legend = w.globals.seriesNames[seriesIndex];
        const color = w.globals.colors[seriesIndex];

        return `<div style="background: ${colorScheme === 'dark' ? '#141A21' : '#ffffff'} ; color: ${colorScheme === 'dark' ? '#ffffff' : '#6a7987'};"><div style="display: flex; padding: 10px;">
        <div style="margin-right: 8px; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; margin-top: 4px;">
        </div>
        <div><span style="color: ${colorScheme === 'dark' ? '#ffffff' : '#637381'}; margin-right: 5px;">${legend}:</span> <span style="font-weight: bold;">${data}</span></div></div></div>`;
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
    fetchMembersByCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardHeader title="Miners by Country" />

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
          series={members.map((item) => item?.memberCount ?? 0)}
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
