import { z as zod } from 'zod';

export type SchemaType = zod.infer<typeof Schema>;

export const Schema = zod.object({
  username: zod.string({ required_error: 'Username is required' }),
  fullName: zod.string(),
  email: zod
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address is provided' }),
  mobile: zod.string({ required_error: 'Mobile is required' }),
  city: zod.string().optional().nullable(),
  zipCode: zod.string().optional().nullable(),
  state: zod.string().optional().nullable(),
  primaryAddress: zod.string({ required_error: 'Address is required' }),
  teamStrategy: zod.string({ required_error: 'Team Strategy is required' }),
  commissionDefault: zod.string({ required_error: 'Commission Default is required' }),
  secondaryAddress: zod.string().optional().nullable(),
  sponsorId: zod.string().optional().nullable(),
  assetId: zod.string().optional().nullable(),
  ethAssetId: zod.string().optional().nullable(),
  preferredContact: zod.string().optional().nullable(),
  preferredContactDetail: zod.string().optional().nullable(),
  syncWithSendy: zod.boolean(),
  txcWallets: zod.array(
    zod.object({
      payoutId: zod.string({ required_error: 'Payout is required' }),
      address: zod.string({ required_error: 'Address is required' }),
      note: zod.string().optional().nullable(),
      percent: zod.number({ required_error: 'Percent is required' }),
      isDefault: zod.boolean(),
    })
  ),
  otherWallets: zod.array(
    zod.object({
      payoutId: zod.string(),
      address: zod.string().regex(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid Ethereum address' }),
      note: zod.string().optional().nullable(),
      percent: zod.number().default(0),
      isDefault: zod.boolean().default(false),
    })
  ),
});
