import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesCta() {
  return (
    <section className="py-20 text-center">
       <div className="section-divider mb-12"></div>
      <div className="container mx-auto px-4">
        <blockquote className="max-w-2xl mx-auto text-xl italic text-gray-300 mb-8">
            “Faith comes by hearing, and hearing by the Word of God.”
            <cite className="block not-italic text-base text-accent mt-2">Romans 10:17</cite>
        </blockquote>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:glow-gold"
          asChild
        >
          <Link href="/#contact">Join Us This Sunday</Link>
        </Button>
      </div>
    </section>
  );
}
