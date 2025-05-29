import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { BackToTopButton } from 'src/components/animate/BackToTopButton';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/ScrollProgress';

import Brief from './Brief';
import Quick from './Quick';
import Steps from './Steps';
import Texit from './Texit';
import Footer from './Footer';
import WhatsIn from './WhatsIn';
import Packages from './Packages';
import { SignUpView } from '../SignUp';

export default function Introduction() {
  const router = useRouter();
  const pageProgress = useScrollProgress();
  const { pathname, hash, search } = useLocation();

  if (pathname.includes('sign-up')) {
    setTimeout(() => {
      router.push(`${paths.pages.intro}${search}#sign-up`);
    }, 100);
  }

  useEffect(() => {
    setTimeout(() => {
      if (hash.includes('sign-up') && !search) {
        document.getElementById('sign-up')?.focus();
      }
    }, 100);
  }, [hash, search]);

  return (
    <Stack>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton />

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
