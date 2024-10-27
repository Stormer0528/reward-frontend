import { useMemo, useEffect } from 'react';
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

function buildTree(node: any, baseX: number, depth: number, tree: any[]) {
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

    tree.push(element);

    return element;
  }

  let maxX = baseX;
  const positions: any[] = [];

  children.forEach((child: any, idx: number) => {
    const { maxX: tempX, position } = buildTree(
      child,
      maxX + (idx === 0 ? 0 : PLACEMENTTREE_NODE_X_SPACE),
      depth + 1,
      tree
    );
    maxX = tempX;
    positions.push(position);
  });

  const resPositionX = (maxX + baseX - PLACEMENTTREE_NODE_WIDTH) / 2;
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

  tree.push(res);

  return res;
}

function PlacementListView() {
  const { user: me } = useAuthContext();

  const { fetchMembers, members, loading } = useFetchMembers();

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

    buildTree(sponsorTree, 0, 0, resultTree);

    return resultTree;
  }, [me, members]);

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
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              fitViewOptions={fitViewOptions}
              edgeTypes={edgeTypes}
            />
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
