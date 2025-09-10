'use server';

import { z } from 'zod';
// Here you would import your firebase admin config to write to firestore
// For now, we'll just log to the console

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(2, { message: 'Please enter a subject.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'Invalid input.',
      success: false,
    };
  }
  
  // Here you would integrate with your Firebase Firestore
  console.log(`New contact message from ${validatedFields.data.fullName}:`);
  console.log(`Email: ${validatedFields.data.email}`);
  console.log(`Subject: ${validatedFields.data.subject}`);
  console.log(`Message: ${validatedFields.data.message}`);

  return { message: `Thank you for your message, ${validatedFields.data.fullName}! We will get back to you soon.`, success: true };
}
