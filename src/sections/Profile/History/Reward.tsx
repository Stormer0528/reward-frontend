import type { Member } from 'src/__generated__/graphql';

import { useMemo } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { useQuery } from 'src/routes/hooks';

import { fNumber } from 'src/utils/formatNumber';
import { formatDate } from 'src/utils/format-time';

import { Chart, useChart } from 'src/components/Chart';

import { useFetchMemberStatistics } from '../useApollo';

interface Props {
  me: Member;
}

export default function Reward({ me }: Props) {
  const [query] = useQuery();

  const { page = '1,10' } = query;

  const { loading, memberStatistics } = useFetchMemberStatistics({
    filter: { memberId: me.id },
    page,
    sort: 'issuedAt',
  });

  const chartSeries = useMemo(
    () => [
      {
        name: 'TXC Shared',
        data: memberStatistics.map((item) => (item?.txcShared ?? 0) / 10 ** 8).reverse(),
      },
      {
        name: 'Hash Power',
        data: memberStatistics.map((item) => item?.hashPower ?? 0).reverse(),
      },
    ],
    [memberStatistics]
  );

  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '80%',
      },
    },
    xaxis: {
      categories: memberStatistics.map((item) => `${formatDate(item?.issuedAt)}`).reverse(),
      labels: {
        show: true,
        formatter(val: string) {
          return formatDate(val, 'MMM DD');
        },
      },
    },
    yaxis: {
      labels: {
        formatter(val) {
          return `${fNumber(Math.ceil(val))}`;
        },
      },
    },
  });

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader title="Reward" />
      <Chart
        type="bar"
        loading={loading}
        series={chartSeries}
        options={chartOptions}
        sx={{ height: 492, padding: 2 }}
      />
    </Card>
  );
}
