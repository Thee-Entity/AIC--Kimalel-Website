import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { featuredSermon, upcomingEvents } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const sermonArchive = [
    {
        ...featuredSermon,
        date: new Date(2023, 9, 29),
    },
    {
        title: "Living a Life of Purpose",
        speaker: "Pastor Moureen Kosgei",
        date: new Date(2023, 9, 22),
        summary: "Discover God's unique purpose for your life and how to walk in it daily.",
        imageId: "sermon-thumbnail"
    },
    {
        title: "The Heart of a Servant",
        speaker: "Pastor Jophet Lagat",
        date: new Date(2023, 9, 15),
        summary: "Learn about the importance of a servant's heart in the kingdom of God.",
        imageId: "event-3"
    }
]


export default function LatestSermons() {
  return (
    <section className="py-20 bg-secondary">
        <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Latest Sermons</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Be blessed by the Word of God, shared with passion and conviction.
          </p>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center">
            <Input placeholder="Search sermons..." className="max-w-sm bg-card border-gray-700 text-foreground focus:ring-accent" />
            <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-card border-gray-700 text-foreground focus:ring-accent">
                    <SelectValue placeholder="Filter by Pastor" />
                </SelectTrigger>
                <SelectContent className="bg-card text-foreground border-gray-700">
                    <SelectItem value="ngetich">Rev. Elius Ngetich</SelectItem>
                    <SelectItem value="moureen">Pst. Moureen Kosgei</SelectItem>
                    <SelectItem value="jophet">Pst. Jophet Lagat</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full md:w-[180px] bg-card border-gray-700 text-foreground focus:ring-accent">
                    <SelectValue placeholder="Filter by Theme" />
                </SelectTrigger>
                <SelectContent className="bg-card text-foreground border-gray-700">
                    <SelectItem value="faith">Faith</SelectItem>
                    <SelectItem value="forgiveness">Forgiveness</SelectItem>
                    <SelectItem value="purpose">Purpose</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermonArchive.map((sermon, index) => {
            const sermonImage = PlaceHolderImages.find(p => p.id === sermon.imageId);
            return (
              <Card key={index} className="overflow-hidden group bg-card border-accent/20 border backdrop-blur-sm text-foreground transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                <div className="relative aspect-[16/9]">
                  {sermonImage && (
                    <Image
                      src={sermonImage.imageUrl}
                      alt={sermon.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={sermonImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-16 h-16 text-accent" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold font-headline text-xl text-accent mb-2 h-14">{sermon.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sermon.speaker} &bull; {sermon.date.toLocaleDateString()}</p>
                  <p className="text-foreground text-sm mb-4 h-20 overflow-hidden">{sermon.summary}</p>
                  <Button variant="link" asChild className="p-0 text-accent hover:text-accent/80">
                      <Link href="#">Watch Now &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
