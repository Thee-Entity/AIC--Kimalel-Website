'use server';

import { z } from 'zod';
import { askAiAboutSermon } from '@/ai/flows/ai-sermon-assistant';

export async function handleSermonQuery(sermonTranscript: string, question: string) {
  if (!question) {
    return { success: false, error: 'Please enter a question.' };
  }
  if (!sermonTranscript) {
    return { success: false, error: 'Sermon transcript is not available.' };
  }

  try {
    const result = await askAiAboutSermon({ sermonTranscript, question });
    return { success: true, answer: result.answer };
  } catch (error) {
    console.error('Error querying AI about sermon:', error);
    return { success: false, error: 'Sorry, I encountered an error while processing your question. Please try again.' };
  }
}


const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export async function handleNewsletterSignup(prevState: any, formData: FormData) {
  const validatedFields = newsletterSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
    };
  }
  
  // Here you would integrate with your email service (e.g., SendGrid, Mailgun)
  console.log(`New newsletter signup: ${validatedFields.data.email}`);

  // For demonstration, we'll just return a success message.
  return { message: `Thank you for subscribing!` };
}
