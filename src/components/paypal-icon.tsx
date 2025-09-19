import { cn } from "@/lib/utils";

export function PaypalIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(className)}
        >
            <path d="M14.06 7.44a4.46 4.46 0 0 0-4.43 3.09 3.53 3.53 0 0 1 .45 2.13 3.37 3.37 0 0 1-2.5 3.12 2.5 2.5 0 0 1-2.39-2.62 2.58 2.58 0 0 1 2.4-2.62h.57a2.6 2.6 0 0 0 2.59-2.63 2.6 2.6 0 0 0-2.59-2.62H5.34a2.6 2.6 0 0 0-2.59 2.62c0 1.25.75 2.31 1.82 2.56" />
            <path d="M19.06 7.44a4.46 4.46 0 0 0-4.43 3.09 3.53 3.53 0 0 1 .45 2.13 3.37 3.37 0 0 1-2.5 3.12 2.5 2.5 0 0 1-2.39-2.62 2.58 2.58 0 0 1 2.4-2.62h.57a2.6 2.6 0 0 0 2.59-2.63 2.6 2.6 0 0 0-2.59-2.62h-3.2" />
        </svg>
    )
}
