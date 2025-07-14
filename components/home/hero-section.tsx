"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import WaveDivider from "@/components/home/wave-divider"

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-white relative overflow-hidden">
      <WaveDivider />

      {/* Hero content */}
      <div className="container pt-14 px-8 md:px-12 md:pt-10 lg:px-16 relative z-10">
        <div className="grid md:gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-black drop-shadow-xl md:text-gray-900">
                Hydration,<br/>but smarter.
              </h1>
              <p className="max-w-[600px] md:text-gray-700 text-lg md:text-xl leading-relaxed">
                Track your hydration with ease using our SmrtBoot and mobile app
              </p>
            </div>

            {/*  Buttons */}
            <div className="flex flex-col gap-3 min-[200px]:flex-row">
              <Button
                className="text-base px-6 py-4 sm:text-lg sm:px-8 sm:py-6 font-bold bg-sky-600 hover:bg-sky-700"
                onClick={() => router.push("/smrtboot")}
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="text-base px-6 py-[14px] sm:text-lg sm:px-8 sm:py-[22px] font-bold border-2 sm:border-3 border-solid border-sky-600 text-sky-700 hover:bg-sky-50 bg-transparent"
                onClick={() => router.push("/mobile-app")}
              >
                Mobile App
              </Button>
            </div>

          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-[5/6] mx-auto">
              <Image
                src="/img/mockups/phone_boot.png?height=600&width=500"
                alt="Main mockup"
                fill
                className="object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
