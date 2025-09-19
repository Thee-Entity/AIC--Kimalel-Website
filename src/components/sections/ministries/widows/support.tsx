
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WidowsSupport() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-white mb-4">
            Support Our Widows
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            You can make a difference through prayer, visiting, or financial support. Please contact the church office to learn how you can get involved.
        </p>
        <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
            <Link href="/contact">Contact Us to Help</Link>
        </Button>
      </div>
    </section>
  );
}
