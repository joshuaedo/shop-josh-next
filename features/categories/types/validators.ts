import { z } from 'zod';

const CategoryValidator = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  creatorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  shopId: z.string(),
});

export type CategoryType = z.infer<typeof CategoryValidator>;

export { CategoryValidator };
