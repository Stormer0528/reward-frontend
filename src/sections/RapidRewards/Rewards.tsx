import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from '../Introduction/components/SectionContent';
import {
  FloatLine,
  CircleSvg,
  FloatTriangleDownIcon,
} from '../Introduction/components/SvgElements';

export default function WhatsIn({ sx, ...other }: StackProps) {
  const renderLines = (
    <>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          position: 'absolute',
          transform: 'translateX(-15px)',
        }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon
          sx={{
            width: 30,
            height: 15,
            opacity: 0.24,
            position: 'static',
          }}
        />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderContent = (
    <SectionContent
      title="Our Rapid Rewards Program"
      description={
        <Grid lg={6} lgOffset={3} md={8} mdOffset={2} xs={10} xsOffset={1}>
          In addition to our simple one, two, free referral program (refer three and get more mining
          hash power for free), we also offer a compensation plan that pays CASH for referrals.
          There are some important basics to understand so that you can make the most of our
          commission program.
        </Grid>
      }
      sx={{ textAlign: 'center' }}
    />
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        pb: { xs: 10, md: 20 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative' }}>
          <Grid container disableEqualOverflow sx={{ position: 'relative', zIndex: 9 }}>
            {renderContent}
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
