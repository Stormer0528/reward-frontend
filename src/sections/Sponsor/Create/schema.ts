import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  firstName: zod.string({ required_error: 'First Name is required' }),
  lastName: zod.string({ required_error: 'Last Name is required' }),
  uname: zod.string({ required_error: 'Username is required' }),
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address is provided' }),
  primaryAddress: zod.string(),
  secondaryAddress: zod.string(),
  assetId: zod.string().optional().nullable(),
  city: zod.string(),
  mobile: zod.string(),
  zipCode: zod.string(),
  state: zod.string(),
  note: zod.string().optional().nullable(),
});
