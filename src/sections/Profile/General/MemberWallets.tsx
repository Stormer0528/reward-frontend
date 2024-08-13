import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Field } from 'src/components/Form';
import { Iconify } from 'src/components/Iconify';

interface Props {
  // Todo: Change type as Payout
  payouts: any[];
  wallets: any[];
}

interface Wallet {
  id: string;
  payoutId?: string;
  address?: string;
  percent?: number;
}

export default function MemberWallets({ payouts, wallets }: Props) {
  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'memberWallets' });

  const forms: Wallet[] = fields?.length
    ? fields
    : wallets.map(({ id, payoutId, address, percent }) => ({
        id,
        payoutId,
        address,
        percent,
      }));

  useEffect(() => {
    wallets.forEach(({ payoutId, address, percent }, index) => {
      setValue(`memberWallets[${index}].payoutId`, payoutId);
      setValue(`memberWallets[${index}].address`, address);
      setValue(`memberWallets[${index}].percent`, percent / 100);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallets]);

  const handleAdd = () => {
    append({
      payoutId: '',
      address: '',
      percent: 0,
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Card sx={{ p: 3, maxHeight: '495px', overflowY: 'auto' }}>
      {forms?.map((item, index) => (
        <Stack key={item.id} spacing={0.5} sx={{ mb: 1 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Field.Select
              name={`memberWallets[${index}].payoutId`}
              label="Payout"
              InputLabelProps={{ shrink: true }}
              sx={{ width: 300 }}
              defaultValue={item.payoutId}
            >
              {payouts.map((option) => (
                <MenuItem key={option?.id} value={option?.id}>
                  {option?.method}
                </MenuItem>
              ))}
            </Field.Select>

            <Field.Text
              name={`memberWallets[${index}].address`}
              label="Address"
              InputLabelProps={{ shrink: true }}
              defaultValue={item.address}
            />

            <Field.Text
              name={`memberWallets[${index}].percent`}
              label="Percent"
              InputLabelProps={{ shrink: true }}
              type="number"
              sx={{ width: 200 }}
              defaultValue={item.percent}
            />

            <Button
              size="small"
              color="error"
              sx={{ mt: 1.5 }}
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      ))}
      <Divider flexItem sx={{ borderStyle: 'dashed', mb: 1 }} />
      <IconButton
        size="small"
        color="default"
        sx={{
          borderRadius: 0,
          '&:hover': { background: 'transparent', color: '#00A76F' },
        }}
        onClick={handleAdd}
      >
        <Iconify icon="bxs:plus-circle" sx={{ mr: 1 }} />
        <Typography>Add Item</Typography>
      </IconButton>
    </Card>
  );
}
