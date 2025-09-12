import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function ServicesHero() {
    const servicesHeroImage = PlaceHolderImages.find(p => p.id === 'services-hero');

    return (
        <section className="relative h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
            {servicesHeroImage && (
                 <Image
                    src={servicesHeroImage.imageUrl}
                    alt={servicesHeroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={servicesHeroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>
            <div className="relative z-10 px-4 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-white">
                    Worship With Us
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Join us every Sunday as we gather in God’s presence.
                </p>
            </div>
        </section>
    );
}
