import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import SponsorList from 'src/sections/Sponsor/SponsorList';

interface Props {
  allowState: string;
}

// ----------------------------------------------------------------------

export default function Page({ allowState }: Props) {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Sponsorships`}</title>
      </Helmet>

      <SponsorList filter={{ allowState }} />
    </>
  );
}
