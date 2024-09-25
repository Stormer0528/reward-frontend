import React from 'react';

interface NodeContextType {
  visibleMap: { [key: string]: number };
}

const NodeContext = React.createContext<NodeContextType>({
  visibleMap: {},
});

export default NodeContext;
