import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { themeConfig } from 'src/theme';

export default function Join() {
  return (
    <Container>
      <Box textAlign="center" padding="0 30px">
        <Typography
          variant="h2"
          fontWeight={400}
          marginTop={6}
          fontFamily="Josefin Sans"
          color={themeConfig.palette.common.texit}
        >
          Will you join Chris & Tommy for the journey?
        </Typography>
        <Box sx={{ px: { md: 30, xs: 4 } }}>
          <Typography margin="20px 0 50px">
            The world of digital currency has some great news for those that missed the Bitcoin
            bandwagon and waited on the sidelines.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
