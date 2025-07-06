import Image from "next/image"
import { Button } from "@/components/ui/button"
import WaveDivider from "./wave-divider"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-white relative overflow-hidden">
      <WaveDivider />
      <div className="container px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-gray-900">
                Hydration, but smarter.
              </h1>
              <p className="max-w-[600px] text-gray-700 text-lg md:text-xl leading-relaxed">
                Track your hydration with ease using the SipSmrt boot and mobile app.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6">
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-sky-600 text-sky-700 hover:bg-sky-50 bg-transparent"
              >
                Download App
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-[400px]">
              <Image
                src="/img/mockups/phone_boot.png?height=600&width=500"
                alt="Main mockup"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
