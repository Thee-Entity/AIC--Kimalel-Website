'use server';
/**
 * @fileOverview An AI assistant for answering questions about a sermon.
 *
 * - askAiAboutSermon - A function that handles the question answering process.
 * - AskAiAboutSermonInput - The input type for the askAiAboutSermon function.
 * - AskAiAboutSermonOutput - The return type for the askAiAboutSermon function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiAboutSermonInputSchema = z.object({
  sermonTranscript: z
    .string()
    .describe('The transcript of the sermon to ask questions about.'),
  question: z.string().describe('The question to ask about the sermon.'),
});
export type AskAiAboutSermonInput = z.infer<typeof AskAiAboutSermonInputSchema>;

const AskAiAboutSermonOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the sermon.'),
});
export type AskAiAboutSermonOutput = z.infer<typeof AskAiAboutSermonOutputSchema>;

export async function askAiAboutSermon(input: AskAiAboutSermonInput): Promise<AskAiAboutSermonOutput> {
  return askAiAboutSermonFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAiAboutSermonPrompt',
  input: {schema: AskAiAboutSermonInputSchema},
  output: {schema: AskAiAboutSermonOutputSchema},
  prompt: `You are an AI assistant that answers questions about a sermon. Use the provided transcript to answer the question to the best of your ability. If the answer is not explicitly in the transcript, use your reasoning ability to answer the question.

Sermon Transcript:
{{{sermonTranscript}}}

Question:
{{{question}}}

Answer:`,
});

const askAiAboutSermonFlow = ai.defineFlow(
  {
    name: 'askAiAboutSermonFlow',
    inputSchema: AskAiAboutSermonInputSchema,
    outputSchema: AskAiAboutSermonOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

