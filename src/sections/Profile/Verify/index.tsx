import type { UseBooleanReturn } from 'minimal-shared/hooks';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';

import { useSendEmailVerificationCode } from 'src/sections/SignUp/useApollo';

import { useAuthContext } from 'src/auth/hooks';

import PasswordContent from './Password';
import VerificationCode from './VerificationCode';
import { useMemberExchangeLogin } from '../useApollo';

interface Props {
  event: any;
  //TODO: Replace `any` with the actual type of `event`
  tabs: any; // UseTabsReturn;
  open: UseBooleanReturn;
}

export function VerifyModal({ tabs, open, event }: Props) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(0);
  const [password, setPassword] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const { loading, memberExChangeLogin } = useMemberExchangeLogin();
  const { sendVerificationCode } = useSendEmailVerificationCode();

  const onClose = () => {
    open.onFalse();
    setStep(0);
  };

  const handlePasswordVerify = async () => {
    try {
      if (!password) {
        toast.error('Please enter your password');
        return;
      }

      const { data } = await memberExChangeLogin({
        variables: { data: { email: user!.email, password } },
      });

      if (data?.memberExchangeLogin.passwordExpired) {
        toast.warning('Your Password Token has expired. Please reset your password');

        localStorage.removeItem(CONFIG.STORAGE_TOKEN_KEY);

        navigate(paths.auth.updatePassword, {
          state: { token: data.memberExchangeLogin.accessToken },
        });
      } else if (data) {
        localStorage.setItem(CONFIG.STORAGE_TOKEN_KEY, data.memberExchangeLogin.accessToken);

        setStep((prev) => prev + 1);

        await sendVerificationCode();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (success) {
      open.onFalse();
      setStep(0);
      tabs.onChange(event, 'edit');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Dialog open={open.value} fullWidth maxWidth="sm" onClose={onClose}>
      <DialogTitle>Verify</DialogTitle>
      <DialogContent>
        <Paper sx={{ py: 2 }}>
          {step === 0 && <PasswordContent setPassword={setPassword} />}
          {step === 1 && <VerificationCode setSuccess={setSuccess} />}
        </Paper>
      </DialogContent>
      <DialogActions>
        {step === 0 && (
          <Button
            color="primary"
            variant="contained"
            loading={loading}
            onClick={handlePasswordVerify}
          >
            Next
          </Button>
        )}

        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
