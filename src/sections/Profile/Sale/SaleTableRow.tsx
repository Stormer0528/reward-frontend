import type { Sale } from 'src/__generated__/graphql';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type Props = {
  row: Sale;
};

export default function SaleTableRow({ row }: Props) {
  const { member, package: product, paymentMethod, orderedAt } = row;

  return (
    <TableRow hover>
      <TableCell
        align="left"
        sx={{
          px: 1,
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          '&:hover': { bgcolor: (theme) => theme.vars.palette.action.hover },
        }}
      >
        <ListItemText
          primary={member?.username}
          secondary={member?.email}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        {member?.assetId}
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        {product?.productName}
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        {paymentMethod}
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        {product?.amount}
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        {product?.token}
      </TableCell>
      <TableCell align="left" sx={{ whiteSpace: 'nowrap' }}>
        <ListItemText
          primary={fDate(orderedAt)}
          secondary={fTime(orderedAt)}
          primaryTypographyProps={{ typography: 'caption', noWrap: true }}
          secondaryTypographyProps={{
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>
    </TableRow>
  );
}
