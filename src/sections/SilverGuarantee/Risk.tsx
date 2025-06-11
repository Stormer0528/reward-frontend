import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { themeConfig } from 'src/theme';

export default function Risk() {
  return (
    <Box sx={{ textAlign: 'center', background: '#00492c', borderRadius: 0 }}>
      <Container>
        <Box p="0 30px">
          <Paper sx={{ background: 'transparent', px: { md: 12, xs: 2 } }}>
            <Typography
              variant="h3"
              fontWeight={40}
              m="30px 0"
              fontFamily="Josefin Sans"
              color={themeConfig.palette.common.white}
            >
              We understand and respect your RISK TOLERANCE, and have an offer just for you…
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
