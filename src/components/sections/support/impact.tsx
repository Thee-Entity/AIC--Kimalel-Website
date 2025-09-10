
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Mic, Armchair, Globe } from "lucide-react";

const impactItems = [
    { icon: Zap, text: "Improved church lighting & electrical upgrades." },
    { icon: Mic, text: "Better sound equipment for worship." },
    { icon: Armchair, text: "Comfortable seating and renovation of church space." },
    { icon: Globe, text: "Support for community outreach." },
]

export default function Impact() {
  return (
    <section className="py-20 bg-gray-900">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent mb-4">Impact of Your Giving</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactItems.map(item => (
                    <Card key={item.text} className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-center p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                        <CardContent className="p-0">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                                    <item.icon className="h-10 w-10 text-accent" />
                                </div>
                            </div>
                            <p className="text-white">{item.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
