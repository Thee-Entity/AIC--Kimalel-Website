import { cn } from "@/lib/utils";
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold transition-colors", className)}>
      <div className="p-1.5 bg-accent rounded-sm text-primary">
        <CrossIcon className="w-5 h-5" />
      </div>
      <span className="font-headline">AIC Kimalel</span>
    </Link>
  );
}

function CrossIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    );
  }
  