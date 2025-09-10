
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MensFellowshipAbout from "@/components/sections/ministries/men/about";
import MensFellowshipGallery from "@/components/sections/ministries/men/gallery";
import MensFellowshipHero from "@/components/sections/ministries/men/hero";
import MensFellowshipJoin from "@/components/sections/ministries/men/join";
import MensFellowshipLeadership from "@/components/sections/ministries/men/leadership";
import MensFellowshipPrograms from "@/components/sections/ministries/men/programs";
import MensFellowshipTestimonials from "@/components/sections/ministries/men/testimonials";

export default function MensFellowshipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <MensFellowshipHero />
        <MensFellowshipAbout />
        <MensFellowshipPrograms />
        <MensFellowshipLeadership />
        <MensFellowshipTestimonials />
        <MensFellowshipGallery />
        <MensFellowshipJoin />
      </main>
      <Footer />
    </div>
  );
}
