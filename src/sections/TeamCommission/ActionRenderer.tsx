import type { CustomCellRendererProps } from '@ag-grid-community/react';
import type { Introducer } from 'src/__generated__/graphql';

import { memo, useEffect } from 'react';

import { useBoolean } from 'src/hooks/useBoolean';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';

export const ActionRender = memo(
  ({ data }: CustomCellRendererProps<Introducer>) => {
    const copy = useBoolean();

    const handleCopy = async () => {
      await navigator.clipboard.writeText(`${CONFIG.SITE_PATH}/sign-up?sponsor=${data?.username!}`);
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
      <Iconify
        icon={copy.value ? 'mingcute:check-fill' : 'bxs:copy'}
        color="#008000"
        sx={{ cursor: 'pointer' }}
        onClick={handleCopy}
      />
    );
  },
  (prev, next) => prev.data?.id === next.data?.id
);
