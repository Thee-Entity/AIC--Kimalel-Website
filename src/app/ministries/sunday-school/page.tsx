
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ChildrenAbout from "@/components/sections/ministries/children/about";
import ChildrenGallery from "@/components/sections/ministries/children/gallery";
import ChildrenHero from "@/components/sections/ministries/children/hero";
import ChildrenJoin from "@/components/sections/ministries/children/join";
import ChildrenPrograms from "@/components/sections/ministries/children/programs";
import ChildrenTeam from "@/components/sections/ministries/children/team";

export default function SundaySchoolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ChildrenHero />
        <ChildrenAbout />
        <ChildrenPrograms />
        <ChildrenTeam />
        <ChildrenGallery />
        <ChildrenJoin />
      </main>
      <Footer />
    </div>
  );
}
