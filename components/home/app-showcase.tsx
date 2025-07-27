import Image from "next/image"
import { Button } from "@/components/ui/button"
import CheckBullet from "@/components/ui/check-bullet"

export default function AppShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="app">
      <div className="container px-4 md:px-6">
        {/* Mobile: image on top. Desktop: grid layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          
          {/* LEFT SIDE: TEXT BLOCK */}
          <div className="flex flex-col justify-center space-y-4 lg:pl-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Track Your Hydration Journey
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our intuitive app connects seamlessly with your smart bottle to provide real-time hydration tracking,
                personalized goals, and actionable insights.
              </p>
            </div>
            <ul className="grid gap-2 py-4 pl-6 pr-5">
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Personalized hydration goals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Real-time tracking and visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Smart reminders that adapt to you</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckBullet />
                <span>Health insights and weekly reports</span>
              </li>
            </ul>

            {/* Button aligned right on mobile, normal on larger screens */}
            <div className="flex w-full justify-end lg:justify-start">
              <a href="/mobile-app">
                <Button className="bg-sky-600 hover:bg-sky-700">
                  Download Now
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: PHONE IMAGE */}
          <div className="flex items-center lg:pl-20 justify-center mb-8 lg:mb-0">
            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/img/mockups/phones/phone_black.png?height=500&width=250"
                alt="SipSmrt App Screenshot"
                fill
                className="object-bottom object-contain [mask-image:linear-gradient(to_bottom,black_90%,transparent)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
