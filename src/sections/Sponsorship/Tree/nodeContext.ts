import React from 'react';

interface NodeContextType {
  visibleMap: { [key: string]: number };
  expandTree: (id: string) => void;
  collapseTree: (id: string) => void;
}

const NodeContext = React.createContext<NodeContextType>({
  visibleMap: {},
  expandTree: () => {},
  collapseTree: () => {},
});

export default NodeContext;
