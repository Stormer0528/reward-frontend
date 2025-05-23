import type { Member } from 'src/__generated__/graphql';

import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useFetchMemberSearch } from 'src/sections/Profile/useApollo';

import { Iconify } from '../Iconify';

interface Props {
  filter?: any;
  label?: string;
  setMemberId?: Function;
  currentMember?: Member | null;
}

export default function SearchMiner({
  currentMember,
  setMemberId,
  filter,
  label = 'Miner',
}: Props) {
  const [username, setUsername] = useState<string>();
  const [debouncedUsername, setDebouncedUsername] = useState<string>();

  const { loading, members, fetchMemberSearch } = useFetchMemberSearch();

  useEffect(() => {
    if (debouncedUsername !== undefined) {
      fetchMemberSearch({
        variables: {
          filter: {
            ...filter,
            status: true,
            OR: [
              { username: { contains: debouncedUsername ?? '', mode: 'insensitive' } },
              { fullName: { contains: debouncedUsername ?? '', mode: 'insensitive' } },
            ],
          },
        },
      });
    }
  }, [debouncedUsername, fetchMemberSearch, filter]);

  useEffect(() => {
    if (setMemberId) {
      setMemberId(members.find((member) => member.username === username?.split(' (')[0])?.id);
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
      renderInput={(params) => <TextField {...params} label={label} margin="none" />}
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
