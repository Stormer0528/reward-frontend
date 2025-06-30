import { z as zod } from 'zod';

import { PlacementPosition } from 'src/__generated__/graphql';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  position: zod.enum([PlacementPosition.Left, PlacementPosition.Right, PlacementPosition.None]),
});
