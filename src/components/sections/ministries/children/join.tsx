
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { handleMinistrySignup } from '@/app/ministries/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
      {pending ? 'Submitting...' : 'Register Your Child'}
    </Button>
  );
}

export default function ChildrenJoin() {
  const [state, formAction] = useActionState(handleMinistrySignup, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Children's Ministry Signup",
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);
  
  return (
    <section className="py-20 bg-highlight">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            Join the Fun!
        </h2>
         <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Register your child for our Sunday School program. We can't wait to welcome them!
        </p>
        <form action={formAction} className="max-w-2xl mx-auto mt-8 space-y-4">
          <input type="hidden" name="ministry" value="Children's Ministry" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                name="fullName"
                placeholder="Parent's Full Name"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
            <Input
                type="email"
                name="email"
                placeholder="Parent's Email"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Input
                name="childName"
                placeholder="Child's Full Name"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
            <Input
                type="number"
                name="childAge"
                placeholder="Child's Age"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
           </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
