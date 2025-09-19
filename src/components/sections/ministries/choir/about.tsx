
import { Music, Handshake, Users } from "lucide-react";

export default function ChoirAbout() {
    const pillars = [
        { name: "Worship", icon: Music },
        { name: "Excellence", icon: Users },
        { name: "Fellowship", icon: Handshake },
    ];
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-headline text-white mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
          “To lead the congregation into God’s presence through anointed music and authentic worship, creating an atmosphere where hearts are open to the Holy Spirit.”
        </p>
        <div className="section-divider my-12"></div>
        <h3 className="text-2xl font-bold font-headline text-white mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.name} className="flex flex-col items-center">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <pillar.icon className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-white">{pillar.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
