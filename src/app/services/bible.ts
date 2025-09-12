'use server';

import { z } from 'zod';

const scriptureSchema = z.object({
  reference: z.string(),
  verses: z.array(z.object({
    book_id: z.string(),
    book_name: z.string(),
    chapter: z.number(),
    verse: z.number(),
    text: z.string(),
  })),
  text: z.string(),
  translation_id: z.string(),
  translation_name: z.string(),
  translation_note: z.string(),
});

export type Scripture = z.infer<typeof scriptureSchema>;

/**
 * Fetches a scripture passage from the Bible API.
 * @param reference The Bible reference, e.g., "John 3:16" or "Romans 8:28-30".
 * @returns A promise that resolves to the scripture data or null if not found.
 */
export async function getScripture(reference: string): Promise<Scripture | null> {
  try {
    const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}`);
    if (!response.ok) {
      console.error('Failed to fetch scripture:', response.statusText);
      return null;
    }
    const data = await response.json();
    const validatedData = scriptureSchema.safeParse(data);

    if (!validatedData.success) {
        console.error('Invalid scripture data received:', validatedData.error);
        return null;
    }

    return validatedData.data;
  } catch (error) {
    console.error('Error fetching scripture:', error);
    return null;
  }
}
