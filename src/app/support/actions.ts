
'use server';

import { z } from 'zod';
// Here you would import your firebase admin config to write to firestore
// For now, we'll just log to the console

const donationFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  amount: z.coerce.number().min(1, { message: 'Please enter a valid amount.' }),
  message: z.string().optional(),
});

export async function handleDonationForm(prevState: any, formData: FormData) {
  const validatedFields = donationFormSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    amount: formData.get('amount'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'Invalid input.',
      success: false,
    };
  }
  
  // Here you would integrate with your Firebase Firestore and a payment gateway
  console.log(`New Donation from ${validatedFields.data.fullName}:`);
  console.log(`Email: ${validatedFields.data.email}`);
  console.log(`Amount: ${validatedFields.data.amount}`);
  console.log(`Message: ${validatedFields.data.message}`);

  return { message: `Thank you for your generous donation, ${validatedFields.data.fullName}! A confirmation has been sent to your email.`, success: true };
}
