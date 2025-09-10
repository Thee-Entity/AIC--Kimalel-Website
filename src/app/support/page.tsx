
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import DonationForm from "@/components/sections/support/donation-form";
import FundraisingCause from "@/components/sections/support/fundraising-cause";
import Gratitude from "@/components/sections/support/gratitude";
import Impact from "@/components/sections/support/impact";
import SupportHero from "@/components/sections/support/hero";
import WaysToGive from "@/components/sections/support/ways-to-give";

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <SupportHero />
        <FundraisingCause />
        <WaysToGive />
        <Impact />
        <Gratitude />
        <DonationForm />
      </main>
      <Footer />
    </div>
  );
}
