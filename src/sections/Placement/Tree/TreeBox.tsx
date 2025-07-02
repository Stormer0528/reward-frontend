import type { Edge, Node } from '@xyflow/react';
import type { PlacementMember, PlacementToBottomInput } from 'src/__generated__/graphql';

import { ReactFlow, useReactFlow } from '@xyflow/react';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';

import { toast } from 'src/components/SnackBar';
import { EmptyContent } from 'src/components/EmptyContent';
import ComponentBlock from 'src/components/Component-Block';
import { LoadingScreen } from 'src/components/loading-screen';

import { useAuthContext } from 'src/auth/hooks';

import { ActionButtons } from './ActionButtons';
import { buildTree, buildPlacementTree } from '../Helper';
import { nodeTypes, edgeTypes, fitViewOptions } from '../Helper/const';
import {
  useFetchPlacementToBottom,
  useFetchPlacementWithLevel,
  useFetchPlacementChildrenById,
} from '../useApollo';

export function PlacementTreeBox() {
  const { user } = useAuthContext();
  const { fitView } = useReactFlow();
  const [list, setList] = useState<PlacementMember[]>([]);

  const { fetchPlacementChildrenById } = useFetchPlacementChildrenById();
  const { loading, members, fetchPlacementMembers } = useFetchPlacementWithLevel();
  const { members: bottomMembers, fetchPlacementToBottom } = useFetchPlacementToBottom();

  const onReset = async () => {
    const { data } = await fetchPlacementMembers({ variables: { data: { level: 4 } } });
    setList(data?.placementMembersWithLevel ?? []);

    setTimeout(
      () => fitView({ ...fitViewOptions, nodes: members.map((member) => ({ id: member.id })) }),
      100
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onExpandBottom = async (newData: PlacementToBottomInput) => {
    try {
      await fetchPlacementToBottom({ variables: { data: newData } });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const onExpandNode = useCallback(
    async (id: string) => {
      try {
        const { data } = await fetchPlacementChildrenById({ variables: { data: { id } } });

        if (data?.placementChildrenById.length) {
          setList((prevList) => {
            const existingIds = new Set(prevList.map((member) => member.id));
            const newChildren = data.placementChildrenById.filter(
              (child) => !existingIds.has(child.id)
            );

            return [...prevList, ...newChildren];
          });
        } else {
          setList((prev) =>
            prev.map((member) => (id === member.id ? { ...member, visible: 3 } : member))
          );
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchPlacementChildrenById]
  );

  const onCollapseNode = useCallback((id: string) => {
    setList((prevList) => {
      const findDescendants = (parentId: string, memberList: PlacementMember[]): string[] => {
        const descendants: string[] = [];
        const childNodes = memberList.filter(
          (member) => member.placementParentId === parentId && member.id !== parentId
        );

        childNodes.forEach((child) => {
          descendants.push(child.id);
          descendants.push(...findDescendants(child.id, memberList));
        });

        return descendants;
      };

      const descendantIds = findDescendants(id, prevList);

      return prevList.filter((member) => !descendantIds.includes(member.id));
    });
  }, []);

  const nodes: Node[] = useMemo(() => {
    if (list.length === 0) return [];

    const { result: placementTree } = buildPlacementTree({ members: list, memberId: user?.id });

    if (!placementTree) return [];

    return buildTree({ root: placementTree, onExpandNode, onCollapseNode, onExpandBottom });
  }, [list, user, onExpandNode, onCollapseNode, onExpandBottom]);

  const edges: Edge[] = useMemo(
    () =>
      list
        .filter((member) => member.placementParentId !== member.id)
        .map((member) => ({
          id: `${member.placementParentId}:${member.id}`,
          source: member.placementParentId,
          target: member.id,
          type: 'default',
        })),
    [list]
  );

  useEffect(() => {
    fetchPlacementMembers({ variables: { data: { id: user?.id, level: 4 } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (members && members.length) {
      setList(members);
    }
  }, [members]);

  useEffect(() => {
    if (bottomMembers && bottomMembers.length) {
      setList((prevList) => {
        const existingIds = new Set(prevList.map((member) => member.id));
        const newBottomMembers = bottomMembers.filter((member) => !existingIds.has(member.id));
        if (newBottomMembers.length) {
          return [...prevList, ...newBottomMembers];
        }

        return prevList;
      });

      setTimeout(() => {
        fitView({ ...fitViewOptions, nodes: bottomMembers.map((member) => ({ id: member.id })) });
      }, 100);
    }
  }, [bottomMembers, fitView]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {nodes.length ? (
            <ComponentBlock sx={{ px: 0, pb: 0 }}>
              <Stack
                sx={{
                  overflow: 'auto',
                  height: 'calc(100vh - 280px)',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  fitView
                  fitViewOptions={fitViewOptions}
                  nodeTypes={nodeTypes}
                  edgeTypes={edgeTypes}
                />

                <ActionButtons onReset={onReset} />
              </Stack>
            </ComponentBlock>
          ) : (
            <EmptyContent />
          )}
        </>
      )}
    </>
  );
}
