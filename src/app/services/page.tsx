import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServicesHero from '@/components/sections/services-hero';
import ServiceTimes from '@/components/sections/service-times';
import LatestSermons from '@/components/sections/latest-sermons';
import ServicesCta from '@/components/sections/services-cta';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <ServicesHero />
        <ServiceTimes />
        <LatestSermons />
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}
