
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building, Smartphone } from "lucide-react";

const givingMethods = [
    {
        title: "Direct Bank Transfer",
        icon: Banknote,
        details: [
            { label: "Bank Name", value: "Equity Bank" },
            { label: "Account Number", value: "0123456789" },
        ]
    },
    {
        title: "Lipa na M-Pesa",
        icon: Smartphone,
        details: [
            { label: "Paybill Number", value: "159210" },
            { label: "Account Number", value: "Renovations" },
        ]
    },
    {
        title: "In-Person Giving",
        icon: Building,
        details: [
            { label: "You can bring your contribution to the church office during the week or give during our Sunday services." },
        ]
    },
]

export default function WaysToGive() {
  return (
    <section className="py-20">
        <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent mb-4">Ways to Give</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {givingMethods.map((method) => (
            <Card key={method.title} className="bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                    <method.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl font-headline">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                    {method.details.map((detail, index) => (
                        <li key={index} className="flex justify-between">
                            <span className="text-gray-400">{detail.label}</span>
                            {detail.value && <strong className="text-white">{detail.value}</strong>}
                        </li>
                    ))}
                </ul>
                {method.title === 'Lipa na M-Pesa' && (
                    <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Give Online</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
