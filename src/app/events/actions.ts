
'use server';

import { z } from 'zod';
// Here you would import your firebase admin config to write to firestore
// For now, we'll just log to the console

const eventRsvpSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  event: z.string(),
});

export async function handleEventRsvp(prevState: any, formData: FormData) {
  const validatedFields = eventRsvpSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    event: formData.get('event'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.fullName?.[0] || validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
      success: false,
    };
  }
  
  // Here you would integrate with your Firebase Firestore
  console.log(`New RSVP for ${validatedFields.data.event}:`);
  console.log(`Name: ${validatedFields.data.fullName}`);
  console.log(`Email: ${validatedFields.data.email}`);

  // For demonstration, we'll just return a success message.
  return { message: `Thank you for your RSVP, ${validatedFields.data.fullName}! We look forward to seeing you.`, success: true };
}
