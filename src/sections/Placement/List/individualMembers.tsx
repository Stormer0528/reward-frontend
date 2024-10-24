import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import ListItemText from '@mui/material/ListItemText';

import { fDate, fTime } from 'src/utils/format-time';

import { TableNoData } from 'src/components/Table';
import { ScrollBar } from 'src/components/ScrollBar';

interface Props {
  members: any[];
}

export default function IndividualMembers({ members }: Props) {
  const notFound = !members?.length;

  return (
    <ScrollBar>
      <Table stickyHeader size="small" sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Sponsor</TableCell>
            <TableCell align="left">Created At</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {members!.map((row: any) => (
            <TableRow>
              <TableCell
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: (theme) => theme.vars.palette.action.hover },
                }}
              >
                <ListItemText
                  primary={row.username}
                  secondary={row.email}
                  primaryTypographyProps={{ typography: 'body2' }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                  }}
                />
              </TableCell>

              <TableCell>{row.fullName}</TableCell>

              <TableCell>{row.sponsor.username}</TableCell>

              <TableCell>
                <ListItemText
                  primary={fDate(row.createdAt)}
                  secondary={fTime(row.createdAt)}
                  primaryTypographyProps={{ typography: 'body2', noWrap: true }}
                  secondaryTypographyProps={{
                    mt: 0.5,
                    component: 'span',
                    typography: 'caption',
                  }}
                />
              </TableCell>
            </TableRow>
          ))}

          <TableNoData notFound={notFound} />
        </TableBody>
      </Table>
    </ScrollBar>
  );
}
