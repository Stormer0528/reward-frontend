import type { ButtonProps } from '@mui/material/Button';

import { useCallback } from 'react';

import Button from '@mui/material/Button';

import { useRouter } from 'src/routes/hooks';

import { useMemberLogout } from 'src/sections/Profile/useApollo';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

type Props = ButtonProps & {
  onClose?: () => void;
};

export function SignOutButton({ onClose, ...other }: Props) {
  const router = useRouter();

  const { signOut } = useAuthContext();

  const { memberLogout } = useMemberLogout();

  const handleLogout = useCallback(async () => {
    try {
      signOut();
      onClose?.();
      router.refresh();
      await memberLogout();
    } catch (error) {
      console.error(error);
    }
  }, [signOut, onClose, memberLogout, router]);

  return (
    <Button fullWidth variant="soft" size="large" color="error" onClick={handleLogout} {...other}>
      Logout
    </Button>
  );
}
