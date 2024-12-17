import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { client } from 'src/utils/sanity/client';

import { CONFIG } from 'src/config';
import { DashboardContent } from 'src/layouts/dashboard';

import { BackToTop } from 'src/components/animate';
import { Breadcrumbs } from 'src/components/Breadcrumbs';

import Item from './item';

export default function Resource() {
  const [data, setData] = useState<any[]>([]);

  const CONTENT_QUERY = `*[_type == "category"] | order(date desc) {
    ...,
    title,
    body,
  }`;

  const TABS = data.map((item) => ({ value: item.title, label: item.title }));

  const tabs = useTabs('Zoom Calls');

  useEffect(() => {
    client
      .fetch(CONTENT_QUERY)
      .then((content) => setData(content))
      .catch((error) => console.log('error => ', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / resources`}</title>
      </Helmet>

      <BackToTop />

      <DashboardContent>
        <Breadcrumbs
          heading="Resources"
          links={[{ name: 'Resources', href: '#' }, { name: 'list' }]}
          sx={{
            mb: { xs: 2, md: 3 },
          }}
        />

        <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 2, md: 3 } }}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>

        <Item title={tabs.value} />
      </DashboardContent>
    </>
  );
}
