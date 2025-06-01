import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/Chart';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import { useTheme, useColorScheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { Iconify } from 'src/components/Iconify';
import { Chart, useChart } from 'src/components/Chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  loading: boolean;
  title: string;
  total: number;
  meta: number;
  metaText: string;
  chart: {
    colors?: string[];
    categories: string[];
    series: number[];
    options?: ChartOptions;
  };
};

export default function WidgetSummary({
  loading,
  title,
  meta,
  metaText,
  total,
  chart,
  sx,
  ...other
}: Props) {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const chartColors = chart.colors ?? [theme.palette.primary.main];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    stroke: { width: 0 },
    xaxis: { categories: chart.categories },
    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        const category = w.globals.categoryLabels.length
          ? w.globals.categoryLabels[dataPointIndex]
          : w.globals.labels[dataPointIndex];
        const color = w.globals.colors[seriesIndex];

        return `<div style="background: ${colorScheme === 'dark' ? '#141A21' : '#ffffff'}; color: ${colorScheme === 'dark' ? '#ffffff' : '#6a7987'};">
          <div style="background: ${colorScheme === 'dark' ? '#28323D' : '#f4f6f8'}; color: ${colorScheme === 'dark' ? '#ffffff' : '#637381'}; font-weight: bold; padding: 5px 10px;">${category}</div>
          <div style="display: flex; padding: 10px;">
          <div style="margin-right: 8px; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; margin-top: 4px;">
          </div>
          <div><span style="font-weight: bold;">${data}</span></div></div>
        </div>`;
      },
    },
    plotOptions: { bar: { borderRadius: 1.5, columnWidth: '64%' } },
    ...chart.options,
  });

  const renderTrending = (
    <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
      {loading ? (
        <Skeleton variant="text" sx={{ width: '80%', fontSize: theme.typography.body2.fontSize}} />
      ) : (
        <>
          <Iconify
            width={24}
            icon={
              meta < 0
                ? 'solar:double-alt-arrow-down-bold-duotone'
                : 'solar:double-alt-arrow-up-bold-duotone'
            }
            sx={{ flexShrink: 0, color: 'success.main', ...(meta < 0 && { color: 'error.main' }) }}
          />
          <Box component="span" sx={{ typography: 'subtitle2' }}>
            {meta > 0 && '+'}

            {meta}

            <Box component="span" sx={{ color: 'text.secondary', typography: 'body2', pl: 1 }}>
              {metaText}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <Card
      sx={[
        () => ({
          p: 3,
          display: 'flex',
          zIndex: 'unset',
          overflow: 'unset',
          alignItems: 'center',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ mt: 1.5, mb: 1, typography: 'h3' }}>
          {loading ? <Skeleton variant="text" sx={{ width: '40%'}} /> : fNumber(total)}
        </Box>
        {renderTrending}
      </Box>

      {loading ? (
        <Skeleton variant="text" sx={{ width: 100, height: 40 }} />
      ) : (
        <Chart
          type="bar"
          series={[{ data: chart.series }]}
          options={chartOptions}
          sx={{width: 60, height: 40}}
        />
      )}
    </Card>
  );
}
