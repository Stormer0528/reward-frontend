import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

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
  const router = useRouter();
  const { pathname, hash, search } = useLocation();
  const pageProgress = useScrollProgress();
  const [scrollY, setScrollY] = useState(0);

  if (pathname.includes('sign-up')) {
    router.push(`${paths.pages.intro.root}${search}#sign-up`);
  }

  useEffect(() => {
    setTimeout(() => {
      if (hash.includes('sign-up')) {
        document.getElementById('sign-up')?.focus();
      }
    }, 100);
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update the state with the current scrollY value
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (scrollY < 4000) {
      router.push(pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

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
