import type { StackProps } from '@mui/material/Stack';

import MediaPlayer from 'react-player';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { varFade, MotionViewport } from 'src/components/animate';

import { SectionContent } from './components/SectionContent';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/SvgElements';

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
      title="A Quick Introduction.."
      description={
        <Container>
          <MediaPlayer
            url="https://www.youtube.com/watch?v=-XP4Jz0FYFI"
            width={360}
            height={300}
            controls
          />
        </Container>
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
          <Grid
            container
            disableEqualOverflow
            spacing={{ xs: 5, md: 8 }}
            sx={{ position: 'relative', zIndex: 9 }}
            display="flex"
            justifyContent="center"
          >
            {renderContent}
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}
