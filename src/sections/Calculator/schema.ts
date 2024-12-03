import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  init: zod.number({ required_error: 'Init TXC is required' }).default(0),
  joinDate: zod.string({ required_error: 'Joined date is required' }),
  target: zod.number({ required_error: 'Target is required' }),
});
