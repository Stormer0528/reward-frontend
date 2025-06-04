import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import Brief from './Brief';
import Quick from './Quick';
import Steps from './Steps';
import Texit from './Texit';
import Footer from './Footer';
import WhatsIn from './WhatsIn';
import Packages from './Packages';
import { SignUpView } from '../SignUp';

export default function Introduction() {
  const pageProgress = useScrollProgress();

  return (
    <Stack>
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

        <Container>
          <SignUpView />
        </Container>

        <Footer />
      </Stack>
    </Stack>
  );
}
