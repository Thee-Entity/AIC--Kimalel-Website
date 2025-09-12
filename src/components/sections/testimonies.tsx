import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonies } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Testimonies() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-no-repeat bg-center opacity-5"></div>
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">Stories of Faith</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear how God is moving in the lives of our church family.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonies.map((testimonial, index) => {
              const testimonyImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        {testimonyImage && (
                          <Avatar className="h-24 w-24 mb-4 border-4 border-accent">
                            <AvatarImage src={testimonyImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonyImage.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                        <h3 className="font-bold text-lg font-headline">{testimonial.name}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
