import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useBoolean } from 'minimal-shared/hooks';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';

import { toast } from 'src/components/SnackBar';
import { Iconify } from 'src/components/Iconify';

export default function ActionView() {
  const response = useBoolean();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get('token');
  const action = queryParams.get('action');

  useEffect(() => {
    const handleGetApi = async () => {
      try {
        const { data } = await axios.post(`${CONFIG.SERVER_HOST}/api/commission/action`, {
          token,
          action,
        });

        if (data.message === 'success') {
          response.onTrue();
        } else {
          response.onFalse();
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    handleGetApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container sx={{ mt: '30vh' }}>
      {response.value ? (
        <>
          <Stack direction="row" justifyContent="center">
            <Iconify icon="fa:check-circle" color="#008220" width={60} />
          </Stack>

          <Stack spacing={1} sx={{ mt: 3, mb: 8, textAlign: 'center', whiteSpace: 'pre-line' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your commission action was successfully sent!
            </Typography>
          </Stack>
        </>
      ) : (
        <>
          <Stack direction="row" justifyContent="center">
            <Iconify icon="fa-solid:times-circle" color="red" width={60} />
          </Stack>

          <Stack spacing={1} sx={{ mt: 3, mb: 8, textAlign: 'center', whiteSpace: 'pre-line' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your commission action was failed!
            </Typography>
          </Stack>
        </>
      )}
    </Container>
  );
}
