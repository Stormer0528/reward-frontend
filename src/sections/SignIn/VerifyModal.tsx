import type { UseBooleanReturn } from 'minimal-shared/hooks';

import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useVerify2FAAndToken } from '../Profile/useApollo';

interface Props {
  signIn: Function;
  open: UseBooleanReturn;
}

export default function VerifyModal({ open, signIn }: Props) {
  const [token, setToken] = useState<string>('');

  const { loading, verify2FAAndToken } = useVerify2FAAndToken();

  return (
    <Dialog fullWidth maxWidth="xs" open={open.value} onClose={open.onFalse}>
      <DialogTitle>Verify</DialogTitle>
      <DialogContent>
        <Paper sx={{ py: 2 }}>
          <TextField
            variant="outlined"
            type="text"
            label="Code"
            fullWidth
            onChange={(e) => setToken(e.target.value)}
          />
        </Paper>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          variant="contained"
          loading={loading}
          onClick={async () => {
            const { data } = await verify2FAAndToken({
              variables: { data: { token } },
            });

            if (data) {
              signIn(data?.verify2FAToken?.accessToken ?? '');
            }
          }}
        >
          Verify
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
