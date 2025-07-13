"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import WaveDivider from "./wave-divider"

export default function HeroSection() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-white relative overflow-hidden">
      <WaveDivider />
      <div className="container px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-gray-900">
                Hydration,<br/>but smarter.
              </h1>
              <p className="max-w-[600px] text-gray-700 text-lg md:text-xl leading-relaxed">
                Track your hydration with ease using the SipSmrt boot and mobile app.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6"
                onClick={() => router.push("/smrtboot")}
              >
                Shop Now
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-sky-600 text-sky-700 hover:bg-sky-50 bg-transparent"
                  >
                    Download
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-sm text-center">
                  <DialogHeader>
                    <DialogTitle>Coming Soon</DialogTitle>
                    <DialogDescription>
                      The SipSmrt mobile app is launching soon. Stay tuned!
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[600px] w-[600px]">
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
