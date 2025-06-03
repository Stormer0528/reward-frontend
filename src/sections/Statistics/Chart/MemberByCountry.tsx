import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { Chart, useChart } from 'src/components/Chart';

import { useFetchMemberByCountry } from '../useApollo';

export default function MemberByCountry() {
  const { loading, members } = useFetchMemberByCountry();

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: members.map((item) => item?.country ?? ''),
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${(+val).toFixed(2)}%`;
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Miners by Country" />

      <Chart
        type="donut"
        loading={loading}
        series={members.map((item) => item?.memberCount ?? 0)}
        options={chartOptions}
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
