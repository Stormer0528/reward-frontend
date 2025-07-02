import type { Node } from '@xyflow/react';
import type { PlacementMember } from 'src/__generated__/graphql';

import { PlacementPosition } from 'src/__generated__/graphql';
import {
  PLACEMENT_TREE_NODE_WIDTH,
  PLACEMENT_TREE_NODE_HEIGHT,
  PLACEMENT_TREE_NODE_X_SPACE,
  PLACEMENT_TREE_NODE_Y_SPACE,
} from 'src/consts';

type PlacementTreeNode = PlacementMember & { children: PlacementTreeNode[] };

interface PlacementTreeProps {
  members: any[];
  memberId?: string;
}

export function buildPlacementTree({ members, memberId }: PlacementTreeProps) {
  const memberMap: Record<string, any> = {};
  let result: any = {};

  // First pass: create all members with default visible value
  members.forEach((member) => {
    memberMap[member.id] = { ...member, children: [] };

    if (member.id === (memberId ?? member.placementParentId)) {
      result = memberMap[member.id];
    }
  });

  // Second pass: build parent-child relationships
  members.forEach((member) => {
    if (member.id !== member.placementParentId) {
      memberMap[member.placementParentId!]?.children.push(memberMap[member.id]);
    }
  });

  // Third pass: set visible for nodes only if not already 3
  Object.values(memberMap).forEach((member: any) => {
    if (member.visible !== 3) {
      if (member.children.length === 0) {
        member.visible = 1;
      } else {
        member.visible = 2;
      }
    }
  });

  return { result, memberMap };
}

interface Props {
  root: PlacementTreeNode;
}

export function buildTree({ root }: Props) {
  const resultNodes: Node[] = [];
  const depthHeights: number[] = [];

  function func(node: PlacementTreeNode, startX: number, depth: number, tree: Node[]) {
    const baseX = Math.max(depthHeights[depth] ?? 0, startX);
    let positionX = baseX;
    const positionY = depth * (PLACEMENT_TREE_NODE_HEIGHT + PLACEMENT_TREE_NODE_Y_SPACE);
    const leftChild = node.children?.filter(
      (child) => child.placementPosition === PlacementPosition.Left
    )[0];
    const rightChild = node.children?.filter(
      (child) => child.placementPosition === PlacementPosition.Right
    )[0];

    if (leftChild && rightChild) {
      const childStartX = baseX - (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
      const { endX: leftEndX } = func(leftChild, childStartX, depth + 1, tree);
      const { endX: rightEndX } = func(rightChild, leftEndX, depth + 1, tree);
      positionX =
        (leftEndX + rightEndX - 2 * (PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH)) / 2;
    } else if (leftChild) {
      const childStartX = baseX - (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
      const { endX: leftEndX } = func(leftChild, childStartX, depth + 1, tree);
      positionX = leftEndX - (PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH) / 2;
    } else if (rightChild) {
      const childStartX = baseX + (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
      const { endX: rightEndX } = func(rightChild, childStartX, depth + 1, tree);
      positionX = rightEndX - ((PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH) * 3) / 2;
    }

    const element: Node = {
      id: node.id,
      position: { x: positionX, y: positionY },
      data: node,
      style: {
        width: PLACEMENT_TREE_NODE_WIDTH,
        height: PLACEMENT_TREE_NODE_HEIGHT,
      },
      type: 'treeNode',
    };

    tree.push(element);

    const endX = positionX + PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE;
    depthHeights[depth] = endX;

    return { element, endX };
  }

  func(root, 0, 0, resultNodes);
  return resultNodes;
}
