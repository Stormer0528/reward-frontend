import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { ReimbursementList } from 'src/sections/Reimbursement/List';

export default function ReimbursementPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Reimbursement`}</title>
      </Helmet>

      <ReimbursementList />
    </>
  );
}
