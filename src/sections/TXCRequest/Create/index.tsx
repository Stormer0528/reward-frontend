import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { CONFIG } from 'src/config';
import { DashboardContent } from 'src/layouts/dashboard';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { useAuthContext } from 'src/auth/hooks';

import { Schema, type SchemaType } from './schema';
import { useCreateBuyTXCOrder } from '../useApollo';

export default function TXCRequest() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [price, setPrice] = useState<number>(0);
  const [walletAddress, setWalletAddress] = useState<string>();

  const { createBuyTXCOrder } = useCreateBuyTXCOrder();

  const defaultValues = {
    amount: 0,
  };

  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (newData) => {
    try {
      if (!walletAddress) {
        toast.error('Wallet address is required');
        return;
      }

      const { data } = await createBuyTXCOrder({ ...newData, walletAddress });

      if (data) {
        reset();
        router.push(`${paths.pages.order.root}/${data.createBuyTXCOrder.id}`);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        const [error] = err.graphQLErrors;

        if (error.path?.includes('amount')) {
          setError('amount', { type: 'manual', message: error?.message || '' });
        }

        toast.error(error?.message);
      } else {
        toast.error(err);
      }
    }
  });

  useEffect(() => {
    async function getPrice() {
      try {
        const { data } = await axios.get(`${CONFIG.SITE_URL}/api/explorer/getcurrentprice`, {
          responseType: 'json',
        });

        setPrice(data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    getPrice();
  }, []);

  return (
    <DashboardContent>
      <Breadcrumbs
        heading="TXC Request"
        links={[{ name: 'TXC Request', href: paths.dashboard.sponsor.root }]}
        sx={{
          mb: { xs: 1, md: 2 },
        }}
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <Box
          rowGap={2}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
        >
          <Field.Text type="number" name="amount" label="Amount" required />

          <Autocomplete
            freeSolo
            fullWidth
            options={user?.memberWallets ?? []}
            getOptionLabel={(option: any) => option.address}
            renderInput={(params) => (
              <TextField
                {...params}
                name="walletAddress"
                label="Wallet address to receive"
                margin="none"
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option!.address}>
                {option.address}
              </li>
            )}
            onChange={(_, value: any) => setWalletAddress(value.address)}
            onInputChange={(_, value: any) => setWalletAddress(value)}
          />
        </Box>

        <Stack direction="row" justifyContent="flex-end" mt={2}>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Submit
          </LoadingButton>
        </Stack>
      </Form>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="subtitle1">TXC Price</Typography>
        <Typography variant="body1">{price}</Typography>
      </Stack>
    </DashboardContent>
  );
}
