import { useFieldArray, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
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
}

export default function MemberWallets({ payouts }: Props) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'wallets' });

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
    <>
      {fields.map((item, index) => (
        <Box
          key={item.id}
          rowGap={3}
          columnGap={1}
          display="grid"
          sx={{ mb: 1, gridTemplateColumns: '20% 50% 15% auto' }}
        >
          <Field.Select name={`wallets[${index}].payoutId`} label="Payout">
            {payouts.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.method}
              </MenuItem>
            ))}
          </Field.Select>

          <Field.Text name={`wallets[${index}].address`} label="Address" />

          <Field.Text name={`wallets[${index}].percent`} label="Percent" type="number" />

          <Button
            size="small"
            color="error"
            sx={{ mt: 1.5, width: 80 }}
            startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
            onClick={() => handleRemove(index)}
          />
        </Box>
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
    </>
  );
}
