import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';

import { Image } from 'src/components/Image';

// ----------------------------------------------------------------------

type Props = {
  post: any;
  urlFor: Function;
};

export function PostItemHorizontal({ post, urlFor }: Props) {
  const theme = useTheme();

  const { title, slug, date, quickSummary, mainImage } = post;

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Stack spacing={1} sx={{ p: theme.spacing(3, 3, 2, 3) }}>
        <Stack spacing={1} flexGrow={1}>
          <Typography color="inherit" variant="h5" sx={{ ...theme.mixins.maxLine({ line: 2 }) }}>
            {title}
          </Typography>

          <Typography variant="subtitle2">{date}</Typography>

          <Typography
            variant="body1"
            sx={{ ...theme.mixins.maxLine({ line: 3 }), color: 'text.secondary' }}
          >
            {quickSummary}
          </Typography>

          <Link
            component={RouterLink}
            variant="body2"
            href={paths.dashboard.resource.view(slug.current)}
          >
            Read more
          </Link>
        </Stack>
      </Stack>

      <Box
        sx={{
          p: 3,
          width: 240,
          height: 240,
          flexShrink: 0,
          position: 'relative',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Image
          alt={title}
          src={
            mainImage
              ? urlFor(mainImage).url()
              : `${CONFIG.ASSET_DIR}/assets/images/default-meeting.png`
          }
          sx={{ height: 1, borderRadius: 1.5 }}
        />
      </Box>
    </Card>
  );
}
