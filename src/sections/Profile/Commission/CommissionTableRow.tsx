import type { WeeklyCommission } from 'src/__generated__/graphql';

import dayjs from 'dayjs';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

// ----------------------------------------------------------------------

type Props = {
  row: WeeklyCommission;
};

export default function CommissionTableRow({ row }: Props) {
  const {
    member,
    begL,
    begR,
    newL,
    newR,
    maxL,
    maxR,
    endL,
    endR,
    pkgL,
    pkgR,
    commission,
    weekStartDate,
  } = row;

  return (
    <TableRow hover>
      <TableCell align="left">
        <ListItemText
          primary={dayjs(weekStartDate).format('MMM-ww')}
          secondary={`${dayjs(weekStartDate).add(1, 'day').format('MM/DD')} - ${dayjs(weekStartDate).add(7, 'day').format('MM/DD')}`}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>
      <TableCell
        align="left"
        // onClick={() => router.push(paths.dashboard.profile.(member?.id ?? ''))}
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
      <TableCell align="left">{member?.assetId}</TableCell>
      <TableCell align="left">{`L${begL}, R${begR}`}</TableCell>
      <TableCell align="left">{`L${newL}, R${newR}`}</TableCell>
      <TableCell align="left">{`L${maxL}, R${maxR}`}</TableCell>
      <TableCell align="left">{`L${endL}, R${endR}`}</TableCell>
      <TableCell align="left">{`L${pkgL}, R${pkgR}`}</TableCell>
      <TableCell align="left">{commission ?? 0}</TableCell>
    </TableRow>
  );
}
