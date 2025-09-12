

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ministries } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Ministries() {
  // Take only the first 5 for the homepage preview
  const previewMinistries = ministries.slice(0, 5);

  return (
    <section id="ministries" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">Explore Our Ministries</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Find your place and get involved in a community that fits you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {previewMinistries.map((ministry) => {
            const ministryImage = PlaceHolderImages.find(p => p.id === ministry.imageId);
            return (
              <Card key={ministry.name} className="group overflow-hidden relative text-white text-center flex items-end justify-center h-80 transition-all duration-300 ease-in-out hover:shadow-2xl">
                {ministryImage && (
                  <Image
                    src={ministryImage.imageUrl}
                    alt={ministry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={ministryImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="relative p-4 flex flex-col items-center justify-end h-full w-full">
                    <div className="transition-transform duration-500 group-hover:-translate-y-8">
                        <ministry.icon className="w-10 h-10 mb-2 text-accent" />
                        <h3 className="text-xl font-bold font-headline">{ministry.name}</h3>
                    </div>
                    <div className="absolute bottom-4 px-4 w-full">
                        <p className="text-sm h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100">
                        {ministry.description}
                        </p>
                    </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/ministries">
                    Explore All Ministries
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
