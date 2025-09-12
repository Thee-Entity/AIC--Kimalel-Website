import EventsHero from '@/components/sections/events/hero';
import UpcomingEventsList from '@/components/sections/events/upcoming-events-list';
import PastEvents from '@/components/sections/events/past-events';
import EventRsvp from '@/components/sections/events/rsvp';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <EventsHero />
        <UpcomingEventsList />
        <PastEvents />
        <EventRsvp />
      </main>
      <Footer />
    </div>
  );
}
