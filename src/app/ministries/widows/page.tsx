
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import WidowsAbout from "@/components/sections/ministries/widows/about";
import WidowsGallery from "@/components/sections/ministries/widows/gallery";
import WidowsHero from "@/components/sections/ministries/widows/hero";
import WidowsSupport from "@/components/sections/ministries/widows/support";

export default function WidowsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <WidowsHero />
        <WidowsAbout />
        <WidowsGallery />
        <WidowsSupport />
      </main>
      <Footer />
    </div>
  );
}
