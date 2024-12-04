import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod
  .object({
    firstName: zod.string({ required_error: 'First Name is required' }),
    lastName: zod.string({ required_error: 'Last Name is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address is provided' }),
    mobile: zod.string(),
    city: zod.string(),
    zipCode: zod.string(),
    state: zod.string(),
    primaryAddress: zod.string(),
    packageId: zod.string(),
    sponsorUserId: zod.string(),
    secondaryAddress: zod.string(),
    paymentMethod: zod.string(),
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm Password is required!' }),
    assetId: zod.string().optional().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });
