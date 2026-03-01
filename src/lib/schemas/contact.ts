import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  interest: z.enum(
    ['free-trial', 'membership', 'personal-training', 'general-inquiry'],
    { message: 'Please select an area of interest' },
  ),
  message: z
    .string()
    .max(500, 'Message must be 500 characters or fewer')
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
