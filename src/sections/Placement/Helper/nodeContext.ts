import React from 'react';

interface NodeContextType {
  expandIds: string[];
  setExpandIds: (id: string[]) => void;
}

const NodeContext = React.createContext<NodeContextType>({
  expandIds: [],
  setExpandIds: () => {},
});

export default NodeContext;
