import type { PlacementToBottomInput } from 'src/__generated__/graphql';

import React from 'react';

interface NodeContextType {
  expandIds: string[];
  setExpandIds: (id: string[]) => void;
  onExpandNode: (id: string) => void;
  onCollapseNode: (id: string) => void;
  onExpandBottom: (newData: PlacementToBottomInput) => void;
}

const NodeContext = React.createContext<NodeContextType>({
  expandIds: [],
  setExpandIds: () => {},
  onExpandNode: () => {},
  onCollapseNode: () => {},
  onExpandBottom: () => {},
});

export default NodeContext;
