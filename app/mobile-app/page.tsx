"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Activity,
  Bell,
  Calendar,
  BarChart4,
  Users,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

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
      <div className="container py-8">
        {/* Hero section */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <section className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              {/* LEFT SIDE: Header and download buttons */}
              <h1 className="text-4xl font-bold tracking-tight mb-4">SipSmrt Mobile App</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your personal hydration coach, right in your pocket. Track, analyze, and optimize your hydration habits
                with our intuitive mobile app.
              </p>
              <div className="flex flex-wrap justify-start gap-4 items-center">
                <Link href="#">
                  <Image
                    src="/img/buttons/app_store_download_black.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={50}
                    className="h-[50px] w-auto object-contain hover:opacity-80 transition"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/buttons/google_play_download.png"
                    alt="Get it on Google Play"
                    width={160}
                    height={50}
                    className="h-[50px] w-auto object-contain hover:opacity-80 transition"
                  />
                </Link>
              </div>
            </div>
            {/* RIGHT SIDE: Phone Mockup */}
            <div className="relative w-full max-w-[500px] h-[500px] mx-auto">
              <Image
                src="/img/mockups/phones/phone_black.png?height=500&width=250"
                alt="SipSmrt App Screenshot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">App Features</h2>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-sky-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-sky-100 p-3">
                      <Activity className="h-6 w-6 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Live Hydration Dashboard</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        View real-time hydration levels with beautiful visualizations and progress rings that update as
                        you drink.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">Real-time sync</span>
                        <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">Progress rings</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-green-100 p-3">
                      <Bell className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Intelligent Reminders</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI-powered notifications that learn your routine and remind you to hydrate at optimal times
                        throughout the day.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">AI-powered</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Smart timing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-purple-100 p-3">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Personalized Goals</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Custom hydration targets based on your weight, activity level, climate, and health goals with
                        daily adjustments.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Custom targets</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Daily adjust</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-orange-100 p-3">
                      <BarChart4 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Weekly and monthly hydration reports with trends, patterns, and insights to optimize your
                        hydration habits.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Trend analysis</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Insights</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-100 p-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Social Challenges</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Join hydration challenges with friends, family, or coworkers. Compete, motivate, and celebrate
                        achievements together.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Team challenges</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Leaderboards</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-indigo-100 p-3">
                      <Smartphone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Multi-Device Sync</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Seamlessly sync across iPhone, iPad, Apple Watch, and Android devices with cloud backup and
                        offline mode.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Cloud sync</span>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Offline mode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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


        {/* Call to action */}
        <section className="mb-16">
          <div className="bg-sky-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hydration Habits?</h2>
            <p className="text-xl mb-6 text-sky-100">
              Download the SipSmrt app today and start your journey to better hydration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-sky-700 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
)
}
