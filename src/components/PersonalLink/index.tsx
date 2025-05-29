import { useEffect } from 'react';
import { useBoolean } from 'minimal-shared/hooks';
import { useQuery as useGraphQuery } from '@apollo/client';

import { TextField, IconButton, InputAdornment } from '@mui/material';

import { gql } from 'src/__generated__/gql';

import { Iconify } from '../Iconify';

const GENERATE_REFERENCE_LINK = gql(/* GraphQL */ `
  query GenerateReferenceLink {
    generateReferenceLink {
      link
    }
  }
`);

export function PersonalLink() {
  const copy = useBoolean();

  const { data } = useGraphQuery(GENERATE_REFERENCE_LINK);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(data?.generateReferenceLink.link ?? '');
    copy.onTrue();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      copy.onFalse();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleCopy]);

  return (
    <TextField
      size="small"
      fullWidth
      disabled
      value={data?.generateReferenceLink.link}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleCopy} edge="end">
                <Iconify icon={copy.value ? 'mingcute:check-fill' : 'bxs:copy'} width={20} />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
