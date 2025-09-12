import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { leadership } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const womenLeadership = leadership.filter(l => l.name.includes("Moureen"));

export default function WomensFellowshipLeadership() {
  return (
    <section className="py-20 bg-gray-900">
       <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-white relative inline-block">
            Fellowship Leadership
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full glow-gold"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {womenLeadership.map((leader) => {
            const leaderImage = PlaceHolderImages.find(p => p.id === leader.imageId);
            return (
              <Card key={leader.name} className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                <CardContent className="p-6">
                  {leaderImage && (
                    <div className="relative h-40 w-40 mx-auto mb-4">
                      <Image
                        src={leaderImage.imageUrl}
                        alt={leader.name}
                        width={160}
                        height={160}
                        className="rounded-full object-cover border-4 border-transparent group-hover:border-accent transition-colors duration-300"
                        data-ai-hint={leaderImage.imageHint}
                      />
                       <div className="absolute inset-0 rounded-full border-4 border-accent/50 opacity-0 group-hover:opacity-100 group-hover:glow-gold transition-opacity duration-300"></div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-headline text-accent">{leader.name}</h3>
                  <p className="text-gray-400 mb-2">{leader.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
