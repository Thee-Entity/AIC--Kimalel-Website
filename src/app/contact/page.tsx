import ContactForm from "@/components/sections/contact/form";
import ContactHero from "@/components/sections/contact/hero";
import ContactInfo from "@/components/sections/contact/info";
import ContactMap from "@/components/sections/contact/map";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
