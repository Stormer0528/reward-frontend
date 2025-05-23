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

  const { loading, members, fetchMemberSearch } = useFetchMemberSearch();

  useEffect(() => {
    fetchMemberSearch({
      variables: {
        filter: {
          ...filter,
          status: true,
          OR: [
            { username: { contains: username ?? '', mode: 'insensitive' } },
            { fullName: { contains: username ?? '', mode: 'insensitive' } },
          ],
        },
        page: '1,10',
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    if (setMemberId) {
      setMemberId(members.find((member) => member.username === username?.split(' (')[0])?.id);
    }
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
