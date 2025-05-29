import { z as zod } from 'zod';

export function zodAlwaysRefine<T extends zod.ZodTypeAny>(zodType: T) {
  return zod.any().superRefine(async (value, ctx) => {
    const res = await zodType.safeParseAsync(value);
    if (res.success === false)
      res.error.issues.forEach((issue) => {
        ctx.addIssue(issue);
      });
  }) as unknown as T;
}
