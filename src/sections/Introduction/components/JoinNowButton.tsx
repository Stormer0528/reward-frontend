import type { Theme, SxProps } from '@mui/material/styles';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

interface Props {
  sx?: SxProps<Theme>;
  [key: string]: any;
}

export const JoinNowButton = ({ sx, ...props }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${paths.pages.intro.root}#sign-up`);

    const maxAttempts = 20;
    let attempts = 0;

    const scrollToSignUp = () => {
      const el = document.getElementById('sign-up');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(scrollToSignUp, 100);
      }
    };

    scrollToSignUp();
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={handleClick}
      sx={{
        color: '#fff',
        bgcolor: '#262262',
        px: 4,
        py: 1.2,
        fontWeight: 600,
        borderRadius: 3,
        mt: 0.5, // Due to text horizontal alignment...
        ...sx,
      }}
      {...props}
    >
      Join Now
    </Button>
  );
};
