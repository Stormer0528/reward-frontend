import type { MotionProps } from 'framer-motion';
import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

type TextProps = {
  sx?: SxProps<Theme>;
  title: React.ReactNode;
  variants?: MotionProps['variants'];
};

type Props = StackProps & {
  txtGradient?: string;
  title: React.ReactNode;
  caption?: React.ReactNode;
  description?: React.ReactNode;
  slotProps?: {
    title?: Omit<TextProps, 'title'>;
    caption?: Omit<TextProps, 'title'>;
    description?: Omit<TextProps, 'title'>;
  };
};

export function SectionContent({
  title,
  caption,
  slotProps,
  txtGradient,
  description,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Stack spacing={3} {...other}>
      <Typography
        component={m.h2}
        variant="h2"
        variants={slotProps?.title?.variants ?? varFade({ distance: 24 }).inUp}
        sx={slotProps?.title?.sx}
        textAlign="center"
      >
        {title}
        <Box
          component="span"
          sx={{
            opacity: 0.4,
            display: 'inline-block',
            ...theme.mixins.textGradient(
              `to right, ${theme.vars.palette.text.primary}, ${varAlpha(theme.vars.palette.text.primaryChannel, 0.5)}`
            ),
          }}
        >
          {txtGradient}
        </Box>
      </Typography>

      {description && <Box justifyContent="center">{description}</Box>}
    </Stack>
  );
}
