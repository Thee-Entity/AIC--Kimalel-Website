
'use client';

import { createClient } from '@/utils/supabase/client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

type Signup = {
  id: number;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  ministry: string;
};

function downloadCSV(data: Signup[]) {
  const headers = ['Name', 'Email', 'Phone', 'Ministry', 'Date Signed Up'];
  const rows = data.map(signup => [
    `"${signup.full_name}"`,
    `"${signup.email}"`,
    `"${signup.phone}"`,
    `"${signup.ministry}"`,
    `"${format(new Date(signup.created_at), 'yyyy-MM-dd HH:mm')}"`,
  ]);

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += headers.join(",") + "\r\n";
  rows.forEach(rowArray => {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "ministry_signups.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function DownloadButton({ data }: { data: Signup[] }) {
    return (
        <Button onClick={() => downloadCSV(data)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Download className="mr-2 h-5 w-5" />
            Export CSV
        </Button>
    )
}

export default function SignupsAdminPage() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const supabase = createClient();
    const fetchSignups = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('ministry_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching signups:', error);
      } else {
        setSignups(data as Signup[]);
      }
      setLoading(false);
    };

    fetchSignups();
  }, []);


  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Ministry Signups</h1>
            <p className="text-gray-600 dark:text-gray-400">View and manage all ministry signups.</p>
        </div>
        <DownloadButton data={signups} />
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Signup List</CardTitle>
                    <CardDescription>A list of all users who have signed up for a ministry.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search by name or ministry..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Ministry</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                 <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        Loading signups...
                    </TableCell>
                </TableRow>
              ) : signups.length > 0 ? (
                signups.map((signup) => (
                  <TableRow key={signup.id}>
                    <TableCell className="font-medium">{signup.full_name}</TableCell>
                    <TableCell>{signup.email}</TableCell>
                    <TableCell>{signup.phone}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{signup.ministry}</Badge>
                    </TableCell>
                    <TableCell>{format(new Date(signup.created_at), 'PPP')}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        No signups yet.
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
