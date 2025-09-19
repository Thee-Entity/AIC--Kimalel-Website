
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryImages = [
    'children-gallery-1',
    'children-gallery-2',
    'children-gallery-3',
    'children-gallery-4',
    'children-gallery-5',
    'children-gallery-6',
]

export default function ChildrenGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Fun Moments</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((id, index) => {
            const image = PlaceHolderImages.find(p => p.id === id);
            if (!image) return null;
            return (
              <div key={index} className="relative aspect-square group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <p className="text-white text-center text-sm font-bold drop-shadow-md">{image.description}</p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
