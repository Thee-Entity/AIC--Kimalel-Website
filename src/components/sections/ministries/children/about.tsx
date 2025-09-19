
import { Sparkle, Heart, Shield } from "lucide-react";

export default function ChildrenAbout() {
    const values = [
        { name: "Fun Learning", icon: Sparkle, description: "We make learning about God's Word exciting and memorable." },
        { name: "Loving Community", icon: Heart, description: "Every child is welcomed, loved, and valued." },
        { name: "Safe Environment", icon: Shield, description: "Your child's safety is our top priority." },
    ];
  return (
    <section className="py-20 bg-highlight">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-headline text-primary mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground mb-12">
          To partner with parents in nurturing a lifelong faith in Jesus Christ in the hearts of our children.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.name} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <value.icon className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">{value.name}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
