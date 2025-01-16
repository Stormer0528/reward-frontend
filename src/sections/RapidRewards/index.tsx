import type { Breakpoint } from '@mui/material';

import Container from '@mui/material/Container';

import { Footer } from 'src/layouts/main/footer';

import Rewards from './Rewards';
import { SignUpView } from '../SignUp';
import Description from './Description';
import Packages from '../Introduction/Packages';

export default function RapidRewards() {
  const layoutQuery: Breakpoint = 'md';
  return (
    <>
      <Rewards />

      <Description />

      <Packages />

      <Container>
        <SignUpView />
      </Container>

      <Footer layoutQuery={layoutQuery} />
    </>
  );
}
