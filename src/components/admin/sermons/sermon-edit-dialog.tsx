
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, UploadCloud } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export function SermonEditDialog({ children }: { children: React.ReactNode }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>Add New Sermon</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new sermon to the archive.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="Sermon Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="preacher" className="text-right">
              Preacher
            </Label>
            <Input id="preacher" placeholder="Preacher's Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right pt-2">
              Description
            </Label>
            <Textarea id="description" placeholder="Sermon summary or description..." className="col-span-3" rows={4} />
          </div>
           <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right pt-2">
                Media
            </Label>
            <div className="col-span-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-primary dark:text-accent">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Video, Audio, or Text files</p>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tags" className="text-right">
              Tags
            </Label>
            <Input id="tags" placeholder="e.g. Faith, Forgiveness, Hope" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Type
            </Label>
             <RadioGroup defaultValue="video" className="flex items-center space-x-4 col-span-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="video" id="r-video" />
                <Label htmlFor="r-video">Video</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="audio" id="r-audio" />
                <Label htmlFor="r-audio">Audio</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="r-text" />
                <Label htmlFor="r-text">Text</Label>
              </div>
            </RadioGroup>
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Status
            </Label>
             <div className="flex items-center space-x-2 col-span-3">
                <Switch id="status-switch" />
                <Label htmlFor="status-switch">Published</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Sermon</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
