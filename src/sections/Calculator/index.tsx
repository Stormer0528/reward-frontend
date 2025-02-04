import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import CalculatorForm from './Form';

export default function Calculator() {
  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ pb: 2 }}>
        Calculator
      </Typography>

      <CalculatorForm />
    </DashboardContent>
  );
}
