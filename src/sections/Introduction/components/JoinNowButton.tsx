import type { Theme, SxProps } from '@mui/material/styles';

import Fab from '@mui/material/Fab';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { themeConfig } from 'src/theme';

interface Props {
  sx?: SxProps<Theme>;
}

export const JoinNowButton = ({ sx }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${paths.pages.intro}#sign-up`);

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
    <Fab
      color="inherit"
      variant="extended"
      size="small"
      onClick={handleClick}
      sx={{
        color: '#fff',
        bgcolor: themeConfig.palette.common.texit,
        fontWeight: 600,
        px: 4,
        py: 2,
        mt: 0.5, // Due to text horizontal alignment...
        ...sx,
      }}
    >
      JOIN NOW!
    </Fab>
  );
};
