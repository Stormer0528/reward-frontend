import type { OrgChartProps, OrgChartListProps, OrgChartSubListProps } from './types';

import { cloneElement } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

import { useTheme } from '@mui/material/styles';

import { flattenArray } from 'src/utils/helper';

// ----------------------------------------------------------------------

export function OrganizationalChart<T>({ data, nodeItem, ...other }: OrgChartProps<T>) {
  const theme = useTheme();

  const cloneNode = (props: T) => cloneElement(nodeItem(props));

  const label = cloneNode({ ...data } as T);

  return (
    <Tree
      lineWidth="1.5px"
      nodePadding="4px"
      lineBorderRadius="24px"
      lineColor={theme.vars.palette.divider}
      label={label}
      {...other}
    >
      {data?.children?.map((list, index) => (
        <TreeList key={index} depth={1} data={list} nodeItem={nodeItem} />
      ))}
    </Tree>
  );
}

// ----------------------------------------------------------------------

export function TreeList<T>({ data, depth, nodeItem }: OrgChartListProps<T>) {
  const children = (data as any).children;

  const cloneNode = (props: T) => cloneElement(nodeItem(props));

  const totalChildren = children ? flattenArray(children)?.length : 0;

  const label = cloneNode({ ...data, depth, totalChildren } as T);

  return (
    <TreeNode label={label}>
      {children && <TreeSubList data={children} depth={depth} nodeItem={nodeItem} />}
    </TreeNode>
  );
}

// ----------------------------------------------------------------------

function TreeSubList<T>({ data, depth, nodeItem }: OrgChartSubListProps<T>) {
  return (
    <>
      {data.map((list, index) => (
        <TreeList key={index} data={list} depth={depth + 1} nodeItem={nodeItem} />
      ))}
    </>
  );
}
