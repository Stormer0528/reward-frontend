import { z as zod } from 'zod';

import { MOBILE_REGEXP, PASSWORD_REGEXP } from 'src/consts';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod
  .object({
    city: zod.string().optional(),
    note: zod.string().optional(),
    state: zod.string().optional(),
    assetId: zod.string().optional(),
    zipCode: zod.string().optional(),
    country: zod.string().optional(),
    sponsorUserId: zod.string().optional(),
    secondaryAddress: zod.string().optional(),
    uname: zod.string({ required_error: 'Username is required' }),
    packageId: zod.string({ required_error: 'Package is required' }),
    lastName: zod.string({ required_error: 'Last Name is required' }),
    firstName: zod.string({ required_error: 'First Name is required' }),
    paymentMethod: zod.string({ required_error: 'Payment Method is required' }),
    primaryAddress: zod.string({ required_error: 'Primary Address is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address is provided' }),
    mobile: zod
      .string({ required_error: 'Mobile is required' })
      .regex(MOBILE_REGEXP, { message: 'Invalid mobile number format' }),
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(8, { message: 'Password must be at least 8 characters!' })
      .regex(PASSWORD_REGEXP, {
        message:
          'Password must include uppercase, lowercase, number, and special character! Available special characters: ! @ # $ % ^ & * ( ) _ + [ ] { } | ; : , . < > ?',
      }),
    confirmPassword: zod.string().min(1, { message: 'Confirm Password is required!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });
