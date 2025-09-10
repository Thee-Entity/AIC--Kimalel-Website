import { coreValues } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function CoreValues() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {coreValues.map((value) => (
            <Card key={value.title} className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-full">
                        <value.icon className="h-10 w-10 text-accent" />
                    </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-accent mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
