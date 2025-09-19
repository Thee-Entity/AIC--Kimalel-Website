
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WidowsHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'widows-hero');

  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-white">
            Widows Ministry
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
            "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress..." - James 1:27
        </p>
      </div>
    </section>
  );
}
