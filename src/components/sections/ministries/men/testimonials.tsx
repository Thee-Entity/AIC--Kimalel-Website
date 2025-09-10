
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonies } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const menTestimonies = testimonies.filter(t => t.name.includes("David") || t.name.includes("Samuel"));

export default function MensFellowshipTestimonials() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent mb-4">Impact Stories</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {menTestimonies.map((testimonial, index) => {
              const testimonyImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-gray-800/50 border-accent/20 text-white">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        {testimonyImage && (
                          <Avatar className="h-24 w-24 mb-4 border-4 border-accent">
                            <AvatarImage src={testimonyImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonyImage.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                        <h3 className="font-bold text-lg font-headline text-accent">{testimonial.name}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2 text-white bg-gray-800/80 hover:bg-accent" />
          <CarouselNext className="absolute right-0 translate-x-1/2 text-white bg-gray-800/80 hover:bg-accent" />
        </Carousel>
      </div>
    </section>
  );
}
