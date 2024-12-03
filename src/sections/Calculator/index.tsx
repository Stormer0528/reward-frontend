import Typography from '@mui/material/Typography';

import CalculatorForm from './Form';

export default function Calculator() {
  return (
    <>
      <Typography variant="h4" sx={{ pb: 2 }}>
        Calculator
      </Typography>

      <CalculatorForm />
    </>
  );
}
