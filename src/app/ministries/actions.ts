'use server';

import { z } from 'zod';

const ministrySignupSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  ministry: z.string(),
});

export async function handleMinistrySignup(prevState: any, formData: FormData) {
  const validatedFields = ministrySignupSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    ministry: formData.get('ministry'),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const errorMessage = fieldErrors.fullName?.[0] || fieldErrors.email?.[0] || fieldErrors.phone?.[0] || 'Invalid input.';
    return {
      message: errorMessage,
      success: false,
    };
  }
  
  // Supabase logic removed for stability.
  console.log(`Ministry Signup submitted for ${validatedFields.data.ministry}:`);
  console.log(`- Name: ${validatedFields.data.fullName}`);
  console.log(`- Email: ${validatedFields.data.email}`);
  console.log(`- Phone: ${validatedFields.data.phone}`);


  return { message: `Thank you for your interest, ${validatedFields.data.fullName}! We will be in touch shortly.`, success: true };
}
