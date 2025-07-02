import type { Theme, SxProps } from '@mui/material/styles';

import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { useBoolean } from 'src/hooks/useBoolean';

import { useFetchPlacementSearchMembers } from '../useApollo';

interface Member {
  id: string;
  username: string;
}

interface Props {
  onMinerChange: Function;
  sx?: SxProps<Theme>;
}

export function SearchMiner({ onMinerChange, sx }: Props) {
  const { fetchSearchMembers, members, loading } = useFetchPlacementSearchMembers();

  const addModal = useBoolean();
  const [miner, setMiner] = useState<Member>();

  useEffect(() => {
    fetchSearchMembers({
      variables: {
        filter: {
          ...(addModal.value && {
            placementParentId: null,
          }),
          OR: [
            { username: { contains: miner?.username ?? '', mode: 'insensitive' } },
            { fullName: { contains: miner?.username ?? '', mode: 'insensitive' } },
          ],
          status: true,
        },
        page: '1,10',
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [miner]);

  return (
    <Autocomplete
      sx={{ width: 300, ...sx }}
      options={members}
      loading={loading}
      loadingText={<LoadingButton loading={loading} />}
      getOptionLabel={(option) => `${option!.username}-${option!.fullName}`}
      renderInput={(params) => (
        <TextField {...params} label="Miner Name" margin="none" size="medium" />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option!.username}>
          {option!.username}
        </li>
      )}
      onInputChange={(_, name: string) => {
        setMiner({ id: '', username: name });
      }}
      onChange={(_, value) => {
        setMiner({ id: value?.id ?? '', username: value?.username ?? '' });
        onMinerChange(value?.id);
      }}
    />
  );
}
