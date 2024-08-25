import { useEffect } from 'react';

import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';
import ComponentBlock from 'src/components/Component-Block';
import { LoadingScreen } from 'src/components/loading-screen';
import { OrganizationalChart } from 'src/components/organizationalChart';

import { useFetchMe, useFetchMembers } from 'src/sections/Profile/useApollo';

import { StandardNode } from './node';

import type { NodeProps } from './type';

export default function PlacementListView() {
  const { me, fetchMe } = useFetchMe();
  const { loading, members, fetchMembers } = useFetchMembers();

  useEffect(() => {
    fetchMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMembers();
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
      if (member.id !== member.placementParentId) {
        memberMap[member.placementParentId!].children.push(memberMap[member.id]);
      }
    });

    return result;
  };

  const placementTree = buildPlacementTree(members);

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
          <Stack sx={{ overflow: 'auto', height: '600px' }}>
            <OrganizationalChart
              data={placementTree}
              lineHeight="30px"
              nodeItem={(props: NodeProps) => <StandardNode {...props} />}
            />
          </Stack>
        </ComponentBlock>
      )}
    </DashboardContent>
  );
}
