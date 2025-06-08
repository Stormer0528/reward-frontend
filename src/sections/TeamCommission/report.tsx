import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { ColDef, ITextFilterParams } from '@ag-grid-community/core';
import type { WeeklyCommission } from '../Commission/type';
import type { WeeklyReport, TeamReportSection } from 'src/__generated__/graphql';

import dayjs from 'dayjs';
import { useMemo, useEffect } from 'react';

import { useQuery as useQueryString } from 'src/routes/hooks';

import { customizeFullName } from 'src/utils/helper';
import { parseFilterModel } from 'src/utils/parseFilter';
import { formatWeekNumber } from 'src/utils/format-time';

import { AgGrid } from 'src/components/AgGrid';

import { useFetchTeamCommission } from './useApollo';

interface Props {
  teamReport: TeamReportSection;
}

export default function Report({ teamReport }: Props) {
  const [{ page = '1,50', sort = '-createdAt', filter }] = useQueryString();

  const graphQueryFilter = useMemo(() => parseFilterModel({}, filter), [filter]);

  const { loading, rowCount, commissions, fetchTeamCommission } = useFetchTeamCommission();

  useEffect(() => {
    fetchTeamCommission({
      variables: { filter: graphQueryFilter, page, sort, teamReport },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphQueryFilter, page, sort, teamReport]);

  const colDefs = useMemo<ColDef<WeeklyCommission>[]>(
    () => [
      {
        field: 'weekStartDate',
        headerName: 'Week',
        width: 200,
        filter: 'agDateColumnFilter',
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyReport>) =>
          `#${formatWeekNumber(data?.weekStartDate)} (${dayjs(data?.weekStartDate).utc().format('MM/DD')} - ${dayjs(data?.weekStartDate).utc().add(6, 'day').format('MM/DD')})`,
      },
      {
        field: 'username',
        headerName: 'Username',
        width: 150,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
      },
      {
        field: 'fullName',
        headerName: 'Full Name',
        width: 140,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        filterParams: { buttons: ['reset'] } as ITextFilterParams,
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          customizeFullName(data?.fullName ?? ''),
      },
      {
        headerName: 'BegLR',
        width: 110,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.begL}, R${data?.begR}`,
      },
      {
        headerName: 'NewLR',
        width: 110,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.newL}, R${data?.newR}`,
      },
      {
        headerName: 'MaxLR',
        width: 110,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.maxL}, R${data?.maxR}`,
      },
      {
        headerName: 'PackageLR',
        width: 110,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.pkgL}, R${data?.pkgR}`,
      },
      {
        headerName: 'EndLR',
        width: 110,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
        cellRenderer: ({ data }: CustomCellRendererProps<WeeklyCommission>) =>
          `L${data?.endL}, R${data?.endR}`,
      },
      {
        field: 'commission',
        headerName: 'Commission',
        width: 140,
        filter: 'agNumberColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
      },
      {
        field: 'shortNote',
        headerName: 'Note',
        flex: 1,
        filter: 'agTextColumnFilter',
        resizable: true,
        editable: false,
        cellClass: 'tabular-nums',
      },
    ],

    []
  );

  return (
    <AgGrid<WeeklyCommission>
      gridKey="team-commission-report-list"
      loading={loading}
      rowData={commissions}
      columnDefs={colDefs}
      totalRowCount={rowCount}
    />
  );
}
