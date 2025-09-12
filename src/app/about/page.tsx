import AboutCta from '@/components/sections/about-cta';
import AboutHero from '@/components/sections/about-hero';
import CoreValues from '@/components/sections/core-values';
import Leadership from '@/components/sections/leadership';
import MissionVision from '@/components/sections/mission-vision';
import OurHistory from '@/components/sections/our-history';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main>
            <AboutHero />
            <OurHistory />
            <MissionVision />
            <CoreValues />
            <Leadership />
            <AboutCta />
        </main>
        <Footer />
    </div>
  );
}
