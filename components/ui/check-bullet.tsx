// components/check-bullet.tsx
import { cn } from "@/lib/utils"

interface CheckBulletProps {
  className?: string
}

export default function CheckBullet({ className }: CheckBulletProps) {
  return (
    <div className={cn("rounded-full bg-sky-600 p-1", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  )
}
