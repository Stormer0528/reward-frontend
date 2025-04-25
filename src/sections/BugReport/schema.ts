import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  who: zod.string().min(1, 'Name is required'),
  contact: zod.string().min(1, 'Contact is required'),
  subject: zod.string().min(1, 'Subject is required'),
  description: zod.string().min(1, 'Description is required'),
});
