
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { leadership } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Gratitude() {
    const leader = leadership.find(l => l.name.includes("Elius"));
    const leaderImage = PlaceHolderImages.find(p => p.id === leader?.imageId);

  return (
    <section className="py-20 bg-secondary">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto px-4 text-center">
            {leader && leaderImage && (
                 <Avatar className="h-24 w-24 mb-4 border-4 border-accent mx-auto">
                    <AvatarImage src={leaderImage.imageUrl} alt={leader.name} data-ai-hint={leaderImage.imageHint} />
                    <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                </Avatar>
            )}
           
            <blockquote className="max-w-2xl mx-auto text-xl italic text-muted-foreground mb-4">
                “Every contribution, no matter how small, is a seed sown into God’s kingdom. Thank you for partnering with us.”
            </blockquote>
            <cite className="block not-italic text-base text-accent mt-2">
                {leader?.name}
            </cite>
        </div>
    </section>
  );
}
