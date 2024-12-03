import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import { formatDate } from 'src/utils/format-time';

export type ProfitabilityCalculationResponse = {
  __typename?: 'ProfitabilityCalculationResponse';
  extraTXC: number;
  init: number;
  period: number;
  endDate: any;
  startDate: any;
  target: number;
  txc: number;
  txcCost: number;
  txcPrice: number;
};

interface Props {
  loading: boolean;
  data: ProfitabilityCalculationResponse;
}

export default function View({ loading, data }: Props) {
  return (
    <Stack
      spacing={2}
      alignItems="flex-end"
      sx={{ mt: 3, textAlign: 'right', typography: 'body2' }}
    >
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>End Date :</Box>
        <Box sx={{ width: 200, typography: 'subtitle1' }}>
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: 16 }} />
          ) : (
            <>{formatDate(data.endDate, 'MM/YYYY')}</>
          )}
        </Box>
      </Stack>
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>Price :</Box>
        <Box sx={{ width: 200, typography: 'subtitle1' }}>
          {loading ? <Skeleton variant="text" sx={{ fontSize: 16 }} /> : <>$ {data.txcPrice}</>}
        </Box>
      </Stack>
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>TXC :</Box>
        <Box sx={{ width: 200, typography: 'subtitle1' }}>
          {loading ? <Skeleton variant="text" sx={{ fontSize: 16 }} /> : <>{data.txc.toFixed(2)}</>}
        </Box>
      </Stack>
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>TXC Cost :</Box>
        <Box sx={{ width: 200, typography: 'subtitle1' }}>
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: 16 }} />
          ) : (
            <>{data.txcCost.toFixed(2)}</>
          )}
        </Box>
      </Stack>
      <Stack direction="row">
        <Box sx={{ color: 'text.secondary', typography: 'subtitle1' }}>Extra TXC :</Box>
        <Box sx={{ width: 200, typography: 'subtitle1' }}>
          {loading ? (
            <Skeleton variant="text" sx={{ fontSize: 16 }} />
          ) : (
            <>{data.extraTXC.toFixed(0)}</>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
