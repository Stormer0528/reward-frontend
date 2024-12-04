import type { TablePaginationProps } from '@mui/material/TablePagination';
import type { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';

import MuiPagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

function CustomPagination({
  page,
  count,
  rowsPerPage,
  onPageChange,
  className,
}: TablePaginationActionsProps) {
  return (
    <MuiPagination
      color="primary"
      className={className}
      count={Math.ceil(count / rowsPerPage)}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

export function Pagination(props: TablePaginationProps) {
  return <TablePagination ActionsComponent={CustomPagination} component="div" {...props} />;
}
