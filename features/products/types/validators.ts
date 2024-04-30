import { z } from 'zod';

const ProductValidator = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  price: z.number(),
  description: z.string(),
  categorySlug: z.string(),
  creatorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isFeatured: z.boolean(),
  isArchived: z.boolean(),
  shopId: z.string(),
});

export type ProductType = z.infer<typeof ProductValidator>;

export { ProductValidator };
