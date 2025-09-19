
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const team = [
    {
        name: "Teacher Sarah",
        role: "Lead Teacher",
        imageId: "children-teacher-1"
    },
    {
        name: "Teacher David",
        role: "Assistant Teacher",
        imageId: "children-teacher-2"
    }
];

export default function ChildrenTeam() {
  return (
    <section className="py-20 bg-highlight">
       <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary relative inline-block">
            Meet Our Team
          </h2>
           <p className="max-w-2xl mx-auto text-muted-foreground">Our dedicated volunteers are passionate about teaching kids about Jesus!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Card key={member.name} className="bg-card border-none text-center group overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  {memberImage && (
                    <div className="relative h-40 w-40 mx-auto mb-4">
                      <Image
                        src={memberImage.imageUrl}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="rounded-full object-cover border-4 border-accent/50"
                        data-ai-hint={memberImage.imageHint}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-headline text-accent">{member.name}</h3>
                  <p className="text-muted-foreground mb-2">{member.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
