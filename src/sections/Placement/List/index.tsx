import { isEmpty } from 'lodash';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { ReactFlow, type Node, type Edge, type FitViewOptions } from '@xyflow/react';

import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';
import {
  PLACEMENTTREE_NODE_WIDTH,
  PLACEMENTTREE_NODE_HEIGHT,
  PLACEMENTTREE_NODE_X_SPACE,
  PLACEMENTTREE_NODE_Y_SPACE,
} from 'src/consts';

import { Breadcrumbs } from 'src/components/Breadcrumbs';
import ComponentBlock from 'src/components/Component-Block';
import { LoadingScreen } from 'src/components/loading-screen';

import { useFetchMe, useFetchMembers } from 'src/sections/Profile/useApollo';

import { StandardNode } from './node';
import CustomEdge from './customEdge';
import NodeContext from './nodeContext';

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

export default function PlacementListView() {
  const [visibleMap, setVisibleMap] = useState<Record<string, number>>({});

  const { me, fetchMe } = useFetchMe();
  const { loading, members, fetchMembers } = useFetchMembers();

  useEffect(() => {
    fetchMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMembers({ variables: { sort: '-placementPosition' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me]);

  const buildPlacementTree = (data: any[]) => {
    const memberMap: Record<string, any> = {};
    const memberProcess: any[] = [];
    let result: any = {};

    data.forEach((member) => {
      memberMap[member.id] = { ...member, children: [] };

      if (member.placementParentId) {
        memberProcess.push(member);
      }

      if (member.id === me?.id) {
        result = memberMap[member.id];
      }
    });

    memberProcess.forEach((member) => {
      if (memberMap[member.placementParentId] && member.id !== member.placementParentId) {
        memberMap[member.placementParentId!].children.push(memberMap[member.id]);
      }
    });

    return result;
  };

  function buildTree(node: any, baseX: number, depth: number, tree: any[], vMap: any = null) {
    const children = node.children.sort(
      (child1: any, child2: any) =>
        child1.placementPosition === 'LEFT' || child2.placementPosition === 'RIGHT'
    );

    if (children.length === 0) {
      const element = {
        id: node.id,
        data: { label: <StandardNode {...node} /> },
        position: { x: baseX, y: depth * (PLACEMENTTREE_NODE_HEIGHT + PLACEMENTTREE_NODE_Y_SPACE) },
        draggable: true,
        style: {
          padding: 0,
          border: 'none',
          borderRadius: '12px',
          width: PLACEMENTTREE_NODE_WIDTH,
          height: PLACEMENTTREE_NODE_HEIGHT,
        },
        maxX: baseX + PLACEMENTTREE_NODE_WIDTH,
      };

      tree.push(element);

      return element;
    }

    let maxX = baseX;

    if (!vMap || vMap[node.id] === 2) {
      children
        .filter((child: any) => child.placementPosition === 'LEFT')
        .forEach((child: any) => {
          const { maxX: tempX } = buildTree(
            child,
            maxX + PLACEMENTTREE_NODE_X_SPACE,
            depth + 1,
            tree,
            vMap
          );
          maxX = tempX;
        });
    }

    const res = {
      id: node.id,
      data: { label: <StandardNode {...node} /> },
      position: {
        x: Math.max(baseX, maxX - (PLACEMENTTREE_NODE_WIDTH - PLACEMENTTREE_NODE_X_SPACE) / 2),
        y: depth * (PLACEMENTTREE_NODE_HEIGHT + PLACEMENTTREE_NODE_Y_SPACE),
      },
      draggable: true,
      style: {
        padding: 0,
        border: 'none',
        borderRadius: '12px',
        width: PLACEMENTTREE_NODE_WIDTH,
        height: PLACEMENTTREE_NODE_HEIGHT,
      },
    };

    maxX = res.position.x + (PLACEMENTTREE_NODE_WIDTH - PLACEMENTTREE_NODE_X_SPACE) / 2;

    if (!vMap || vMap[node.id] === 2) {
      children
        .filter((child: any) => child.placementPosition === 'RIGHT')
        .forEach((child: any) => {
          const { maxX: tempX } = buildTree(
            child,
            maxX + PLACEMENTTREE_NODE_X_SPACE,
            depth + 1,
            tree,
            vMap
          );
          maxX = tempX;
        });
    }

    const element = {
      ...res,
      maxX: Math.max(maxX, res.position.x + PLACEMENTTREE_NODE_WIDTH),
    };

    tree.push(element);

    return element;
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

  const nodes: Node[] = useMemo(() => {
    if (!members || members.length === 0) return [];
    const placementTree = buildPlacementTree(members.filter((member) => member?.placementParentId));

    const resultTree: any[] = [];

    buildTree(placementTree, 0, 0, resultTree, visibleMap);

    return resultTree;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members, visibleMap]);

  const edges: Edge[] = useMemo(
    () =>
      members
        .filter((member) => member?.placementParentId)
        .map((member) => ({
          id: `${member?.placementParentId}:${member?.id}`,
          source: member?.placementParentId ?? '',
          target: member?.id ?? '',
          type: 'customEdge',
        })),
    [members]
  );

  const expandTree = useCallback(
    (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      members
        .filter((mb) => mb?.placementParentId === id)
        .forEach((mb) => {
          if (!newVisibleMap[mb?.id ?? '']) {
            newVisibleMap[mb?.id ?? ''] =
              members.findIndex((mber) => mber?.placementParentId === mb?.id) === -1 ? 3 : 1;
          }
        });

      newVisibleMap[id] = 2;

      setVisibleMap(newVisibleMap);

      localStorage.setItem('placementVisibleMap', JSON.stringify(visibleMap));
    },
    [members, visibleMap]
  );

  const collapseTree = useCallback(
    (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      newVisibleMap[id] = 1;

      setVisibleMap(newVisibleMap);

      localStorage.setItem('placementVisibleMap', JSON.stringify(newVisibleMap));
    },
    [visibleMap]
  );

  const contextValue = useMemo(
    () => ({
      visibleMap,
      expandTree,
      collapseTree,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleMap]
  );

  const resetVisibleMap = useCallback(() => {
    if (!members || members.length === 0) {
      setVisibleMap({});

      localStorage.setItem('placementVisibleMap', JSON.stringify({}));

      return;
    }

    const placementTree = buildPlacementTree(members.filter((member) => member?.placementParentId));
    const maps = getMemberIdsWithDepth(placementTree, 0, 3);
    const newVisibleMap: Record<string, number> = {};

    maps.forEach((mp: any) => {
      newVisibleMap[mp.id] = mp.value;
    });

    setVisibleMap(newVisibleMap);

    localStorage.setItem('placementVisibleMap', JSON.stringify(newVisibleMap));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members]);

  useEffect(() => {
    const storageVisibleMap = localStorage.getItem('placementVisibleMap');

    if (!storageVisibleMap || isEmpty(JSON.parse(storageVisibleMap))) resetVisibleMap();
    else setVisibleMap(JSON.parse(storageVisibleMap));
  }, [resetVisibleMap]);

  return (
    <DashboardContent sx={{ overflowX: 'hidden' }}>
      <Breadcrumbs
        heading="Placement"
        links={[{ name: 'Placement', href: paths.dashboard.placement.root }, { name: 'List' }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      {loading ? (
        <LoadingScreen />
      ) : (
        <ComponentBlock sx={{ px: 0, pb: 0 }}>
          <Stack sx={{ overflow: 'auto', height: '600px', width: '100%' }}>
            <NodeContext.Provider value={contextValue}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                fitViewOptions={fitViewOptions}
                edgeTypes={edgeTypes}
              />
            </NodeContext.Provider>
          </Stack>
        </ComponentBlock>
      )}
    </DashboardContent>
  );
}
