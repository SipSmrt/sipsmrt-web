"use client"

import * as React from "react"
import Image from "next/image"
import {
  Activity,
  Bell,
  Calendar,
  BarChart4,
  Users,
  Smartphone,
} from "lucide-react"
import Footer from "@/components/layout/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Navbar from "@/components/layout/navbar"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import TechFeature from "@/components/ui/tech-feature"



const screenshots = [
  { id: 1, alt: "Home", src: "/img/screenshots/home.jpg?height=500&width=250" },
  { id: 2, alt: "Admin", src: "/img/screenshots/admin.jpg?height=500&width=250" },
  { id: 3, alt: "Input", src: "/img/screenshots/input.jpg?height=500&width=250" },
  { id: 4, alt: "Score", src: "/img/screenshots/score.jpg?height=500&width=250" },
  { id: 5, alt: "Scanning", src: "/img/screenshots/scanning.jpg?height=500&width=250" },
]

export default function MobileAppPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar staticStyle />
      {/* Hero section */}
      <div className="container pt-24 lg:pt-18 pb-2">
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              {/* LEFT SIDE: Header and download buttons */}
              <h1 className="text-4xl font-bold tracking-tight mb-4">SipSmrt Mobile</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your personal hydration coach, right in your pocket. Track, analyze, and optimize your hydration habits
                with our intuitive mobile app.
              </p>
              {/* "Coming Soon" dialogue trigger */}
              <Dialog>
                <DialogTrigger asChild>
                  <button>
                    <Image
                      src="/img/buttons/app_store_download_black.svg"
                      alt="Download on the App Store"
                      width={160}
                      height={50}
                      className="h-[50px] w-auto object-contain hover:opacity-80 transition"
                    />
                  </button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button>
                    <Image
                      src="/img/buttons/google_play_download.png"
                      alt="Get it on Google Play"
                      width={160}
                      height={50}
                      className="h-[50px] pl-6 w-auto object-contain hover:opacity-80 transition"
                    />
                  </button>
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
            {/* RIGHT SIDE: Phone Mockup */}
            <div className="relative w-full max-w-[500px] h-[400px] mx-auto">
              <Image
                src="/img/mockups/phones/phone_black.png?height=500&width=250"
                alt="SipSmrt App Screenshot"
                fill
                className="object-contain object-bottom z-0"
                priority
              />
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>


        {/* Screenshots carousel */}
        <section className="mb-16 bg-sky-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Screenshots</h2>
          <Carousel opts={{ loop: true }} className="relative max-w-5xl mx-auto">
            <CarouselContent className="flex gap-6">
              {screenshots.map((shot) => (
                <CarouselItem
                  key={shot.id}
                  className="!basis-auto !w-[250px] !h-[500px] relative"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-contain rounded-xl shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-14" />
            <CarouselNext className="-right-14" />
          </Carousel>
        </section>
        

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">App Features</h2>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <TechFeature
                  icon={Activity}
                  iconColor="text-sky-600"
                  iconBg="bg-sky-100"
                  borderColor="border-sky-100"
                  title="Live Hydration Dashboard"
                  description="View real-time hydration levels with visualizations that update as you drink."
                  tags={["Real-time sync", "Progress rings"]}
                />
                <TechFeature
                  icon={Bell}
                  iconColor="text-green-600"
                  iconBg="bg-green-100"
                  borderColor="border-green-100"
                  title="Intelligent Reminders"
                  description="AI-powered notifications that learn your routine and remind you to hydrate at optimal times throughout the day."
                  tags={["Notifications"]}
                />
                <TechFeature
                  icon={Calendar}
                  iconColor="text-purple-600"
                  iconBg="bg-purple-100"
                  borderColor="border-purple-100"
                  title="Personalized Goals"
                  description="Custom hydration targets based on your weight, activity level, climate, and health goals with daily adjustments."
                  tags={["Custom targets", "Daily adjust"]}
                />
              </div>
              {/* Right Column */}
              <div className="space-y-6">

                <TechFeature
                  icon={BarChart4}
                  iconColor="text-orange-600"
                  iconBg="bg-orange-100"
                  borderColor="border-orange-100"
                  title="Advanced Analytics"
                  description="Weekly and monthly hydration reports with trends, patterns, and insights to optimize your hydration habits."
                  tags={["Trend analysis", "Insights"]}
                />

                <TechFeature
                  icon={Users}
                  iconColor="text-blue-600"
                  iconBg="bg-blue-100"
                  borderColor="border-blue-100"
                  title="Social Challenges"
                  description="Join hydration challenges with friends, family, or coworkers. Compete, motivate, and celebrate achievements together."
                  tags={["Team challenges", "Leaderboards"]}
                />

                <TechFeature
                  icon={Smartphone}
                  iconColor="text-indigo-600"
                  iconBg="bg-indigo-100"
                  borderColor="border-indigo-100"
                  title="Multi-Device Sync"
                  description="Seamlessly sync across iOS, Android, and Web with cloud backup and offline mode."
                  tags={["Cloud sync", "Offline mode"]}
                />

              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mb-16">
          <div className="bg-sky-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Change Your Hydration Habits?</h2>
            <p className="text-xl mb-6 text-sky-100">
              Download the SipSmrt app today and start your journey to better hydration.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
