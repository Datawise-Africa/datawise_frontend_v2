import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

const contactUsSchema = z.object({
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
  subject: z
    .string({
      message: 'Subject must be a string',
      //   invalid_type_error: "Subject must be a string",
    })
    .min(2, 'Subject must be at least 2 characters long')
    .max(100, 'Subject must be at most 100 characters long'),
  message: z
    .string({
      message: 'Please enter your message',
      //   invalid_type_error: "Message is required",
    })
    .min(2, 'Message must be at least 2 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

export type ContactUsFormData = z.infer<typeof contactUsSchema>;
export const contactUsFormResolver = zodResolver(contactUsSchema);
