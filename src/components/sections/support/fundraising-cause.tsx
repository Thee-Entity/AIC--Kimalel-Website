import { Progress } from "@/components/ui/progress";

export default function FundraisingCause() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">Why We Are Raising Funds</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
                We are currently raising funds for church renovations and the purchase of essential resources including electrical equipment, sound systems, and seating improvements. Your contribution will help create a better worship experience for everyone.
            </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-white mb-2">
                <span>Raised: Ksh 220,000</span>
                <span>Target: Ksh 500,000</span>
            </div>
            <Progress value={44} className="h-4 bg-gray-800 border border-accent/30 [&>div]:bg-accent" />
             <div className="text-center mt-4 text-gray-400">44% of goal raised</div>
        </div>
      </div>
    </section>
  );
}
