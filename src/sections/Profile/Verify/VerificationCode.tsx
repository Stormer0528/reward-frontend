import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { CONFIG } from 'src/config';
import { EmailInboxIcon } from 'src/assets/icons';

import { toast } from 'src/components/SnackBar';
import { Form, Field } from 'src/components/Form';

import { useSendEmailVerificationCode } from 'src/sections/SignUp/useApollo';

import { useAuthContext } from 'src/auth/hooks';

import { useEmailVerifyCode } from '../useApollo';

// ----------------------------------------------------------------------

export type VerifySchemaType = zod.infer;

export const VerifySchema = zod.object({
  code: zod
    .string()
    .min(1, { message: 'Code is required!' })
    .min(8, { message: 'Code must be at least 8 characters!' }),
});

// ----------------------------------------------------------------------

interface Props {
  setSuccess: (value: boolean) => void;
}

export default function VerificationCode({ setSuccess }: Props) {
  const { setCode } = useAuthContext();

  const { loading, emailVerifyCode } = useEmailVerifyCode();
  const { sendVerificationCode } = useSendEmailVerificationCode();

  const defaultValues = { code: '' };

  const methods = useForm<VerifySchemaType>({
    resolver: zodResolver(VerifySchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async ({ code }) => {
    try {
      const { data } = await emailVerifyCode({ variables: { data: { verificationCode: code } } });

      if (data?.emailVerifyCode.accessToken) {
        setCode(code);
        setSuccess(true);

        localStorage.setItem(CONFIG.storageTokenKey, data?.emailVerifyCode.accessToken);
      } else {
        toast.error('Failed to verify code');
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleSendVerificationCode = async () => {
    try {
      await sendVerificationCode();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const renderHead = (
    <>
      <EmailInboxIcon sx={{ mx: 'auto', display: 'block' }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5, textAlign: 'center', whiteSpace: 'pre-line' }}>
        <Typography variant="h5">Please check your email!</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`We've emailed a 8-digit confirmation code. \nPlease enter the code in the box below to verify your email.`}
        </Typography>
      </Stack>
    </>
  );

  const renderForm = (
    <Stack spacing={3}>
      <Field.Code
        name="code"
        length={8}
        sx={{
          [`& .css-wpbnuu-MuiInputBase-input-MuiOutlinedInput-input`]: {
            height: {
              xs: '0.2rem !important ',
              md: '1rem !important ',
              lg: '1.4rem !important ',
            },
            padding: { xs: '16px 1px !important', md: '16.5px 14px !important' },
          },
        }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="primary"
        loading={loading}
        variant="contained"
        loadingIndicator="Verify..."
      >
        Verify
      </LoadingButton>

      <Typography variant="body2" sx={{ mx: 'auto' }}>
        {`Don't have a code? `}
        <Link variant="subtitle2" sx={{ cursor: 'pointer' }} onClick={handleSendVerificationCode}>
          Resend code
        </Link>
      </Typography>
    </Stack>
  );

  return (
    <>
      {renderHead}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}
