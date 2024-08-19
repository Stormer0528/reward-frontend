import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/formatNumber';

import { Iconify } from 'src/components/Iconify';
import { Chart, useChart } from 'src/components/chart';

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

        return `<div style="background: #ffffff; color: #6a7987;">
          <div style="background: #f4f6f8; color: #637381; font-weight: bold; padding: 5px 10px;">${category}</div>
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
        <Skeleton variant="text" sx={{ width: '100%', height: 30 }} />
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
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 3,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ mt: 1.5, mb: 1, typography: 'h3' }}>
          {loading ? <Skeleton variant="text" sx={{ width: '40%', height: 60 }} /> : fNumber(total)}
        </Box>
        {renderTrending}
      </Box>

      {loading ? (
        <Skeleton variant="text" sx={{ width: 100, height: 60 }} />
      ) : (
        <Chart
          type="bar"
          series={[{ data: chart.series }]}
          options={chartOptions}
          width={60}
          height={40}
        />
      )}
    </Card>
  );
}
