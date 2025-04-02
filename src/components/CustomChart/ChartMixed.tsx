import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { Chart, useChart } from 'src/components/chart';

import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

type Props = {
  loading: boolean;
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name: string;
      type: string;
      data: number[];
    }[];
    options?: any;
  };
};

export function ChartMixed({ loading, chart }: Props) {
  const theme = useTheme();
  const { colorScheme } = useSettingsContext();

  const chartColors = chart.colors ?? [
    hexAlpha(theme.palette.primary.dark, 0.8),
    theme.palette.warning.main,
  ];

  const chartOptions = useChart({
    colors: chartColors,
    stroke: { width: [0, 2] },
    fill: { type: ['solid', 'gradient'] },
    legend: { show: true },
    xaxis: {
      categories: chart.categories,
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: ({ dataPointIndex, w }) => {
        const category = w.globals.categoryLabels.length
          ? w.globals.categoryLabels[dataPointIndex]
          : w.globals.labels[dataPointIndex];
        const data = w.globals.initialSeries.map((item: any) => item.data[dataPointIndex]);

        const chartData = data.reduce(
          (
            prev: any,
            item: any,
            index: number
          ) => `${prev}<div style="display: flex; padding: 10px;"><div style="margin-right: 8px; width: 12px; height: 12px; border-radius: 50%; background-color: ${w.globals.colors[index]}; margin-top: 4px;">
          </div><div><span style="color: ${colorScheme === 'dark' ? '#ffffff' : '#637381'}; margin-right: 5px;">${w.globals.seriesNames[index]}:</span> <span style="font-weight: bold;">${item}K</span></div></div>`,
          ''
        );

        return `<div style="background: ${colorScheme === 'dark' ? '#141A21' : '#ffffff'}; color: ${colorScheme === 'dark' ? '#ffffff' : '#6a7987'};"><div style="background: ${colorScheme === 'dark' ? '#28323D' : '#f4f6f8'}; color: ${colorScheme === 'dark' ? '#ffffff' : '#637381'}; font-weight: bold; padding: 5px 10px;">${category}</div>${chartData}</div>`;
      },
    },
    ...chart.options,
  });

  return (
    <>
      {loading ? (
        <Card>
          <Paper sx={{ p: 3 }}>
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
            <Skeleton variant="text" sx={{ fontSize: 26 }} />
          </Paper>
        </Card>
      ) : (
        <Chart type="line" series={chart.series} options={chartOptions} height={320} />
      )}
    </>
  );
}
