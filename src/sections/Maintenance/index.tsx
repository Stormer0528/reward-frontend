import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// import { CompactContent } from 'src/layouts/simple';
import { SimpleCompactContent } from 'src/layouts/simple';
import { MaintenanceIllustration } from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export function MaintenanceView() {
  return (
    <SimpleCompactContent>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h3" sx={{ mb: 2 }}>
          Website currently under maintenance
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>

        <MaintenanceIllustration sx={{ my: { xs: 5, sm: 10 } }} />
      </Box>
    </SimpleCompactContent>
  );
}
