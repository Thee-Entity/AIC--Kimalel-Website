
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const ministrySignupSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  ministry: z.string(),
});

export async function handleMinistrySignup(prevState: any, formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

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
  
  const { error } = await supabase.from('ministry_signups').insert([
    { 
      full_name: validatedFields.data.fullName,
      email: validatedFields.data.email,
      phone: validatedFields.data.phone,
      ministry: validatedFields.data.ministry,
    },
  ]);

  if (error) {
    console.error('Error inserting ministry signup:', error);
    return {
      message: 'There was an error submitting your request. Please try again.',
      success: false,
    };
  }

  return { message: `Thank you for your interest, ${validatedFields.data.fullName}! We will be in touch shortly.`, success: true };
}
