"use client"

import { useScrollPosition } from "@/hooks/use-scroll-position"

export default function WaveDivider() {
  const { scrollPosition } = useScrollPosition()

  // Create parallax effect - waves move slower than scroll
  const waveOffset = scrollPosition * 0.2

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        style={{
          transform: `translateY(${waveOffset}px)`,
        }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Darkest solid blue background at the very top - no gaps */}
        <path d="M0,0 L1200,0 L1200,100 C1000,60 800,120 600,80 C400,40 200,100 0,60 Z" fill="#075985" />

        {/* Slightly lighter blue waves layered on top */}
        <path
          d="M-175,-80 C125,40 325,-40 525,20 C725,80 925,0 1375,40 L1375,800 L-175,800 Z"
          fill="#0369a1"
          fillOpacity="0.8"
        />

        <path
          d="M-125,-10 C175,120 375,40 575,100 C775,160 975,80 1325,120 L1325,800 L-125,800 Z"
          fill="#0284c7"
          fillOpacity="0.7"
        />

        <path
          d="M-25,-60 C275,60 475,-20 675,40 C875,100 1075,20 1225,60 L1225,800 L-25,800 Z"
          fill="url(#waveGradient1)"
          fillOpacity="0.6"
        />

        <path
          d="M-75,-20 C225,100 425,20 625,80 C825,140 1025,60 1275,100 L1275,800 L-75,800 Z"
          fill="#0ea5e9"
          fillOpacity="0.5"
        />

        <path
          d="M-50,-40 C250,80 450,0 650,60 C850,120 1050,40 1250,80 L1250,800 L-50,800 Z"
          fill="url(#waveGradient2)"
        />

        {/* First massive wave - starts off screen left, covers full area */}
        <path
          d="M-100,0 C200,120 400,40 600,100 C800,160 1000,80 1300,120 L1300,800 L-100,800 Z"
          fill="url(#waveGradient2)"
        />

        {/* Second huge wave - more dramatic curves */}
        <path
          d="M-150,60 C150,200 350,80 550,160 C750,240 950,120 1350,180 L1350,800 L-150,800 Z"
          fill="url(#waveGradient3)"
        />

        {/* Third massive wave - very asymmetric */}
        <path
          d="M-200,120 C100,280 300,140 500,220 C700,300 900,180 1400,260 L1400,800 L-200,800 Z"
          fill="url(#waveGradient4)"
        />

        {/* Fourth enormous wave */}
        <path
          d="M-250,180 C50,360 250,200 450,280 C650,360 850,240 1450,340 L1450,800 L-250,800 Z"
          fill="#bae6fd"
          fillOpacity="0.4"
        />

        {/* Additional deep waves for more depth */}
        <path
          d="M-300,240 C0,440 200,260 400,340 C600,420 800,300 1500,420 L1500,800 L-300,800 Z"
          fill="#e0f2fe"
          fillOpacity="0.5"
        />

        <path
          d="M-350,300 C-50,520 150,320 350,400 C550,480 750,360 1550,500 L1550,800 L-350,800 Z"
          fill="#f0f9ff"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  )
}
