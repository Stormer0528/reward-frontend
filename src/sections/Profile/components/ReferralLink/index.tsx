import { useState, Suspense, useCallback } from 'react';
import { useCopyToClipboard } from 'minimal-shared/hooks';

import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/Iconify';

import { useFetchReferralLink } from '../../useApollo';

export function ReferralLinkText() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { copy } = useCopyToClipboard();

  const { link } = useFetchReferralLink();

  const handleCopy = useCallback(() => {
    copy(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [copy, setIsCopied, link]);

  return (
    <TextField
      size="small"
      fullWidth
      disabled
      value={link}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleCopy} edge="end">
                <Iconify icon={isCopied ? 'mingcute:check-fill' : 'bxs:copy'} width={20} />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export function ReferralLink() {
  return (
    <Suspense fallback={<Skeleton sx={{ height: 40 }} />}>
      <ReferralLinkText />
    </Suspense>
  );
}
