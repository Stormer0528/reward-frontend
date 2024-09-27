import type { Member } from 'src/__generated__/graphql';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

// ----------------------------------------------------------------------

type Props = {
  row: Member;
};

export default function MemberTableRow({ row }: Props) {
  const { username, fullName, createdAt } = row;

  return (
    <TableRow hover>
      <TableCell>{username}</TableCell>

      <TableCell>{fullName}</TableCell>

      <TableCell>
        <ListItemText
          primary={fDate(createdAt)}
          secondary={fTime(createdAt)}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>
    </TableRow>
  );
}
