'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 animate-fade-in-down">
          Welcome to AIC Kimalel Saramek Church
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Rooted in Christ, Growing in Faith, Serving the World
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:glow-gold"
            asChild
          >
            <Link href="#watch-live">Watch Live</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#new">I'm New</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up, .animate-fade-in-down {
          opacity: 0; 
        }
      `}</style>
    </section>
  );
}
