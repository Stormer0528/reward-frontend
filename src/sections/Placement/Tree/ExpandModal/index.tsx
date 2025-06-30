import type { UseBooleanReturn } from 'src/hooks/useBoolean';
import type { PlacementToBottomInput } from 'src/__generated__/graphql';

import { useState } from 'react';

import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControlLabel from '@mui/material/FormControlLabel';

import { PlacementPosition } from 'src/__generated__/graphql';

interface Props {
  id: string;
  open: UseBooleanReturn;
  onExpandBottom: (newData: PlacementToBottomInput) => void;
}

export default function ExpandModal({ id, open, onExpandBottom }: Props) {
  const [direction, setDirection] = useState<PlacementPosition>(PlacementPosition.Left);

  return (
    <Dialog open={open.value} onClose={open.onFalse} fullWidth maxWidth="xs">
      <DialogTitle>Expand</DialogTitle>
      <DialogContent>
        <RadioGroup
          row
          defaultValue="LEFT"
          onChange={(event) => setDirection(event.target.value as PlacementPosition)}
        >
          <FormControlLabel
            value="LEFT"
            label="Left"
            color="#00b8d9"
            control={<Radio size="medium" />}
          />
          <FormControlLabel value="RIGHT" label="Right" control={<Radio size="medium" />} />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onExpandBottom({ id, direction });
            open.onFalse();
          }}
        >
          Expand
        </Button>
      </DialogActions>
    </Dialog>
  );
}
