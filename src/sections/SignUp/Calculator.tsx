import type { UseBooleanReturn } from 'minimal-shared/hooks';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import CalculatorForm from 'src/sections/Calculator/Form';

interface Props {
  open: UseBooleanReturn;
}

export default function Calculator({ open }: Props) {
  return (
    <Dialog fullWidth maxWidth="md" open={open.value} onClose={open.onFalse}>
      <CalculatorForm />
      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={open.onFalse}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
