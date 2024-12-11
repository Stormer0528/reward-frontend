import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';

import Box from '@mui/material/Box';

import { client } from 'src/utils/sanity/client';

import { EmptyContent } from 'src/components/EmptyContent';

import { PostItemSkeleton } from './post-skeleton';
import { PostItemHorizontal } from './post-item-horizontal';

interface Props {
  title: string;
}

export default function Item({ title }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const CONTENT_QUERY = `*[_type == "post" && category->title == "${title}"] | order(date desc) {
    ...,
    category->,
    body,
  }`;

  const builder = imageUrlBuilder(client);

  const urlFor = (source: any) => builder.image(source);

  useEffect(() => {
    setLoading(true);

    client
      .fetch(CONTENT_QUERY)
      .then((content) => {
        setData(content);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error => ', error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const renderLoading = <PostItemSkeleton variant="horizontal" />;

  const renderList = data.map((item) => (
    <PostItemHorizontal key={item.id} post={item} urlFor={urlFor} />
  ));

  return (
    <>
      {!data.length && !loading && <EmptyContent />}

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        {loading ? renderLoading : renderList}
      </Box>
    </>
  );
}
