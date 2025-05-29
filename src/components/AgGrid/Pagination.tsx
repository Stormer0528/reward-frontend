import type { TablePaginationProps } from '@mui/material/TablePagination';

import MuiPagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function CustomPagination({ page, count, rowsPerPage, onPageChange }: TablePaginationActionsProps) {
  return (
    <MuiPagination
      color="primary"
      count={Math.ceil(count / rowsPerPage)}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
      sx={{ flexShrink: 0 }}
    />
  );
}

export function Pagination(props: TablePaginationProps) {
  return <TablePagination ActionsComponent={CustomPagination} component="div" {...props} />;
}
