import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { themeConfig } from 'src/theme';

export default function Right() {
  return (
    <Box sx={{ background: themeConfig.palette.common.texit, borderRadius: 0 }}>
      <Container>
        <Box sx={{ p: '0 30px' }}>
          <Typography
            variant="h2"
            fontWeight={400}
            fontFamily="Josefin San"
            color={themeConfig.palette.common.white}
            mt={6}
          >{`Who's right? Only time will tell….`}</Typography>
          <Typography
            color={themeConfig.palette.common.white}
            m="20px 0 50px"
          >{`While many 'bugs are waiting for a doomsday that may never come, some have taken the first step and ventured in to the strange and often scammy world of digital currency. Two of these brave pioneers have even offered to document their journey and share it with us, so that you can learn from their experiences.`}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
