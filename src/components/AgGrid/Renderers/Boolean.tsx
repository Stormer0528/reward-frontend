import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import { Label } from 'src/components/Label';

interface Props<TData = any> extends CustomCellRendererProps<TData> {
  trueText: string;
  falseText?: string;
}

export const BooleanRenderer = memo(
  ({ value, trueText, falseText }: Props) =>
    value ? (
      <Label color="success">{trueText}</Label>
    ) : (
      !!falseText && <Label color="error">{falseText}</Label>
    ),
  (prev, next) => prev.data?.id === next.data?.id
);
