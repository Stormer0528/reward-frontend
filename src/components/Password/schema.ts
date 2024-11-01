import { z as zod } from 'zod';

export type SchemType = zod.infer<typeof Schema>;

export const Schema = zod
  .object({
    oldPassword: zod
      .string()
      .min(1, { message: 'Current password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    newPassword: zod
      .string()
      .min(1, { message: 'New password is required!' })
      .min(6, { message: 'Password must be at least 6 characters!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm Password is required!' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  });
