
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const sermonSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  preacher: z.string().min(1, 'Preacher is required.'),
  date: z.date(),
  description: z.string().optional(),
  tags: z.string().optional(),
  type: z.enum(['Video', 'Audio', 'Text']),
  published: z.boolean(),
});

export async function addSermon(prevState: any, formData: FormData) {
  const supabase = createClient();
  
  const rawTags = formData.get('tags') as string;

  const validatedFields = sermonSchema.safeParse({
    title: formData.get('title'),
    preacher: formData.get('preacher'),
    date: new Date(formData.get('date') as string),
    description: formData.get('description'),
    tags: rawTags,
    type: formData.get('type'),
    published: formData.get('published') === 'on',
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'Invalid sermon data.',
      success: false,
    };
  }
  
  const { title, preacher, date, description, tags, type, published } = validatedFields.data;

  const { error } = await supabase.from('sermons').insert({
    title,
    preacher,
    date: date.toISOString(),
    description,
    tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
    type,
    published,
  });

  if (error) {
    console.error('Supabase error:', error.message);
    return {
      message: 'Failed to add sermon. Please try again.',
      success: false,
    };
  }

  revalidatePath('/admin/sermons');
  return { message: 'Sermon added successfully!', success: true };
}
