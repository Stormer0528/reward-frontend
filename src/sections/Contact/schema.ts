import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  name: zod.string({ required_error: 'Name is required' }),
  email: zod.string({ required_error: 'Email is Required' }),
  message: zod.string(),
});
