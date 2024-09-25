import { type Edge, type EdgeProps } from '@xyflow/react';

type CustomEdge = Edge<{ value: number }, 'custom'>;

export default function EdgeView({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  style = {},
}: EdgeProps<CustomEdge>) {
  const midY = (sourceY + targetY) / 2;

  const edgePath = `
    M${sourceX},${sourceY}
    L${sourceX},${midY}
    L${targetX},${midY}
    L${targetX},${targetY}
  `;

  return (
    <g className="react-flow__edge">
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />
    </g>
  );
}
