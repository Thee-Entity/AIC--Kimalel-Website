
'use server';

import { z } from 'zod';
// Here you would import your firebase admin config to write to firestore
// For now, we'll just log to the console

const ministrySignupSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  ministry: z.string(),
});

export async function handleMinistrySignup(prevState: any, formData: FormData) {
  const validatedFields = ministrySignupSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    ministry: formData.get('ministry'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.fullName?.[0] || validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
      success: false,
    };
  }
  
  // Here you would integrate with your Firebase Firestore
  console.log(`New signup for ${validatedFields.data.ministry}:`);
  console.log(`Name: ${validatedFields.data.fullName}`);
  console.log(`Email: ${validatedFields.data.email}`);

  // For demonstration, we'll just return a success message.
  return { message: `Thank you for your interest, ${validatedFields.data.fullName}! We will be in touch shortly.`, success: true };
}
