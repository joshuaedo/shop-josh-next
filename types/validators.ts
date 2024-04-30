import { z } from 'zod';

const AccountValidator = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  expires_at: z.number().optional(),
  token_type: z.string().optional(),
  scope: z.string().optional(),
  id_token: z.string().optional(),
  session_state: z.string().optional(),
});

const SessionValidator = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
});

const UserValidator = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  username: z.string().optional(),
  image: z.string().optional(),
  birthday: z.string().optional(),
  password: z.string().optional(),
  signUpDate: z.date(),
  updatedDate: z.date(),
});

const ShopValidator = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  slug: z.string().optional(),
  creatorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ImageValidator = z.object({
  id: z.string(),
  url: z.string(),
  productId: z.string().optional(),
  categorySlug: z.string(),
  creatorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const OrderValidator = z.object({
  id: z.string(),
  shopId: z.string(),
  isPaid: z.boolean(),
  phone: z.string(),
  address: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const OrderItemValidator = z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
});

export type AccountType = z.infer<typeof AccountValidator>;
export type SessionType = z.infer<typeof SessionValidator>;
export type UserType = z.infer<typeof UserValidator>;
export type ShopType = z.infer<typeof ShopValidator>;
export type ImageType = z.infer<typeof ImageValidator>;
export type OrderType = z.infer<typeof OrderValidator>;
export type OrderItemType = z.infer<typeof OrderItemValidator>;

export {
  AccountValidator,
  SessionValidator,
  UserValidator,
  ShopValidator,
  ImageValidator,
  OrderValidator,
  OrderItemValidator,
};
