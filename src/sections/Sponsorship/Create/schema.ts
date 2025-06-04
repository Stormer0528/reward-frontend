import { z as zod } from 'zod';

import { PlacementPosition } from 'src/__generated__/graphql';

export type SponsorshipCreateSchemaType = zod.infer<typeof SponsorshipCreateSchema>;

export const SponsorshipCreateSchema = zod.object({
  firstName: zod.string({ required_error: 'First Name is required' }),
  lastName: zod.string({ required_error: 'Last Name is required' }),
  uname: zod.string({ required_error: 'Username is required' }),
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address is provided' }),
  packageId: zod.string({ required_error: 'Package is required' }).min(1, 'Package is required'),
  primaryAddress: zod.string(),
  secondaryAddress: zod.string(),
  assetId: zod.string().optional().nullable(),
  city: zod.string(),
  mobile: zod.string(),
  zipCode: zod.string(),
  state: zod.string(),
  note: zod.string().optional().nullable(),
  placementParentId: zod.string().optional().nullable(),
  placementPosition: zod
    .enum([PlacementPosition.Left, PlacementPosition.Right, PlacementPosition.None])
    .optional(),
});
