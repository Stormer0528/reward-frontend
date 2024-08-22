import Typography from '@mui/material/Typography';
import { GridToolbarContainer } from '@mui/x-data-grid';

interface AccountTableToolBarProps {
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

export function TableToolBar({ setFilterButtonEl }: AccountTableToolBarProps) {
  return (
    <GridToolbarContainer>
      <Typography variant="subtitle1">Reward</Typography>
    </GridToolbarContainer>
  );
}
