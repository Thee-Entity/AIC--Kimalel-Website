
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import YouthFellowshipAbout from "@/components/sections/ministries/youth/about";
import YouthFellowshipGallery from "@/components/sections/ministries/youth/gallery";
import YouthFellowshipHero from "@/components/sections/ministries/youth/hero";
import YouthFellowshipJoin from "@/components/sections/ministries/youth/join";
import YouthFellowshipLeadership from "@/components/sections/ministries/youth/leadership";
import YouthFellowshipPrograms from "@/components/sections/ministries/youth/programs";
import YouthFellowshipTestimonials from "@/components/sections/ministries/youth/testimonials";

export default function YouthFellowshipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <YouthFellowshipHero />
        <YouthFellowshipAbout />
        <YouthFellowshipPrograms />
        <YouthFellowshipLeadership />
        <YouthFellowshipTestimonials />
        <YouthFellowshipGallery />
        <YouthFellowshipJoin />
      </main>
      <Footer />
    </div>
  );
}
