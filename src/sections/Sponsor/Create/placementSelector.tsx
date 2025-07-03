import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Iconify } from 'src/components/Iconify';

import { useFetchPlacementSearchMembers } from 'src/sections/Placement/useApollo';

interface Props {
  setMemberId: React.Dispatch<React.SetStateAction<string>>;
  currentMember?: { id: string; username: string; fullName: string } | null;
}

export function PlacementSelector({ currentMember, setMemberId }: Props) {
  const [username, setUsername] = useState<string>();
  const [debouncedUsername, setDebouncedUsername] = useState<string>();

  const { loading, members, fetchSearchMembers } = useFetchPlacementSearchMembers();

  useEffect(() => {
    fetchSearchMembers({
      variables: {
        filter: {
          OR: [
            { username: { contains: debouncedUsername ?? '', mode: 'insensitive' } },
            { fullName: { contains: debouncedUsername ?? '', mode: 'insensitive' } },
          ],
        },
        page: '1,10',
      },
    });
  }, [debouncedUsername, fetchSearchMembers]);

  useEffect(() => {
    if (setMemberId) {
      setMemberId(
        members.find((member) => member.username === username?.split(' (')[0])?.id ??
          currentMember?.id ??
          ''
      );
    }
    const handler = setTimeout(() => {
      setDebouncedUsername(username);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <Autocomplete
      fullWidth
      options={members.map((item) => `${item.username} (${item.fullName})`)}
      isOptionEqualToValue={(option, value) => option === value}
      value={
        username ?? (currentMember && `${currentMember?.username} (${currentMember?.fullName})`)
      }
      loading={loading}
      loadingText={<Iconify icon="line-md:loading-loop" />}
      renderInput={(params) => <TextField {...params} label="Placement Member" margin="none" />}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
      onChange={(_, value) => setUsername(value ?? '')}
      onInputChange={(_, value) => setUsername(value)}
    />
  );
}
