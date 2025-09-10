
import { cn } from "@/lib/utils";
import Link from 'next/link';

export function TheeEntityLogo({ className }: { className?: string }) {
  return (
    <Link href="#" className={cn("flex items-center gap-2 text-sm font-bold transition-colors", className)}>
      <div className="p-1 bg-accent rounded-sm text-primary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
        >
            <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
        </svg>
      </div>
      <span className="font-headline">Thee Entity</span>
    </Link>
  );
}
