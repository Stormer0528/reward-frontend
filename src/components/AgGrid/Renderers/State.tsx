import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import { StateLabel } from 'src/components/StateLabel';

interface Props<TData = any> extends CustomCellRendererProps<TData> {}

export const StateRenderer = memo(
  <TData,>({ value }: Props<TData>) => <StateLabel state={value} />,
  (prev, next) => prev.value === next.value
);
