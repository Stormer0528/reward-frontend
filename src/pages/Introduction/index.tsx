import Container from '@mui/material/Container';

import { CONFIG } from 'src/config';

import { BackToTopButton } from 'src/components/animate';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/ScrollProgress';

import { SignUpView } from 'src/sections/SignUp';
import { Brief, Quick, Steps, Texit, WhatsIn, Packages } from 'src/sections/Introduction';
// ----------------------------------------------------------------------

const metadata = { title: `${CONFIG.APP_NAME} - Introduction` };

export default function Page() {
  const pageProgress = useScrollProgress();
  return (
    <>
      <title>{metadata.title}</title>

      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton />

      <Brief />

      <WhatsIn />

      <Quick />

      <Steps />

      <Texit />

      <Packages />

      <Container>
        <SignUpView />
      </Container>
    </>
  );
}
