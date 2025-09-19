
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Mic, Palette, Gamepad2 } from "lucide-react";

export default function ChildrenPrograms() {
  const programs = [
    { title: "Engaging Bible Stories", icon: BookOpen },
    { title: "Worship & Music Time", icon: Mic },
    { title: "Creative Arts & Crafts", icon: Palette },
    { title: "Fun Games & Activities", icon: Gamepad2 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">What We Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="bg-card border-accent/20 text-center p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <program.icon className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-primary h-12">{program.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
