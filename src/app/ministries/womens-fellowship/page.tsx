
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import WomensFellowshipAbout from "@/components/sections/ministries/women/about";
import WomensFellowshipGallery from "@/components/sections/ministries/women/gallery";
import WomensFellowshipHero from "@/components/sections/ministries/women/hero";
import WomensFellowshipJoin from "@/components/sections/ministries/women/join";
import WomensFellowshipLeadership from "@/components/sections/ministries/women/leadership";
import WomensFellowshipPrograms from "@/components/sections/ministries/women/programs";
import WomensFellowshipTestimonials from "@/components/sections/ministries/women/testimonials";

export default function WomensFellowshipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <WomensFellowshipHero />
        <WomensFellowshipAbout />
        <WomensFellowshipPrograms />
        <WomensFellowshipLeadership />
        <WomensFellowshipTestimonials />
        <WomensFellowshipGallery />
        <WomensFellowshipJoin />
      </main>
      <Footer />
    </div>
  );
}
