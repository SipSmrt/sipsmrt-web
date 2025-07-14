import Image from "next/image"
import { Button } from "@/components/ui/button"
import CheckBullet from "@/components/ui/check-bullet"

export default function AppShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="app">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 pl-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Track Your Hydration Journey
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our intuitive app connects seamlessly with your smart bottle to provide real-time hydration tracking,
                personalized goals, and actionable insights.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Personalized hydration goals based on your activity level</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Real-time tracking and progress visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Smart reminders that adapt to your daily routine</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Health insights and weekly hydration reports</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="/mobile-app" className="flex items-center gap-2">
                <Button className="bg-sky-600 hover:bg-sky-700 w-full">
                  Download Now
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/img/mockups/phones/phone_black.png?height=500&width=250"
                alt="SipSmrt App Screenshot"
                fill
                className="object-contain"
              />

              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
