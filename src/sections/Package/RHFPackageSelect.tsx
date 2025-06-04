import type { TextFieldProps } from '@mui/material/TextField';

import { Suspense } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Skeleton from '@mui/material/Skeleton';

import { RHFSelect } from 'src/components/Form';

import { useFetchPackages } from './useApollo';

// ----------------------------------------------------------------------

type RHFPackageSelectProps = TextFieldProps & {
  name: string;
  filter?: any;
  sort?: string;
};

export function RHFPackageSelectWithoutLoading({
  filter,
  sort,
  ...selectProps
}: RHFPackageSelectProps) {
  const { packages } = useFetchPackages({ filter, sort });

  return (
    <RHFSelect {...selectProps}>
      {packages.map((option) => (
        <MenuItem key={option?.id} value={option?.id}>
          {`$${option?.amount} @ ${option?.productName}`}
        </MenuItem>
      ))}
    </RHFSelect>
  );
}

export function RHFPackageSelect(props: RHFPackageSelectProps) {
  return (
    <Suspense fallback={<Skeleton sx={{ fontSize: props.size === 'small' ? 34 : 48 }} />}>
      <RHFPackageSelectWithoutLoading {...props} />
    </Suspense>
  );
}
