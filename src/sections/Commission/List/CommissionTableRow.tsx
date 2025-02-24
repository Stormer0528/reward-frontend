import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import { formatID } from 'src/utils/helper';

import { ConfirmationStatus, type WeeklyCommission } from 'src/__generated__/graphql';

import { Label } from 'src/components/Label';

// ----------------------------------------------------------------------
dayjs.extend(utcPlugin);

type Props = {
  row: WeeklyCommission;
};

export default function CommissionTableRow({ row }: Props) {
  const {
    ID,
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
    status,
    commission,
    weekStartDate,
  } = row;

  return (
    <TableRow hover>
      <TableCell align="left">{formatID(ID, 'C')}</TableCell>
      <TableCell align="left">
        <ListItemText
          primary={dayjs(weekStartDate).utc().format('MMM-ww')}
          secondary={`${dayjs(weekStartDate).utc().format('MM/DD')} - ${dayjs(weekStartDate).utc().add(6, 'day').format('MM/DD')}`}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{
            component: 'span',
            color: 'text.disabled',
          }}
        />
      </TableCell>
      <TableCell align="left">{`L${begL}, R${begR}`}</TableCell>
      <TableCell align="left">{`L${newL}, R${newR}`}</TableCell>
      <TableCell align="left">{`L${maxL}, R${maxR}`}</TableCell>
      <TableCell align="left">{`L${pkgL}, R${pkgR}`}</TableCell>
      <TableCell align="left">{`L${endL}, R${endR}`}</TableCell>
      <TableCell align="left">{commission ?? 0}</TableCell>
      <TableCell align="left">
        <Label
          variant="soft"
          color={
            status === ConfirmationStatus.Approved
              ? 'success'
              : ConfirmationStatus.Pending
                ? 'warning'
                : 'error'
          }
        >
          {status}
        </Label>
      </TableCell>
    </TableRow>
  );
}
