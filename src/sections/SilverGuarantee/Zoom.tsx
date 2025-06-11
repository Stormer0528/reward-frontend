import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { themeConfig } from 'src/theme';

export default function Zoom() {
  return (
    <Box sx={{ background: themeConfig.palette.common.texit, borderRadius: 0, pb: 4 }}>
      <Container>
        <Box p="0 30px">
          <Typography
            variant="h2"
            fontWeight={500}
            fontFamily="Josefin San"
            color={themeConfig.palette.common.white}
            mt={6}
          >{`And that's it!`}</Typography>
          <Typography
            color={themeConfig.palette.common.white}
            m="20px 0"
          >{`This is as close to risk-free as you can possibly get! Dip a toe into the crypto waters with TEXITcoin - the future of money in Texas. Join us on our informative Zoom calls Tuesday evenings. Be a part of our growing community of people that dare to do something new & different. Let's learn together and win together!`}</Typography>
          <Typography sx={{ color: '#d9d9d9 !important' }}>
            Check back often for news & updates, as we share our progress and results with you and
            the rest of our community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
