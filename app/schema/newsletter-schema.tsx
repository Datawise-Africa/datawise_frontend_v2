import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newsletterSchema = z.object({
  full_name: z
    .string({ message: 'Full name is required' })
    .min(2, 'Full name must be at least 2 characters long')
    .max(100, 'Full name must be at most 100 characters long'),
  email: z.email({ message: 'Invalid email address' }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export const newsletterFormResolver = zodResolver(newsletterSchema);
