
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { handleMinistrySignup } from '@/app/ministries/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

export default function MensFellowshipJoin() {
  const [state, formAction] = useActionState(handleMinistrySignup, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Men's Fellowship Signup",
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
            Every man has a place in God’s work. Join the Men’s Fellowship today.
        </h2>
        <form action={formAction} className="max-w-xl mx-auto mt-8 space-y-4">
          <input type="hidden" name="ministry" value="Men's Fellowship" />
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
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
