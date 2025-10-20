"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Prism from "@/components/beta/prism"

const BTN_BASE =
  "h-12 md:h-14 px-6 md:px-8 text-base md:text-lg flex items-center justify-center gap-2 leading-none cursor-pointer"
const BTN_PRIMARY = "bg-white hover:bg-gray-100 text-black"
const BTN_OUTLINE = "border-2 border-white text-white hover:bg-white/20 bg-transparent"

export default function BetaLandingClient() {
  const router = useRouter()

  // lg breakpoint (>=1024px)
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  const prismScale = isDesktop ? 2 : 1

  // black background + stable vh + bar height
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtmlBg = html.style.backgroundColor
    const prevBodyBg = body.style.backgroundColor

    const setVars = () => {
      // lock "vh" to innerHeight so it does not change while scrolling
      html.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
      if (barRef.current) {
        html.style.setProperty("--barh", `${barRef.current.offsetHeight}px`)
      }
    }
    html.style.backgroundColor = "#000"
    body.style.backgroundColor = "#000"
    setVars()
    window.addEventListener("resize", setVars)
    return () => {
      window.removeEventListener("resize", setVars)
      html.style.backgroundColor = prevHtmlBg
      body.style.backgroundColor = prevBodyBg
      html.style.removeProperty("--vh")
      html.style.removeProperty("--barh")
    }
  }, [])

  return (
    <main
      className="relative flex min-h-[calc(var(--vh,1vh)*100)] flex-col bg-black overflow-hidden
                 pt-[max(12px,env(safe-area-inset-top))]"
      style={{
        // reserve space for fixed bar
        paddingBottom: "calc(var(--barh,0px) + env(safe-area-inset-bottom))",
      }}
    >
      {/* Prism Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Prism
          animationType="3drotate"
          timeScale={0.2}
          height={3.5}
          baseWidth={5.5}
          scale={prismScale} // 2 desktop, 1 mobile
          hueShift={0}
          colorFrequency={0.1}
          noise={0.0}
          glow={1}
        />
      </div>

      <div className="container flex-1 flex flex-col lg:items-center lg:justify-center px-5 sm:px-8 py-6 lg:py-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center max-w-6xl w-full flex-1 lg:flex-none">
          {/* Left */}
          <div className="space-y-5 text-center lg:text-left flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              SipSmrt Beta
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>
              Help us improve our hydration tracking with your feedback! Currently available for iOS via TestFlight.
            </p>

            {/* Desktop buttons */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`${BTN_BASE} ${BTN_PRIMARY}`}
                onClick={() => window.open("https://testflight.apple.com/join/gZGp6Mb1", "_blank")}
              >
                <Image src="/img/icons/testflight-icon.png" alt="TestFlight" width={28} height={28} className="h-7 w-7" />
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

          {/* Mockup: lock height */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <div
              className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[9/16]"
              style={{
                maxHeight: "calc(var(--vh, 1vh) * 55)", // ~55% of locked viewport
              }}
            >
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
      </div>

      {/* Mobile buttons: fixed, measured, and safe-area aware */}
      <div
        ref={barRef}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm border-t border-white/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-3 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className={`${BTN_BASE} ${BTN_PRIMARY}`}
            onClick={() => window.open("https://testflight.apple.com/join/gZGp6Mb1", "_blank")}
          >
            <Image src="/img/icons/testflight-icon.png" alt="TestFlight" width={24} height={24} className="h-6 w-6" />
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
