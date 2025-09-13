import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactMap() {
  return (
    <section className="py-20 bg-background">
        <div className="section-divider mb-20"></div>
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline text-primary mb-8">
                Find Us
            </h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-accent/30">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817294819702!2d35.28999961475853!3d-0.3725000998399583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829b5b6b1b726c3%3A0xe54308a3d538e12b!2sAIC%20Kimalel%20Primary%20School!5e0!3m2!1sen!2ske!4v1678886475142!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
                <Link href="https://maps.app.goo.gl/t2UotCaY79vicXJj9" target="_blank">Get Directions</Link>
            </Button>
        </div>
    </section>
  );
}
