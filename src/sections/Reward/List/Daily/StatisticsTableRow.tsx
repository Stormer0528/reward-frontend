import { useLazyQuery } from '@apollo/client';
import { useBoolean } from 'minimal-shared/hooks';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { formatDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/Iconify';
import { TableSkeleton } from 'src/components/Table';

import { FETCH_MEMBERSTATISTICS_WALLETS_QUERY } from '../../query';

// ----------------------------------------------------------------------

type Props = {
  // Todo: Update type to Statistics
  row: any;
  selected: boolean;
};

export default function StatisticsTableRow({ row, selected }: Props) {
  const {
    id,
    issuedAt,
    newBlocks,
    totalHashPower,
    totalMembers,
    txcShared,
    status,
    memberStatistics,
  } = row;

  const router = useRouter();

  const collapsible = useBoolean();

  const [fetchMemberStatistics, { loading, data }] = useLazyQuery(
    FETCH_MEMBERSTATISTICS_WALLETS_QUERY,
    {
      variables: { filter: { issuedAt } },
    }
  );

  const reward = data?.memberStatisticsWallets.memberStatisticsWallets ?? [];

  const wallets = memberStatistics.length ? memberStatistics[0].memberStatisticsWallets.length : 0;

  return (
    <>
      <TableRow
        selected={selected}
        onClick={() => {
          if (!collapsible.value) {
            fetchMemberStatistics();
          }
        }}
      >
        <TableCell>
          <IconButton
            size="small"
            color={collapsible.value ? 'inherit' : 'default'}
            onClick={collapsible.onToggle}
          >
            <Iconify
              icon={collapsible.value ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            />
          </IconButton>
        </TableCell>
        <TableCell>{formatDate(issuedAt)}</TableCell>
        <TableCell>{newBlocks}</TableCell>
        <TableCell>{totalHashPower}</TableCell>
        <TableCell>{totalMembers}</TableCell>
        <TableCell>{txcShared / 10 ** 8}</TableCell>
        <TableCell>
          {memberStatistics.length ? memberStatistics[0].txcShared / 10 ** 8 : 0}
        </TableCell>

        <TableCell align="center">
          {status && (
            <Tooltip title="View" placement="top" arrow>
              <IconButton
                color="success"
                onClick={() => router.push(paths.dashboard.reward.view(id))}
              >
                <Iconify icon="solar:eye-bold" />
              </IconButton>
            </Tooltip>
          )}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell sx={{ py: 0 }} colSpan={12}>
          <Collapse in={collapsible.value} timeout="auto" unmountOnExit>
            <Paper
              variant="outlined"
              sx={{
                py: 1,
                mb: 2,
                borderRadius: 1.5,
                ...(collapsible.value && { boxShadow: (theme) => theme.customShadows.z20 }),
              }}
            >
              <Typography variant="h6" component="div" sx={{ p: 2 }}>
                Wallets
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>date</TableCell>
                    <TableCell>address</TableCell>
                    <TableCell>hashPower</TableCell>
                    <TableCell>txc</TableCell>
                    <TableCell>percent</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {loading ? (
                    <>
                      {new Array(wallets).fill('').map(() => (
                        <TableSkeleton height={7} />
                      ))}
                    </>
                  ) : (
                    reward?.map((item) => (
                      <TableRow key={item?.id}>
                        <TableCell>{formatDate(item?.issuedAt)}</TableCell>
                        <TableCell>{item?.memberWallet?.address}</TableCell>
                        <TableCell>{item?.memberStatistic?.hashPower}</TableCell>
                        <TableCell>{(item?.txc ?? 0) / 10 ** 8}</TableCell>
                        <TableCell>{(item?.memberStatistic?.percent ?? 0) / 100}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
