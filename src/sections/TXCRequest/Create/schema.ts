import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  amount: zod.number({ required_error: 'Amount is required' }).min(1),
});
