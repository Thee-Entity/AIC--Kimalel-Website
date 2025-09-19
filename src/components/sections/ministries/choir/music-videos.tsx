
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { musicVideos } from "@/lib/constants";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function MusicVideos() {
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">Choir Music Videos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicVideos.map((video, index) => {
            const image = PlaceHolderImages.find(p => p.id === video.imageId);
            if (!image) return null;
            return (
              <Link key={index} href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video group overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                    <Image
                    src={image.imageUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <PlayCircle className="w-16 h-16 text-accent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold text-lg">{video.title}</h3>
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
