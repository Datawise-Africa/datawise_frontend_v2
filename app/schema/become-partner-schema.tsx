import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const becomePartnerSchema = z.object({
  first_name: z
    .string({
      message: 'First name must be a string',
      //   invalid_type_error: "First name must be a string",
    })
    .min(2, 'First name must be at least 2 characters long')
    .max(100, 'First name must be at most 100 characters long'),
  last_name: z
    .string({
      message: 'Last name must be a string',
      //   invalid_type_error: "Last name must be a string",
    })
    .min(2, 'Last name must be at least 2 characters long')
    .max(100, 'Last name must be at most 100 characters long'),
  email: z.email({
    message: 'Invalid email address',
    // invalid_type_error: "Email must be a valid email address",
  }),

  phone_number: z
    .string({
      message: 'Phone number must be a string',
      //   invalid_type_error: "Phone number must be a string",
    })
    .min(10, 'Phone number must be at least 10 characters long')
    .max(15, 'Phone number must be at most 15 characters long'),
  job_title: z
    .string({
      message: 'Job title must be a string',
      //   invalid_type_error: "Job title must be a string",
    })
    .min(2, 'Job title must be at least 2 characters long')
    .max(100, 'Job title must be at most 100 characters long'),
  organization: z
    .string({
      message: 'Organization must be a string',
      //   invalid_type_error: "Organization must be a string",
    })
    .min(2, 'Organization must be at least 2 characters long')
    .max(100, 'Organization must be at most 100 characters long'),
  partnership_type: z
    .string({
      message: 'Partnership type must be a string',
      //   invalid_type_error: "Partnership type must be a string",
    })
    .min(2, 'Partnership type must be at least 2 characters long')
    .max(200, 'Partnership type must be at most 200 characters long'),
  message: z
    .string({
      message: 'Message must be a string',
      //   invalid_type_error: "Message must be a string",
    })
    .min(2, 'Message must be at least 2 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

export const becomePartnerResolver = zodResolver(becomePartnerSchema);
export type BecomePartnerFormData = z.infer<typeof becomePartnerSchema>;
