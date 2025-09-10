
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const heroSlides = [
  PlaceHolderImages.find(p => p.id === 'ministry-men'),
  PlaceHolderImages.find(p => p.id === 'ministry-highlight'),
].filter(Boolean) as (typeof PlaceHolderImages)[0][];

export default function MensFellowshipHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0" ref={emblaRef}>
            <div className="flex h-full">
            {heroSlides.map((slide, index) => (
                <div
                className="relative flex-[0_0_100%] h-full transition-opacity duration-1000"
                key={slide.id}
                >
                <Image
                    src={slide.imageUrl}
                    alt={slide.description}
                    fill
                    className={cn(
                        "object-cover transition-opacity duration-1000",
                        selectedIndex === index ? "opacity-100" : "opacity-0"
                    )}
                    priority={index === 0}
                    data-ai-hint={slide.imageHint}
                />
                </div>
            ))}
            </div>
        </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-accent glow-gold-lg">
            Men’s Fellowship (CBF)
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Equipping men to lead in faith, family, and society.
        </p>
      </div>
    </section>
  );
}
