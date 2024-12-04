import type { CustomCellRendererProps } from '@ag-grid-community/react';

import { memo } from 'react';

import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

import { get } from 'src/utils/lodash';

interface Props<TData = any> extends CustomCellRendererProps<TData> {
  basePath?: string;
  /** Path to get href value */
  hrefPath?: string;

  /** The href value for the Link */
  href?: string;

  /** The text to be displayed inside the Link */
  linkTextPath?: string;

  /** The text to be displayed inside the Link */
  linkText?: string;
}

export const LinkRenderer = memo(
  <TData,>({ value, data, basePath, hrefPath, linkTextPath, href, linkText }: Props<TData>) => (
    <Link component={RouterLink} href={`${basePath || ''}${hrefPath ? get(data, hrefPath) : href || value}`}>
      {linkTextPath ? get(data, linkTextPath) : linkText || value}
    </Link>
  ),
  (prev, next) =>
    prev.value === next.value &&
    prev.hrefPath === next.hrefPath &&
    prev.linkTextPath === next.linkTextPath &&
    prev.href === next.href &&
    prev.linkText === next.linkText
);
