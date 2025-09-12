
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const events = [
  {
    title: "Youth Worship Night",
    date: "2024-11-12",
    location: "Main Sanctuary",
    ministry: "Youth Ministry",
    status: "Upcoming",
  },
  {
    title: "Community Food Drive",
    date: "2024-10-18",
    location: "Church Grounds",
    ministry: "Outreach Team",
    status: "Past",
  },
  {
    title: "Annual Christmas Cantata",
    date: "2023-12-03",
    location: "Main Sanctuary",
    ministry: "Choir & Worship Team",
    status: "Past",
  },
];

export default function EventsAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Events</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage all church events here.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add New Event
        </Button>
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Event List</CardTitle>
                    <CardDescription>A list of all events in your church.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search events..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Ministry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.title}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.location}</TableCell>
                   <TableCell>{event.ministry}</TableCell>
                  <TableCell>
                    <Badge variant={event.status === 'Upcoming' ? 'default' : 'outline'}>{event.status}</Badge>
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
