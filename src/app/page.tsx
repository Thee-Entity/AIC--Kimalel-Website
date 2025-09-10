import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import QuickInfo from '@/components/sections/quick-info';
import FeaturedSermon from '@/components/sections/featured-sermon';
import UpcomingEvents from '@/components/sections/upcoming-events';
import Ministries from '@/components/sections/ministries';
import CallToGive from '@/components/sections/call-to-give';
import Testimonies from '@/components/sections/testimonies';
import NewsletterSignup from '@/components/sections/newsletter-signup';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickInfo />
        <FeaturedSermon />
        <UpcomingEvents />
        <Ministries />
        <CallToGive />
        <Testimonies />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
