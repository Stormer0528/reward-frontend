import type { LabelColor } from 'src/components/Label';
import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ITextFilterParams } from '@ag-grid-community/core';

import dayjs from 'dayjs';
import { useMemo, useState, useEffect } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';

import { useAgQuery as useQueryString } from 'src/routes/hooks';

import { formatWeekNumber } from 'src/utils/format-time';
import { parseFilterModel } from 'src/utils/parseFilter';

import { TeamReportSection, type WeeklyReport } from 'src/__generated__/graphql';

// import { Label } from 'src/components/Label';
import { AgGrid } from 'src/components/AgGrid';

import { useFetchTeamCommission, useFetchTeamCommissionStats } from './useApollo';

import type { WeeklyCommission } from '../Commission/type';

// ----------------------------------------------------------------------

const STATUS_OPTIONS: { value: string; label: string; color: LabelColor }[] = [
  { value: 'LEFT', label: 'Left', color: 'info' },
  { value: 'RIGHT', label: 'Right', color: 'success' },
  { value: 'REFERRAL', label: 'Referral', color: 'secondary' },
];

export default function TeamCommissionTable() {
  const [teamReport, setTeamReport] = useState<TeamReportSection>(TeamReportSection.Left);
  const [{ page = '1,50', sort = '-createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { stats, fetchTeamCommissionStats } = useFetchTeamCommissionStats();
  const { loading, rowCount, commissions, fetchTeamCommission } = useFetchTeamCommission();

  const handleTabChange = (event: React.SyntheticEvent, newValue: TeamReportSection) => {
    setTeamReport(newValue);
  };

  useEffect(() => {
    fetchTeamCommission({
      variables: { filter: graphQueryFilter, page, sort, teamReport },
    });

    fetchTeamCommissionStats({
      variables: {
        leftFilter: TeamReportSection.Left,
        rightFilter: TeamReportSection.Right,
        referralFilter: TeamReportSection.Referral,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort, teamReport]);

  const colDefs = useMemo<ColDef<WeeklyCommission>[]>(
    () => [
      {
        field: 'weekStartDate',
        headerName: 'Week',
        width: 250,
        filter: 'agDateColumnFilter',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyReport>) =>
          `week #${formatWeekNumber(data?.weekStartDate)} (${dayjs(data?.weekStartDate).utc().format('MM/DD')} - ${dayjs(data?.weekStartDate).utc().add(6, 'day').format('MM/DD')})`,
      },
      {
        field: 'member.username',
        headerName: 'Username',
        width: 140,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'member.assetId',
        headerName: 'Asset ID',
        width: 110,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        headerName: 'BegLR',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.begL}, R${data?.begR}`,
      },
      {
        headerName: 'NewLR',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.newL}, R${data?.newR}`,
      },
      {
        headerName: 'MaxLR',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.maxL}, R${data?.maxR}`,
      },
      {
        headerName: 'PackageLR',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.pkgL}, R${data?.pkgR}`,
      },
      {
        headerName: 'EndLR',
        width: 120,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.endL}, R${data?.endR}`,
      },
      {
        field: 'commission',
        headerName: 'Commission',
        width: 150,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
      },
      {
        field: 'shortNote',
        headerName: 'Note',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'ag-number-cell',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log('stats => ', stats);

  return (
    <>
      <Card sx={{ borderRadius: '16px 16px 0 0' }}>
        <Tabs
          value={teamReport}
          onChange={handleTabChange}
          sx={{
            px: 2.5,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              iconPosition="end"
              value={tab.value}
              label={tab.label}
              // icon={
              //   <Label
              //     variant={(tab.value === filter?.teamReport && 'filled') || 'soft'}
              //     color={tab.color}
              //   >
              //     {stats ? stats[tab.value].total! : 0}
              //   </Label>
              // }
            />
          ))}
        </Tabs>
      </Card>
      <Card
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '0 0 16px 16px',
        }}
      >
        <AgGrid<WeeklyCommission>
          gridKey="team-commission-list"
          loading={loading}
          rowData={commissions}
          columnDefs={colDefs}
          totalRowCount={rowCount}
        />
      </Card>
    </>
  );
}
