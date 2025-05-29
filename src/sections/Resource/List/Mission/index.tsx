import type { RESOURCE_TYPE } from 'src/types';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RESOURCE_CONTENT } from 'src/consts';

import DarkLogo from 'src/components/Logo/dark-logo';

export default function Mission() {
  return (
    <Paper sx={{ background: '#f4f4f4', p: 4, borderRadius: 0 }}>
      <Container>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          <DarkLogo />
          <Typography variant="h2">Mission Control Manual</Typography>
        </Stack>
        <Stack sx={{ mb: 4 }}>
          {RESOURCE_CONTENT.map((item: RESOURCE_TYPE) => (
            <>
              <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
                {item.header}
              </Typography>

              {item.description.map((des) => (
                <Typography sx={{ mb: 1 }}>{des}</Typography>
              ))}

              {item?.child?.map((ch) => (
                <>
                  <Typography variant="h6" color="GrayText" sx={{ mt: 2, mb: 1 }}>
                    {ch.title}
                  </Typography>
                  {ch.content.map((ct) => (
                    <Typography sx={{ mb: 1 }}>{ct}</Typography>
                  ))}
                </>
              ))}

              {item?.footer?.map((ft) => <Typography>{ft}</Typography>)}
            </>
          ))}
        </Stack>
        <Stack>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Future Sections & Content Ideas:
          </Typography>
          <Typography variant="h6">
            How rewards and commissions work, when are payments made.
          </Typography>
          <Typography variant="h6">
            Opportunities for growth and leadership within the mission.
          </Typography>
          <Typography variant="h6">What the future holds for TXC.</Typography>
          <Typography variant="h6">
            Stories from experienced miners and community leaders.
          </Typography>
          <Typography variant="h6">Glossary of terms.</Typography>
          <Typography variant="h6">FAQ section for quick answers.</Typography>
          <Typography variant="h6">Links to additional resources.</Typography>
        </Stack>
      </Container>
    </Paper>
  );
}
