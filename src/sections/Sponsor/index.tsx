import _ from 'lodash';
import { useMemo, useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  type Node,
  type Edge,
  ReactFlowProvider,
  type FitViewOptions,
} from '@xyflow/react';

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

import { useFetchMembers } from 'src/sections/Profile/useApollo';

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

function buildSponsorTree(members: any[], me: any) {
  const memberMap: Record<string, any> = {};
  let result: any = {};

  members.forEach((member) => {
    memberMap[member.id] = { ...member, children: [] };

    if (member.id === me?.id) {
      result = memberMap[member.id];
    }
  });

  members.forEach((member) => {
    if (member.sponsorId && memberMap[member.sponsorId] && member.id !== me.id) {
      memberMap[member.sponsorId!].children.push(memberMap[member.id]);
    }
  });

  return result;
}

function buildTree(node: any, baseX: number, depth: number, tree: any[], visibleMap: any = null) {
  const { children } = node;

  if (children.length === 0) {
    const element = {
      id: node.id,
      data: { label: <StandardNode {...node} /> },
      position: {
        x: baseX,
        y: (depth - 1) * (PLACEMENTTREE_NODE_HEIGHT + PLACEMENTTREE_NODE_Y_SPACE),
      },
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

    if (depth !== 0) {
      tree.push(element);
    }

    return element;
  }

  let maxX = baseX;
  const positions: any[] = [];

  if (!visibleMap || visibleMap[node.id] === 2) {
    children.forEach((child: any, idx: number) => {
      const { maxX: tempX, position } = buildTree(
        child,
        maxX + (idx === 0 ? 0 : PLACEMENTTREE_NODE_X_SPACE),
        depth + 1,
        tree,
        visibleMap
      );
      maxX = tempX;
      positions.push(position);
    });
  }

  let resPositionX = maxX;
  if (!visibleMap || visibleMap[node.id] === 2) {
    resPositionX = (maxX + baseX - PLACEMENTTREE_NODE_WIDTH) / 2;
  } else {
    resPositionX = baseX;
    maxX = resPositionX + PLACEMENTTREE_NODE_WIDTH;
  }
  const res = {
    id: node.id,
    data: { label: <StandardNode {...node} /> },
    position: {
      x: resPositionX,
      y: (depth - 1) * (PLACEMENTTREE_NODE_HEIGHT + PLACEMENTTREE_NODE_Y_SPACE),
    },
    draggable: true,
    style: {
      padding: 0,
      border: 'none',
      borderRadius: '12px',
      width: PLACEMENTTREE_NODE_WIDTH,
      height: PLACEMENTTREE_NODE_HEIGHT,
    },
    maxX,
  };

  if (depth !== 0) {
    tree.push(res);
  }

  return res;
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

function PlacementListView() {
  const { user: me } = useAuthContext();

  const { fetchMembers, members, loading } = useFetchMembers();

  const [visibleMap, setVisibleMap] = useState<Record<string, number>>({});

  useEffect(() => {
    fetchMembers({
      variables: {
        filter: {
          OR: [{ id: me?.id }, { sponsorId: me?.id }],
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me]);

  const nodes: Node[] = useMemo(() => {
    if (!members || members.length === 0) return [];
    const sponsorTree = buildSponsorTree(members, me);

    const resultTree: any[] = [];

    buildTree(sponsorTree, 0, 0, resultTree, visibleMap);

    return resultTree;
  }, [me, members, visibleMap]);

  const edges: Edge[] = useMemo(
    () =>
      members
        .filter((member) => member?.sponsorId)
        .map((member) => ({
          id: `${member?.sponsorId}:${member?.id}`,
          source: member?.sponsorId ?? '',
          target: member?.id ?? '',
          type: 'customEdge',
        })),
    [members]
  );

  const expandTree = useCallback(
    (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      members
        .filter((mb) => mb?.sponsorId === id)
        .forEach((mb) => {
          if (!newVisibleMap[mb?.id ?? '']) {
            newVisibleMap[mb?.id ?? ''] =
              members.findIndex((mber) => mber?.sponsorId === mb?.id) === -1 ? 3 : 1;
          }
        });

      newVisibleMap[id] = 2;

      setVisibleMap(newVisibleMap);

      localStorage.setItem('sponsorVisibleMap', JSON.stringify(newVisibleMap));
    },
    [members, visibleMap]
  );

  const collapseTree = useCallback(
    (id: string) => {
      const newVisibleMap: Record<string, number> = { ...visibleMap };

      newVisibleMap[id] = 1;

      setVisibleMap(newVisibleMap);

      localStorage.setItem('sponsorVisibleMap', JSON.stringify(newVisibleMap));
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

      localStorage.setItem('sponsorVisibleMap', JSON.stringify({}));

      return;
    }

    const placementTree = buildSponsorTree(members, me);
    const maps = getMemberIdsWithDepth(placementTree, 0, 2);
    const newVisibleMap: Record<string, number> = {};

    maps.forEach((mp: any) => {
      newVisibleMap[mp.id] = mp.value;
    });

    setVisibleMap(newVisibleMap);

    localStorage.setItem('sponsorVisibleMap', JSON.stringify(newVisibleMap));
  }, [me, members]);

  useEffect(() => {
    const storageVisibleMap = localStorage.getItem('sponsorVisibleMap');

    if (!storageVisibleMap || _.isEmpty(JSON.parse(storageVisibleMap))) resetVisibleMap();
    else setVisibleMap(JSON.parse(storageVisibleMap));
  }, [resetVisibleMap]);

  return (
    <DashboardContent sx={{ overflowX: 'hidden' }}>
      <Breadcrumbs
        heading="Sponsor"
        links={[{ name: 'Sponsor', href: paths.dashboard.placement.root }, { name: 'List' }]}
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

export default function PlacementListViewWithReactFlowProvider() {
  return (
    <ReactFlowProvider>
      <PlacementListView />
    </ReactFlowProvider>
  );
}
