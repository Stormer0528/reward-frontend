import { useEffect } from 'react';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { useFetchPackages } from '../useApollo';

interface Props {
  setPackageId: Function;
}

export default function Packages({ setPackageId }: Props) {
  const { packages, fetchPackages } = useFetchPackages();

  useEffect(
    () => {
      fetchPackages({
        variables: { filter: { status: true, enrollVisibility: true }, sort: '-amount' },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <TextField label="Package" select fullWidth onChange={(e) => setPackageId(e.target.value)}>
      {packages?.map((pack) => (
        <MenuItem key={pack.id} value={pack.id}>
          {pack.productName}
        </MenuItem>
      ))}
    </TextField>
  );
}
