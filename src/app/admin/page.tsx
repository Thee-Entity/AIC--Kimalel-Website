
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Users, HandHeart, Newspaper, Mail, PlusCircle, ArrowUpRight } from "lucide-react";

export default function AdminDashboard() {
  const overviewCards = [
    { title: "Total Sermons", value: "125", icon: BookOpen, buttonText: "Upload New" },
    { title: "Upcoming Events", value: "8", icon: Calendar, buttonText: "Add Event" },
    { title: "Active Ministries", value: "6", icon: Users, buttonText: "Manage" },
    { title: "Donations (Month)", value: "Ksh 42,500", icon: HandHeart, buttonText: "View Donations" },
    { title: "New Subscribers", value: "15", icon: Newspaper, buttonText: "View List" },
    { title: "Prayer Requests", value: "3", icon: Mail, buttonText: "View Requests" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400">Welcome back, Admin. Here's your church's digital overview.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
        {overviewCards.map(card => (
          <Card key={card.title} className="bg-white dark:bg-gray-800 border-l-4 border-primary dark:border-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</CardTitle>
              <card.icon className="h-5 w-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</div>
              <Button variant="link" className="p-0 h-auto text-xs text-accent mt-2">
                {card.buttonText}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Activity feed coming soon...</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
