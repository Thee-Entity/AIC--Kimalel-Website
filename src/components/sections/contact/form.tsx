'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { handleContactForm } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Sending Message...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Contact Form",
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);
  
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-accent mb-4">
            Send Us a Message
        </h2>
        <form action={formAction} className="max-w-2xl mx-auto mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                name="fullName"
                placeholder="Full Name"
                required
                className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
            />
          </div>
          <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
            />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
          />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
