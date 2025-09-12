
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

const requests = [
  {
    name: "Anonymous",
    category: "Healing",
    preview: "Please pray for my mother who is sick...",
    date: "2024-07-22",
    status: "Unread",
    confidential: true,
  },
  {
    name: "John K.",
    category: "Family",
    preview: "Pray for my family's unity and peace during...",
    date: "2024-07-21",
    status: "In Progress",
    confidential: false,
  },
  {
    name: "Mary A.",
    category: "Thanksgiving",
    preview: "Thanking God for a successful surgery...",
    date: "2024-07-20",
    status: "Resolved",
    confidential: false,
  },
   {
    name: "Anonymous",
    category: "Financial",
    preview: "Seeking God's guidance and provision in a difficult...",
    date: "2024-07-19",
    status: "In Progress",
    confidential: true,
  },
];

export default function PrayerRequestsAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Prayer Requests</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage all prayer and contact requests.</p>
        </div>
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Request Inbox</CardTitle>
                    <CardDescription>A list of all prayer requests submitted.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search by name or category..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Confidential</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{request.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{request.category}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 dark:text-gray-400">{request.preview}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={request.status === 'Resolved' ? 'default' : (request.status === 'Unread' ? 'destructive' : 'secondary')}
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {request.confidential && <Lock className="h-4 w-4 mx-auto text-gray-400" />}
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
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
