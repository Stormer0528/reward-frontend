import MediaPlayer from 'react-player';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export function Quick() {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.vars.palette.grey['A200'],
        py: {xs: 4, md: 6},
      })}
    >
      <Container>
        <Typography variant="h2" textAlign="center" sx={{ my: 2 }}>
          A Quick Introduction...
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MediaPlayer url="https://www.youtube.com/watch?v=-XP4JzOFYFI" controls />
        </Box>
      </Container>
    </Box>
  );
}
