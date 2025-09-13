
import { Card, CardContent } from "@/components/ui/card";
import { ministries } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function MinistriesGrid() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry) => {
            const ministryImage = PlaceHolderImages.find(p => p.id === ministry.imageId);
            return (
              <Link key={ministry.name} href={ministry.href}>
                <Card className="group overflow-hidden relative text-white text-center flex items-end justify-center h-80 transition-all duration-300 ease-in-out hover:shadow-2xl">
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
                      <div className="transition-transform duration-500 group-hover:-translate-y-4">
                          <ministry.icon className="w-10 h-10 mb-2 text-accent" />
                          <h3 className="text-xl font-bold font-headline">{ministry.name}</h3>
                      </div>
                      <div className="absolute bottom-4 px-4 w-full">
                        <div className="flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
