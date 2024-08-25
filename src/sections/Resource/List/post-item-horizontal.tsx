import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config';
import { maxLine } from 'src/theme/styles';

import { Image } from 'src/components/Image';

// ----------------------------------------------------------------------

type Props = {
  post: any;
  urlFor: Function;
};

export function PostItemHorizontal({ post, urlFor }: Props) {
  const theme = useTheme();

  const router = useRouter();

  const { title, slug, quickSummary, mainImage } = post;

  return (
    <Card
      sx={{ display: 'flex', cursor: 'pointer', justifyContent: 'space-between' }}
      onClick={() => router.push(paths.dashboard.resource.view(slug.current))}
    >
      <Stack spacing={1} sx={{ p: theme.spacing(3, 3, 2, 3) }}>
        <Stack spacing={1} flexGrow={1}>
          <Link
            component={RouterLink}
            href="paths.dashboard.resource.detail(title)"
            color="inherit"
            variant="h5"
            sx={{ ...maxLine({ line: 2 }) }}
          >
            {title}
          </Link>

          <Typography variant="body2" sx={{ ...maxLine({ line: 5 }), color: 'text.secondary' }}>
            {quickSummary}
          </Typography>
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
              : `${CONFIG.site.basePath}/assets/images/default-meeting.png`
          }
          sx={{ height: 1, borderRadius: 1.5 }}
        />
      </Box>
    </Card>
  );
}
