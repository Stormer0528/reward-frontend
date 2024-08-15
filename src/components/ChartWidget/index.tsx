import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  loading: boolean;
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories?: string[];
    series: {
      name: string;
      data: number[];
    }[];
    options?: ChartOptions;
  };
  height?: number;
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap';
  card?: boolean;
  tooltipCategory?: string;
  unit?: string;
};

export default function ChartWidget({
  loading,
  title,
  subheader,
  chart,
  type,
  height,
  card,
  tooltipCategory,
  unit,
  ...other
}: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.main, theme.palette.warning.main];

  const chartOptions = useChart({
    colors: chartColors,
    xaxis: { categories: chart.categories },
    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        const category = w.globals.categoryLabels.length
          ? w.globals.categoryLabels[dataPointIndex]
          : w.globals.labels[dataPointIndex];
        const legend = w.globals.seriesNames[seriesIndex];
        const color = w.globals.colors[seriesIndex];

        return `<div style="background: #ffffff;">
          <div style="background: #f4f6f8; color: #637381; font-weight: bold; padding: 5px 10px;">${tooltipCategory}: ${category}</div>
          <div style="display: flex; padding: 10px;">
          <div style="margin-right: 8px; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; margin-top: 4px;">
          </div>
          <div><span style="color: #637381; margin-right: 5px;">${legend}:</span> <span style="font-weight: bold;">${data} ${unit}</span></div></div>
        </div>`;
      },
    },
    ...chart.options,
  });

  const currentSeries = chart.series;

  const chartRender = (
    <>
      {loading ? (
        <Paper sx={{ p: 3 }}>
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
        </Paper>
      ) : (
        <Chart
          type={type ?? 'area'}
          series={currentSeries}
          options={chartOptions}
          height={height ?? 320}
          sx={{ py: 2.5, pl: 1, pr: 2.5 }}
        />
      )}
    </>
  );

  return (
    <>
      {card ? (
        <>{chartRender}</>
      ) : (
        <Card {...other}>
          <CardHeader title={title} subheader={subheader} />

          {chartRender}
        </Card>
      )}
    </>
  );
}
