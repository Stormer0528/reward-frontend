import type { IStatisticsFilters, IStatisticsPrismaFilter } from 'src/types/statistics';

import { useMemo } from 'react';
import { useQuery as useGraphQuery } from '@apollo/client';

import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';

import { useQuery } from 'src/routes/hooks';

import ChartWidget from 'src/components/ChartWidget';

import { FETCH_BLOCKS_QUERY } from './query';

const defaultFilter: IStatisticsFilters = {
  search: '',
  newBlocks: 0,
  totalBlocks: 0,
  newHashPower: 0,
  totalHashPower: 0,
  members: 0,
};

export default function Chart() {
  const [query] = useQuery<IStatisticsFilters>();

  const theme = useTheme();

  const { filter = defaultFilter } = query;

  const graphQueryFilter = useMemo(() => {
    const filterObj: IStatisticsPrismaFilter = {};

    if (filter.search) {
      filterObj.OR = [{}];
    }

    return filterObj;
  }, [filter]);

  const { loading, data: blocksData } = useGraphQuery(FETCH_BLOCKS_QUERY, {
    variables: {
      page: '1,200',
      filter: graphQueryFilter,
      sort: 'blockNo',
    },
  });

  const blocks = blocksData?.blocks ?? { blocks: [], total: 0 };

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={6}>
        <ChartWidget
          loading={loading}
          key="hashRate"
          title="Hashrate"
          tooltipCategory="Block"
          unit="GH/s"
          chart={{
            series: [
              {
                name: 'Hashrate',
                data: blocks!
                  .blocks!.map((item) => Number(((item?.hashRate! || 1) / 10 ** 9).toFixed(2)))
                  .reverse(),
              },
            ],
            options: {
              xaxis: {
                tooltip: { enabled: false },
                tickAmount: 30,
                categories: blocks!.blocks!.map((item) => `${item?.blockNo}`).reverse(),
              },
            },
            colors: [alpha(theme.palette.primary.dark, 0.8)],
          }}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <ChartWidget
          loading={loading}
          key="difficulty"
          title="Network Difficulty"
          tooltipCategory="Block"
          chart={{
            categories: blocks!.blocks!.map((item) => `${item?.blockNo}`).reverse(),
            series: [
              {
                name: 'Pos Difficulty',
                data: blocks!.blocks!.map((item) => Math.floor(item?.difficulty!)).reverse(),
              },
            ],
            options: {
              xaxis: {
                tooltip: { enabled: false },
                tickAmount: 30,
                categories: blocks!.blocks!.map((item) => `${item?.blockNo}`).reverse(),
              },
            },
            colors: [alpha(theme.palette.warning.main, 0.8)],
          }}
        />
      </Grid>
    </Grid>
  );
}
