import type { LabelColor, LabelProps } from 'src/components/Label';

// import { State } from 'src/__generated__/graphql';

import { State } from 'src/consts';

import { Label } from 'src/components/Label';

interface Props extends LabelProps {
  state: State;
}

export const StateLabel = ({ state, ref, ...rest }: Props) => {
  let color: LabelColor = 'info';
  let text = 'Draft';

  switch (state) {
    case State.Approved:
      color = 'success';
      text = 'Approved';
      break;
    case State.NeedApproval:
      color = 'warning';
      text = 'Need Approval';
      break;

    case State.NeedRevision:
      color = 'error';
      text = 'Need Revision';
      break;

    case State.Printed:
      color = 'primary';
      text = 'Printed';
      break;

    case State.Voided:
      color = 'default';
      text = 'Voided';
      break;
    default:
      break;
  }

  return (
    <Label color={color} {...rest}>
      {text}
    </Label>
  );
};
