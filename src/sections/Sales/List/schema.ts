import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  packageId: zod.string({ required_error: 'Package is required' }),
});
