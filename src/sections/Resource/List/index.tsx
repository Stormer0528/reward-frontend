import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import imageUrlBuilder from '@sanity/image-url';

import Box from '@mui/material/Box';

import { client } from 'src/utils/sanity/client';

import { CONFIG } from 'src/config';
import { DashboardContent } from 'src/layouts/dashboard';

import { Breadcrumbs } from 'src/components/Breadcrumbs';

import { PostItemSkeleton } from './post-skeleton';
import { PostItemHorizontal } from './post-item-horizontal';

export default function Resource() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const CONTENT_QUERY = `*[_type == "post"] | order(date desc) {
    ...,
    category->,
    body
  }`;

  const builder = imageUrlBuilder(client);

  const urlFor = (source: any) => builder.image(source);

  useEffect(() => {
    client
      .fetch(CONTENT_QUERY)
      .then((content) => setData(content))
      .catch((error) => console.log('error => ', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setLoading(!data.length), [data]);

  const renderLoading = <PostItemSkeleton variant="horizontal" />;

  const renderList = data.map((item) => (
    <PostItemHorizontal key={item.id} post={item} urlFor={urlFor} />
  ));

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} / resources`}</title>
      </Helmet>
      <DashboardContent>
        <Breadcrumbs
          heading="Resources"
          links={[{ name: 'Resources', href: '#' }, { name: 'list' }]}
          sx={{
            mb: { xs: 2, md: 3 },
          }}
        />

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          {loading ? renderLoading : renderList}
        </Box>
      </DashboardContent>
      ;
    </>
  );
}
