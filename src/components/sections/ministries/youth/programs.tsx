import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Mic, Gamepad2 } from "lucide-react";

export default function YouthFellowshipPrograms() {
  const programs = [
    { title: "Weekly Bible Studies", icon: BookOpen },
    { title: "Worship Nights", icon: Mic },
    { title: "Sports & Game Days", icon: Gamepad2 },
    { title: "Mentorship Programs", icon: Users },
  ];

  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">Programs & Activities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-center p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <program.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-white">{program.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
