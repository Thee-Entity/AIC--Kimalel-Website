import { Button } from "@/components/ui/button";
import { TheeEntityLogo } from "../thee-entity-logo";
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="py-20 text-center">
       <div className="section-divider mb-12"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline mb-4 text-white">
          Be Part of Our Journey
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          We welcome you to join us as we worship, grow, and serve together.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:glow-gold"
          asChild
        >
          <Link href="/contact">Join Our Community</Link>
        </Button>
        <div className="flex justify-center items-center gap-2 mt-8">
            <span className="text-sm text-gray-400">Powered by</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <TheeEntityLogo />
            </a>
        </div>
      </div>
    </section>
  );
}
