import { Button } from "@/components/ui/button";

export default function CallToGive() {
  return (
    <section id="give" className="relative bg-primary text-primary-foreground py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Support the Work of God</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Your generosity enables us to continue our mission and ministry in the community and beyond.
        </p>
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
          <h3 className="text-2xl font-semibold text-accent mb-4">Lipa Na M-Pesa</h3>
          <div className="space-y-2 text-left">
            <p className="flex justify-between"><span>Go to M-Pesa Menu</span></p>
            <p className="flex justify-between"><span>Select 'Lipa na M-Pesa'</span></p>
            <p className="flex justify-between"><span>Pay Bill:</span> <strong className="text-white">123456</strong></p>
            <p className="flex justify-between"><span>Account No:</span> <strong className="text-white">Your Name</strong></p>
          </div>
          <Button size="lg" className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
            Give Online
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
}
