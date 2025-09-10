import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "English Service",
        time: "9:00 AM – 10:30 AM",
        location: "Sanctuary",
        note: "Sunday School ongoing at same time",
    },
    {
        title: "Kiswahili Service",
        time: "10:40 AM – 12:00 PM",
        location: "Sanctuary",
        note: "Sunday School ongoing at same time",
    },
]

export default function ServiceTimes() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent mb-4">Service Times</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map(service => (
                 <Card key={service.title} className="bg-gray-800/50 border border-accent/20 backdrop-blur-sm group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                    <CardHeader>
                        <CardTitle className="text-accent text-2xl font-headline flex items-center gap-3">
                            {service.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-300">
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent" />
                            <span>{service.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span>{service.location}</span>
                        </div>
                        <p className="text-sm text-gray-400 pl-8">{service.note}</p>
                        <Button variant="outline" className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                            Add to Calendar
                        </Button>
                    </CardContent>
                 </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
