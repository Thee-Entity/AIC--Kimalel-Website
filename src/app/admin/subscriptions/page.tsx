
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const subscribers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    source: "Website Signup",
    date: "2024-07-22",
    status: "Active",
  },
  {
    name: "Bob Williams",
    email: "bob@example.com",
    source: "Event RSVP",
    date: "2024-07-21",
    status: "Active",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    source: "Manual",
    date: "2024-07-20",
    status: "Unsubscribed",
  },
   {
    name: "Diana Miller",
    email: "diana@example.com",
    source: "Website Signup",
    date: "2024-07-19",
    status: "Active",
  },
];

export default function SubscriptionsAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Subscriptions</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your newsletter subscribers.</p>
        </div>
        <div className="flex gap-2">
            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Download className="mr-2 h-5 w-5" />
                Export CSV
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add Subscriber
            </Button>
        </div>
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Subscriber List</CardTitle>
                    <CardDescription>A list of all newsletter subscribers.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search by email..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Date Subscribed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map((subscriber) => (
                <TableRow key={subscriber.email}>
                  <TableCell className="font-medium">{subscriber.name}</TableCell>
                  <TableCell>{subscriber.email}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{subscriber.source}</Badge>
                  </TableCell>
                  <TableCell>{subscriber.date}</TableCell>
                  <TableCell>
                    <Badge variant={subscriber.status === 'Active' ? 'default' : 'destructive'}>{subscriber.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
