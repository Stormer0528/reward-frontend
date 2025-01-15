import type { Breakpoint } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { Footer } from 'src/layouts/main/footer';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import Brief from './Brief';
import Quick from './Quick';
import Steps from './Steps';
import Texit from './Texit';
import WhatsIn from './WhatsIn';
import Packages from './Packages';
import { SignUpView } from '../SignUp';

export default function Introduction() {
  const pageProgress = useScrollProgress();
  const layoutQuery: Breakpoint = 'md';

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Stack sx={{ position: 'relative' }}>
        <Brief />

        <WhatsIn />

        <Quick />

        <Steps />

        <Texit />

        <Packages />

        <Container sx={{ pb: 5 }}>
          <SignUpView />
        </Container>

        <Footer layoutQuery={layoutQuery} />
      </Stack>
    </>
  );
}
