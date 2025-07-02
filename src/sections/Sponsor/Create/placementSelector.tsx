import type { PlacementSearchMember } from 'src/__generated__/graphql';

import { useMemo } from 'react';

import { Skeleton } from '@mui/material';

import { PlacementStatus } from 'src/__generated__/graphql';

import { Iconify } from 'src/components/Iconify';
import { RHFAutocomplete } from 'src/components/Form';

import { useFetchPlacementSearchMembers } from 'src/sections/Placement/useApollo';

interface Props {
  current?: string;
}

export default function PlacementSelector({ current }: Props) {
  const { loading, members } = useFetchPlacementSearchMembers();

  const filterParentsWithMoreThanTwoChildren = (
    data: PlacementSearchMember[]
  ): PlacementSearchMember[] => {
    const parentCount: Record<string, number> = {};
    data.forEach((m) => {
      if (m.placementParentId) {
        parentCount[m.placementParentId] = (parentCount[m.placementParentId] || 0) + 1;
      }
    });

    const parentsToRemove = new Set(
      Object.entries(parentCount)
        .filter(([_, count]) => count >= 2)
        .map(([parentId]) => parentId)
    );

    return data.filter(
      (m) => !parentsToRemove.has(m.id) && m.placementStatus !== PlacementStatus.Temp
    );
  };

  const filtered = useMemo(() => filterParentsWithMoreThanTwoChildren(members), [members]);

  const memberData = useMemo(
    () =>
      filtered.reduce<Record<string, { username: string; fullName: string }>>(
        (prev, save) => ({
          ...prev,
          [save.id]: { username: save.username, fullName: save.fullName },
        }),
        {}
      ),
    [filtered]
  );

  return (
    <>
      {loading ? (
        <Skeleton sx={{ fontSize: 48 }} />
      ) : (
        <RHFAutocomplete
          name="placementParentId"
          label="Placement Member"
          value={filtered.length && current}
          freeSolo
          fullWidth
          options={filtered.map((member) => member.id)}
          getOptionLabel={(option: any) =>
            `${memberData[option]?.username} (${memberData[option]?.fullName})`
          }
          loadingText={<Iconify icon="line-md:loading-loop" />}
          renderOption={(props, option) => (
            <li {...props} key={option} value={option.split('()')[0]}>
              {memberData[option]?.username} ({memberData[option]?.fullName})
            </li>
          )}
        />
      )}
    </>
  );
}
