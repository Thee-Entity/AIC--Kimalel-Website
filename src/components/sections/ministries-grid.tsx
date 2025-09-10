
import { Card, CardContent } from "@/components/ui/card";
import { ministries } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MinistriesGrid() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <Link key={ministry.name} href={ministry.href} className="group">
              <Card className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-center p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col items-center flex-1">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <ministry.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-headline text-accent mb-2">{ministry.name}</h3>
                  <p className="text-gray-300 flex-1">{ministry.description}</p>
                  <div className="mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
