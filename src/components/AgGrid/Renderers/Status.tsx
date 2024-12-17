import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import { Label } from 'src/components/Label';

interface Props<TData = any> extends CustomCellRendererProps<TData> {}

export const StatusRenderer = memo(
  <TData,>({ value }: Props<TData>) => (
    <Label variant="soft" color={value ? 'success' : 'error'}>
      {value ? 'Active' : 'Inactive'}
    </Label>
  ),
  (prev, next) => prev.value === next.value
);
