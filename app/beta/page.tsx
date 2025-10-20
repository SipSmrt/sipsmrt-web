"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Prism from "@/components/beta/prism"

const BTN_BASE = "h-14 px-8 text-lg flex items-center justify-center gap-2 leading-none cursor-pointer"
const BTN_PRIMARY = "bg-white hover:bg-gray-100 text-black"
const BTN_OUTLINE = "border-2 border-white text-white hover:bg-white/20 bg-transparent"

export default function BetaLandingPage() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col bg-black relative overflow-hidden
      pt-[max(1rem,env(safe-area-inset-top))] lg:pt-0">
      {/* Prism Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Prism
          animationType="3drotate"
          timeScale={0.2}
          height={3.5}
          baseWidth={5.5}
          scale={2}
          hueShift={0}
          colorFrequency={0.1}
          noise={0.0}
          glow={1}
        />
      </div>

      <div className="container flex-1 flex flex-col lg:items-center lg:justify-center py-8 lg:py-16 px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center max-w-6xl w-full flex-1 lg:flex-none">
          {/* Left side - Content */}
          <div className="space-y-6 text-center lg:text-left flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              SipSmrt Beta
            </h1>

            <p className="text-xl text-white leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Help us improve our hydration tracking and find bugs in our platform!
              Currently available for iOS via TestFlight.
            </p>

            {/* Buttons - desktop only */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`${BTN_BASE} ${BTN_PRIMARY}`}
                onClick={() => window.open("https://testflight.apple.com/join/gZGp6Mb1", "_blank")}
              >
                <Image
                  src="/img/icons/testflight-icon.png"
                  alt="TestFlight"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                />
                Download on TestFlight
              </Button>

              <Button
                size="lg"
                variant="outline"
                className={`${BTN_BASE} ${BTN_OUTLINE}`}
                onClick={() => router.push("/")}
              >
                Check Us Out
              </Button>
            </div>
          </div>

          {/* Right side - Mockup */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <div className="relative w-full max-w-[400px] aspect-[9/16]">
              <Image
                src="/img/mockups/phones/beta-phone.png"
                alt="SipSmrt App Mockup"
                fill
                className="object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Buttons - mobile only */}
        <div className="flex lg:hidden flex-col sm:flex-row gap-4 justify-center mt-auto
          pb-[max(2rem,env(safe-area-inset-bottom))]">
          <Button
            size="lg"
            className={`${BTN_BASE} ${BTN_PRIMARY}`}
            onClick={() => window.open("https://testflight.apple.com/join/gZGp6Mb1", "_blank")}
          >
            <Image
              src="/img/icons/testflight-icon.png"
              alt="TestFlight"
              width={32}
              height={32}
              className="h-7 w-7"
            />
            Download on TestFlight
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={`${BTN_BASE} ${BTN_OUTLINE}`}
            onClick={() => router.push("/")}
          >
            Check Us Out
          </Button>
        </div>
      </div>
    </main>
  )
}
