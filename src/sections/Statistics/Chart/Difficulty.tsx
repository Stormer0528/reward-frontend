import { useEffect } from 'react';

import { alpha, useTheme } from '@mui/material/styles';

import { ChartWidget } from 'src/components/CustomChart';

import { useFetchBlocksQuery } from '../useApollo';

export default function Difficulty() {
  const theme = useTheme();

  const { loading, blocks, fetchBlocks } = useFetchBlocksQuery();

  useEffect(() => {
    fetchBlocks({ variables: { page: '1,200', sort: 'blockNo' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChartWidget
      loading={loading}
      key="difficulty"
      title="Network Difficulty"
      tooltipCategory="Block"
      chart={{
        categories: blocks!.map((item) => `${item?.blockNo}`).reverse(),
        series: [
          {
            name: 'Pos Difficulty',
            data: blocks!.map((item) => Math.floor(item?.difficulty)).reverse(),
          },
        ],
        options: {
          xaxis: {
            tooltip: { enabled: false },
            tickAmount: 25,
            categories: blocks!.map((item) => `${item?.blockNo}`).reverse(),
          },
        },
        colors: [alpha(theme.palette.warning.main, 0.8)],
      }}
    />
  );
}
