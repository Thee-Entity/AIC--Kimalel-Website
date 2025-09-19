
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Wallet } from "lucide-react";
import { PaypalIcon } from "@/components/paypal-icon";

export function DonationDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            Your generous gift helps us continue our mission.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card"><CreditCard className="mr-2 h-4 w-4" />Card</TabsTrigger>
            <TabsTrigger value="paypal"><PaypalIcon className="mr-2 h-4 w-4" />PayPal</TabsTrigger>
          </TabsList>
          <TabsContent value="card">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="Jane Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input id="amount" type="number" placeholder="Ksh 1000" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="card-number" className="text-right">
                  Card
                </Label>
                <Input id="card-number" placeholder="0000 0000 0000 0000" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">
                  Expires
                </Label>
                <div className="col-span-3 grid grid-cols-2 gap-2">
                    <Input id="expiry" placeholder="MM/YY" />
                    <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Wallet className="mr-2 h-4 w-4" /> Donate
            </Button>
          </TabsContent>
          <TabsContent value="paypal">
            <div className="py-4 text-center">
              <p className="text-muted-foreground mb-4">You will be redirected to PayPal to complete your donation securely.</p>
              <Button type="submit" className="w-full bg-[#00457C] text-white hover:bg-[#003057]">
                <PaypalIcon className="mr-2" /> Proceed to PayPal
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
