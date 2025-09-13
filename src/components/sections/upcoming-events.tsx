

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string; 
  image_url: string;
};

export default async function UpcomingEvents() {
  const supabase = createClient();

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  if (error) {
    console.error('Error fetching events:', error);
    return (
        <section id="events" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">What’s Happening at Kimalel</h2>
                <p className="text-muted-foreground">Could not load upcoming events at this time. Please check back later.</p>
            </div>
        </section>
    );
  }
  
  if (!events || events.length === 0) {
      return (
        <section id="events" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">What’s Happening at Kimalel</h2>
                <p className="text-muted-foreground">No upcoming events scheduled at the moment. Please check back soon!</p>
            </div>
        </section>
    );
  }

  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">What’s Happening at Kimalel</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Join us for fellowship, growth, and community events.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {events.map((event) => {
              const eventDate = new Date(event.date);
              return (
                <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={event.image_url}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full h-16 w-16 flex flex-col items-center justify-center font-bold text-center leading-tight shadow-lg">
                          <span className="text-xs">{eventDate.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                          <span className="text-2xl">{eventDate.getDate()}</span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold font-headline text-xl text-primary mb-2 h-14">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 h-20 overflow-hidden">{event.description}</p>
                        <Button variant="link" asChild className="p-0 text-accent hover:text-accent/80">
                            <Link href="#">Learn More &rarr;</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
