import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  description: zod.string().optional(),
  amountInCent: zod.number({ required_error: 'Amount is required' }).min(1),
});
