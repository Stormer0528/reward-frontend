import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { CreateForm } from 'src/sections/Reimbursement/Create';

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / Reimbursement`}</title>
      </Helmet>

      <CreateForm />
    </>
  );
}
