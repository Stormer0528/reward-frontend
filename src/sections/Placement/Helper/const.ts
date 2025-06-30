import type { FitViewOptions } from '@xyflow/react';

import CustomEdge from './customEdge';
import { StandardNode } from '../Tree/node';

export const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  duration: 1000,
};

export const edgeTypes = {
  customEdge: CustomEdge,
};

export const nodeTypes = {
  treeNode: StandardNode,
};
