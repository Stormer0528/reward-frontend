import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config';
import { themeConfig } from 'src/theme';

import { Image } from 'src/components/Image';

export default function Why() {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid size={{ md: 8 }}>
          <Title variant="h3" fontWeight={500}>
            Why are we doing this?
          </Title>
          <SubTitle fontWeight={700}>
            A personal note from Bobby Gray, founder of TEXITcoin...
          </SubTitle>

          <Text variant="h6">
            {`It may seem like we're bending over backwards to get bugs interested in crypto. Don't
            we have enough interest already? Are we struggling to find miners to join us? No.`}
          </Text>

          <Text variant="h6">
            Maybe you were born into precious metals. Maybe you started admiring & collecting at a
            young age, and got hooked. Maybe you have an important emotional attachment to your
            stack. Or, maybe you just got some bad information about digital currencies long ago.
          </Text>
        </Grid>
        <Grid size={{ md: 4 }} display="flex" justifyContent="flex-end">
          <Image src={`${CONFIG.ASSET_DIR}/assets/images/bobby.png`} sx={{ borderRadius: 50 }} />
        </Grid>
      </Grid>
      <Paper sx={{ pb: 4 }}>
        <Text variant="h6">
          {`For a variety of possible reasons, you resisted the bitcoin bug. You made a mistake, but
          it's not your fault. It wasn't an error of judgement or morals. You simply didn't have
          enough good information - or time - to reach a conclusion that would have allowed you to
          engage the uncomfortable idea of investing in digital, intangible money. It's okay - it
          took me nearly 12 years to wrap my mind around crypto and accomplish the paradigm shift
          I'm asking you to achieve in the span of a single web page.`}
        </Text>
        <Text variant="h6">
          {`So - get started with this program. Join our weekly calls. Set out to find the truth for
          yourself. Take the time you need to agree that a) crypto is the future of money and b)
          TEXITcoin is the future of crypto. If you give it a fair shot and still disagree, we'll
          part ways as friends; I'll return your original, unaltered kilo of silver, and you'll send
          back my cold storage coin.`}
        </Text>
        <Text variant="h6">
          {`But - if you find that crypto is fun, profitable and worth your effort, risk & commitment,
          I ask that you help us by sharing your experience with other stackers. Believe me when I
          tell you that the crypto industry is fun, exciting, full of glitz & glamor, but the
          cryptokids lack real experience and desperately need our leadership. Their ideas are good,
          but what they have in youthful exuberance is offset by a desperate need for real
          substance. The kids are on to something, but they're mostly here because they smell a
          chance to get rich quick. You and I? Let's be the adults in the room and show them what
          honest money means for saving the future as we dream it.`}
        </Text>

        <SubTitle fontWeight={700}>Take a chance with me, today. </SubTitle>
      </Paper>
    </Container>
  );
}

const Title = styled(Typography)(() => ({
  color: themeConfig.palette.common.texit,
  marginBottom: 20,
}));

const SubTitle = styled(Typography)(() => ({
  color: themeConfig.palette.common.texit,
  marginBottom: 30,
}));

const Text = styled(Typography)(() => ({
  marginBottom: 30,
  fontWeight: 400,
}));
