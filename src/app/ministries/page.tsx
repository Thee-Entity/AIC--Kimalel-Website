
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MinistriesHero from '@/components/sections/ministries-hero';
import MinistriesIntro from '@/components/sections/ministries-intro';
import MinistriesGrid from '@/components/sections/ministries-grid';
import MinistriesCta from '@/components/sections/ministries-cta';

export default function MinistriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <MinistriesHero />
        <MinistriesIntro />
        <MinistriesGrid />
        <MinistriesCta />
      </main>
      <Footer />
    </div>
  );
}
