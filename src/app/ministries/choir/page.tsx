
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ChoirAbout from "@/components/sections/ministries/choir/about";
import ChoirHero from "@/components/sections/ministries/choir/hero";
import ChoirJoin from "@/components/sections/ministries/choir/join";
import ChoirLeadership from "@/components/sections/ministries/choir/leadership";
import MusicVideos from "@/components/sections/ministries/choir/music-videos";

export default function ChoirPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <ChoirHero />
        <ChoirAbout />
        <MusicVideos />
        <ChoirLeadership />
        <ChoirJoin />
      </main>
      <Footer />
    </div>
  );
}
