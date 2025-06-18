import _ from 'lodash';
import { usePopover } from 'minimal-shared/hooks';
import { useMemo, useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  type Node,
  type Edge,
  useReactFlow,
  ReactFlowProvider,
  type FitViewOptions,
} from '@xyflow/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { type Member, PlacementPosition, type PlacementMember } from 'src/__generated__/graphql';
import {
  PLACEMENT_TREE_NODE_WIDTH,
  PLACEMENT_TREE_NODE_HEIGHT,
  PLACEMENT_TREE_NODE_X_SPACE,
  PLACEMENT_TREE_NODE_Y_SPACE,
} from 'src/consts';

import { Iconify } from 'src/components/Iconify';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import ComponentBlock from 'src/components/Component-Block';
import { LoadingScreen } from 'src/components/LoadingScreen';
import { CustomPopover } from 'src/components/CustomPopover';

import { useFetchPlacementOMembers } from 'src/sections/Profile/useApollo';

import { useAuthContext } from 'src/auth/hooks';

import { StandardNode } from './node';
import CustomEdge from './customEdge';
import NodeContext from './nodeContext';

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  duration: 1000,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const nodeTypes = {
  treeNode: StandardNode,
};

type PlacementTreeNode = PlacementMember & { children: PlacementTreeNode[] };

function buildPlacementTree(members: any[], me: Member) {
  const memberMap: Record<string, any> = {};
  let result: any = {};

  members.forEach((member) => {
    memberMap[member.id] = { ...member, children: [] };

    if (member.id === me.id) {
      result = memberMap[member.id];
    }
  });

  members.forEach((member) => {
    if (member.id !== me.id && member.id !== member.placementParentId) {
      memberMap[member.placementParentId!].children.push(memberMap[member.id]);
    }
  });

  return { result, memberMap };
}

function getSubtree(node: any) {
  const res: any[] = [];
  node.children?.forEach((child: any) => {
    const subtree = getSubtree(child);
    res.push(...subtree);
  });
  return [...res, node];
}

function buildTree(root: PlacementTreeNode, vMap: Record<string, number> | null = null) {
  const resultNodes: Node[] = [];
  const depthHeights: number[] = [];

  function func(node: PlacementTreeNode, startX: number, depth: number, tree: Node[]) {
    const leftChild = node.children.filter(
      (child) => child.placementPosition === PlacementPosition.Left
    )[0];
    const rightChild = node.children.filter(
      (child) => child.placementPosition === PlacementPosition.Right
    )[0];
    const baseX = Math.max(depthHeights[depth] ?? 0, startX);
    let positionX = baseX;
    const positionY = depth * (PLACEMENT_TREE_NODE_HEIGHT + PLACEMENT_TREE_NODE_Y_SPACE);

    if (!vMap || vMap[node.id] === 2) {
      if (leftChild && rightChild) {
        const childStartX = baseX - (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
        const { endX: leftEndX } = func(leftChild, childStartX, depth + 1, tree);
        const { endX: rightEndX } = func(rightChild, leftEndX, depth + 1, tree);
        positionX =
          (leftEndX + rightEndX - 2 * (PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH)) /
          2;
      } else if (leftChild) {
        const childStartX = baseX - (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
        const { endX: leftEndX } = func(leftChild, childStartX, depth + 1, tree);
        positionX = leftEndX - (PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH) / 2;
      } else if (rightChild) {
        const childStartX = baseX + (PLACEMENT_TREE_NODE_WIDTH + PLACEMENT_TREE_NODE_X_SPACE) / 2;
        const { endX: rightEndX } = func(rightChild, childStartX, depth + 1, tree);
        positionX = rightEndX - ((PLACEMENT_TREE_NODE_X_SPACE + PLACEMENT_TREE_NODE_WIDTH) * 3) / 2;
      }
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

function getMemberIdsWithDepth(node: any, depth: number, targetDepth: number) {
  if (depth === targetDepth) {
    if (node.children.length) return [{ id: node.id, value: 1 }];
    return [{ id: node.id, value: 3 }];
  }
  const res: any[] = [];
  node.children.forEach((child: any) => {
    res.push(...getMemberIdsWithDepth(child, depth + 1, targetDepth));
  });

  return res.length === 0 ? [{ id: node.id, value: 3 }] : [...res, { id: node.id, value: 2 }];
}

function getResetVisibleMap(members: undefined | null | any[], me: Member): Record<string, number> {
  if (!members || members.length === 0) {
    return {};
  }

  const { result: placementTree } = buildPlacementTree(
    members.filter((member) => member?.placementParentId),
    me
  );
  const maps = getMemberIdsWithDepth(placementTree, 0, 3);
  const newVisibleMap: Record<string, number> = {};

  maps.forEach((mp: any) => {
    newVisibleMap[mp.id] = mp.value;
  });

  return newVisibleMap;
}

function getNewVisibleMap(
  members: undefined | null | any[],
  visibleMap: Record<string, number>,
  me: Member
): Record<string, number> {
  if (!members || !members.length) return {};

  const { memberMap } = buildPlacementTree(
    members.filter((member) => member?.placementParentId),
    me
  );
  const newVisibleMap: Record<string, number> = {};
  Object.entries(visibleMap).forEach(([id]) => {
    if (memberMap[id]) {
      if (memberMap[id].children.length === 0) {
        newVisibleMap[id] = 3;
      } else {
        let value = 1;
        memberMap[id].children.forEach((child: any) => {
          if (visibleMap[child.id]) {
            value = 2;
          }
        });
        newVisibleMap[id] = visibleMap[id] === 3 ? value : visibleMap[id];
      }
    }
  });

  return newVisibleMap;
}

function PlacementListView() {
  const popover = usePopover();

  const { fetchPlacementMembers, members, loading, called } = useFetchPlacementOMembers();
  const { user } = useAuthContext();

  const [visibleMap, setVisibleMap] = useState<Record<string, number>>({});
  const exSetVisibleMap = useCallback((newVisibleMap: Record<string, number>) => {
    setVisibleMap(newVisibleMap);
    localStorage.setItem('placementVisibleMap', JSON.stringify(newVisibleMap));
  }, []);

  useEffect(() => {
    fetchPlacementMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nodes: Node[] = useMemo(() => {
    if (members.length === 0) return [];
    const { result: placementTree } = buildPlacementTree(members, user!);
    if (!placementTree) return [];

    return buildTree(placementTree, visibleMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, visibleMap]);

  const edges: Edge[] = useMemo(
    () =>
      members
        .filter((member) => member.placementParentId !== member.id)
        .map((member) => ({
          id: `${member.placementParentId}:${member.id}`,
          source: member.placementParentId,
          target: member.id,
          type: 'default',
        })),
    [members]
  );

  const expandTree = useCallback(
    async (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      members
        .filter((member) => member.placementParentId === id)
        .forEach((member) => {
          if (!newVisibleMap[member.id]) {
            newVisibleMap[member.id] =
              members.findIndex((mbr) => mbr.placementParentId === member.id) === -1 ? 3 : 1;
          }
        });

      newVisibleMap[id] =
        members.findIndex((member) => member.placementParentId === id) === -1 ? 3 : 2;

      exSetVisibleMap(newVisibleMap);
    },
    [members, visibleMap, exSetVisibleMap]
  );

  const collapseTree = useCallback(
    async (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      newVisibleMap[id] =
        members.findIndex((member) => member.placementParentId === id) === -1 ? 3 : 1;

      exSetVisibleMap(newVisibleMap);
    },
    [members, visibleMap, exSetVisibleMap]
  );

  const { fitView } = useReactFlow();

  const expandAll = useCallback(
    async (id: string) => {
      const { memberMap } = buildPlacementTree(members, user!);
      const subtreeMembers = getSubtree(memberMap[id]);
      const newVisibleMap = { ...visibleMap };
      subtreeMembers.forEach((mb) => {
        newVisibleMap[mb.id] = mb.children.length ? 2 : 3;
      });
      exSetVisibleMap(newVisibleMap);
      setTimeout(() => {
        fitView({
          ...fitViewOptions,
          nodes: subtreeMembers.map(({ id: rootID }: { id: string }) => ({ id: rootID })),
        });
      });
    },
    [user, members, visibleMap, exSetVisibleMap, fitView]
  );

  const collapseAll = useCallback(
    async (id: string) => {
      const { memberMap } = buildPlacementTree(members, user!);
      const subtreeMembers = getSubtree(memberMap[id]);
      const newVisibleMap = { ...visibleMap };
      subtreeMembers.forEach((mb) => {
        delete newVisibleMap[mb.id];
      });
      newVisibleMap[id] = memberMap[id].children.length ? 1 : 3;

      exSetVisibleMap(newVisibleMap);
      setTimeout(() => {
        fitView({
          ...fitViewOptions,
          nodes: [{ id }],
        });
      });
    },
    [user, members, visibleMap, exSetVisibleMap, fitView]
  );

  const contextValue = useMemo(
    () => ({
      visibleMap,
      expandTree,
      collapseTree,
      expandAll,
      collapseAll,
    }),
    [visibleMap, expandTree, collapseTree, expandAll, collapseAll]
  );

  const resetVisibleMap = useCallback(() => {
    const newVisibleMap = getResetVisibleMap(members, user!);
    exSetVisibleMap(newVisibleMap);

    setTimeout(() => {
      fitView({
        ...fitViewOptions,
        nodes: Object.keys(newVisibleMap).map((id) => ({ id })),
      });
    }, 100);
  }, [members, fitView, exSetVisibleMap, user]);

  const reSyncVisibleMap = useCallback(() => {
    const storageVisibleMap = localStorage.getItem('placementVisibleMap');
    const newVisibleMap = storageVisibleMap
      ? getNewVisibleMap(members, JSON.parse(storageVisibleMap), user!)
      : {};
    exSetVisibleMap(newVisibleMap);
    setTimeout(() => {
      fitView({
        ...fitViewOptions,
        nodes: Object.keys(newVisibleMap).map((id) => ({ id })),
      });
    }, 100);
  }, [members, exSetVisibleMap, fitView, user]);

  useEffect(() => {
    if (!called || loading) return;
    const storageVisibleMap = localStorage.getItem('placementVisibleMap');

    if (!storageVisibleMap || _.isEmpty(JSON.parse(storageVisibleMap))) resetVisibleMap();
    else reSyncVisibleMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, loading]);

  const reset = useCallback(async () => {
    const { data } = await fetchPlacementMembers();
    const newVisibleMap = getResetVisibleMap(data?.placementMembers, user!);

    exSetVisibleMap(newVisibleMap);

    setTimeout(() => {
      fitView({
        ...fitViewOptions,
        nodes: Object.keys(newVisibleMap).map((id) => ({ id })),
      });
    }, 100);
  }, [fetchPlacementMembers, exSetVisibleMap, fitView, user]);

  const refresh = useCallback(async () => {
    const { data } = await fetchPlacementMembers();
    const storageVisibleMap = localStorage.getItem('placementVisibleMap');
    const newVisibleMap = storageVisibleMap
      ? getNewVisibleMap(data?.placementMembers, JSON.parse(storageVisibleMap), user!)
      : {};
    exSetVisibleMap(newVisibleMap);

    setTimeout(() => {
      fitView({
        ...fitViewOptions,
        nodes: Object.keys(newVisibleMap).map((id) => ({ id })),
      });
    }, 100);
  }, [fetchPlacementMembers, exSetVisibleMap, fitView, user]);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Breadcrumbs
        heading="Placement"
        links={[{ name: 'Placement', href: paths.dashboard.placement.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 3 },
        }}
        action={
          <Stack direction="row" columnGap={1}>
            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-horizontal-fill" />
            </IconButton>
          </Stack>
        }
      />

      {loading ? (
        <LoadingScreen />
      ) : (
        <ComponentBlock sx={{ px: 0, pb: 0 }}>
          <Stack sx={{ overflow: 'auto', height: '600px', width: '100%' }}>
            <NodeContext value={contextValue}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                fitViewOptions={fitViewOptions}
                edgeTypes={edgeTypes}
                nodeTypes={nodeTypes}
              />
            </NodeContext>
          </Stack>
        </ComponentBlock>
      )}

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              reset();
              popover.onClose();
            }}
          >
            Reset
          </MenuItem>
          <MenuItem
            onClick={() => {
              refresh();
              popover.onClose();
            }}
          >
            Refresh
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </Box>
  );
}

export default function PlacementListViewWithReactFlowProvider() {
  return (
    <ReactFlowProvider>
      <PlacementListView />
    </ReactFlowProvider>
  );
}
