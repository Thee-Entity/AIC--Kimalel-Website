
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const sermons = [
  {
    title: "The Power of Forgiveness",
    preacher: "Rev. John Doe",
    date: "2023-10-29",
    status: "Published",
    type: "Video",
  },
  {
    title: "Living a Life of Purpose",
    preacher: "Pastor Moureen Kosgei",
    date: "2023-10-22",
    status: "Published",
    type: "Audio",
  },
    {
    title: "The Heart of a Servant",
    preacher: "Pastor Jophet Lagat",
    date: "2023-10-15",
    status: "Draft",
    type: "Text",
  },
];

export default function SermonsAdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Sermons</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage all church sermons here.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New Sermon
        </Button>
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Sermon List</CardTitle>
                    <CardDescription>A list of all sermons in your church.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search sermons..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Preacher</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sermons.map((sermon) => (
                <TableRow key={sermon.title}>
                  <TableCell className="font-medium">{sermon.title}</TableCell>
                  <TableCell>{sermon.preacher}</TableCell>
                  <TableCell>{sermon.date}</TableCell>
                  <TableCell>
                    <Badge variant={sermon.type === 'Video' ? 'default' : 'secondary'}>{sermon.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={sermon.status === 'Published' ? 'default' : 'outline'}>{sermon.status}</Badge>
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
