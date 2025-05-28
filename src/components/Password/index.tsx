import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'minimal-shared/hooks';

import { Iconify } from '../Iconify';
import ResetPassword from './ResetPassword';

export default function Password() {
  const open = useBoolean();

  return (
    <>
      <IconButton onClick={() => open.onTrue()}>
        <Iconify icon="wpf:password1" />
      </IconButton>

      <Dialog open={open.value} onClose={open.onFalse} fullWidth>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <ResetPassword open={open} />
        </DialogContent>
      </Dialog>
    </>
  );
}
