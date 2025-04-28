import QRCode from 'react-qr-code';
import { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean, type UseBooleanReturn } from 'src/hooks/useBoolean';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

import { useApollo } from 'src/sections/SignIn/useApollo';

import { useAuthContext } from 'src/auth/hooks';

import { useFetchMe, useGenerate2FA, useVerify2FAAndEnable } from '../useApollo';

interface Props {
  open: UseBooleanReturn;
}

export default function PasswordModal({ open }: Props) {
  const { user, code } = useAuthContext();
  const password = useBoolean();

  const [step, setStep] = useState<number>(0);
  const [token, setToken] = useState<string>('');
  const [newPassword, setNewPassword] = useState<any>();

  const { loading, submitLogin } = useApollo();
  const { qrString, generate2FA } = useGenerate2FA();
  const { fetchMe } = useFetchMe();
  const { loading: verifyLoading, verify2FAAndEnable } = useVerify2FAAndEnable();

  const confirmPassword = (
    <TextField
      variant="outlined"
      type={password.value ? 'text' : 'password'}
      fullWidth
      label="Confirm Password"
      onChange={(e) => {
        setNewPassword(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="solar:user-rounded-bold" width={24} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={password.onToggle} edge="end">
              <Iconify
                icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                width={24}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );

  const QRContent = (
    <Paper sx={{ display: 'flex', justifyContent: 'center' }}>
      <QRCode value={qrString ?? ''} size={256} level="H" />
    </Paper>
  );

  const verifyContent = (
    <TextField
      variant="outlined"
      type="text"
      label="Code"
      fullWidth
      onChange={(e) => setToken(e.target.value)}
    />
  );

  useEffect(() => {
    if (code) {
      setStep(1);
      generate2FA();
    }
  }, [code, generate2FA]);

  return (
    <Dialog fullWidth maxWidth="xs" open={open.value} onClose={open.onFalse}>
      <DialogTitle>
        {step === 0 && <>Confirm Password</>}
        {step === 1 && <>QR Code</>}
        {step === 2 && <>Verify</>}
        {step === 3 && <>Success</>}
      </DialogTitle>
      <DialogContent>
        <Paper sx={{ py: 2 }}>
          {step === 0 && confirmPassword}
          {step === 1 && QRContent}
          {step === 2 && verifyContent}
          {step === 3 && (
            <Alert key="success" severity="success">
              Two-step verification was successful!
            </Alert>
          )}
        </Paper>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          {step === 0 && (
            <LoadingButton
              variant="contained"
              loading={loading}
              onClick={async () => {
                const { data } = await submitLogin({
                  variables: { data: { email: user?.email!, password: newPassword } },
                });

                if (data) {
                  localStorage.setItem(CONFIG.storageTokenKey, data.memberLogin.accessToken);
                  setStep(step + 1);
                  await generate2FA();
                }
              }}
            >
              Confirm
            </LoadingButton>
          )}
          {step === 1 && (
            <Button
              variant="contained"
              onClick={() => {
                setStep(step + 1);
              }}
            >
              Next
            </Button>
          )}
          {step === 2 && (
            <LoadingButton
              variant="contained"
              loading={verifyLoading}
              onClick={async () => {
                try {
                  setStep(step + 1);
                  const { data } = await verify2FAAndEnable({
                    variables: { data: { token, uri: qrString! } },
                  });

                  if (data) {
                    localStorage.setItem(
                      CONFIG.storageTokenKey,
                      data.verify2FAAndEnable.accessToken
                    );

                    await fetchMe();

                    setStep(step + 1);
                  }
                } catch (error) {
                  toast.error(error.message);
                }
              }}
            >
              Verify
            </LoadingButton>
          )}

          {step === 3 ? (
            <Button variant="contained" onClick={open.onFalse}>
              OK
            </Button>
          ) : (
            <Button variant="outlined" onClick={open.onFalse}>
              Cancel
            </Button>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
