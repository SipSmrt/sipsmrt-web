import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AppleIcon, SmartphoneIcon } from "lucide-react"

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
                <div className="rounded-full bg-sky-600 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Personalized hydration goals based on your activity level</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-sky-600 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Real-time tracking and progress visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-sky-600 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Smart reminders that adapt to your daily routine</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-sky-600 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Health insights and weekly hydration reports</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800">
                <AppleIcon className="h-5 w-5" />
                App Store
              </Button>
              <Button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700">
                <SmartphoneIcon className="h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-[250px]">
              <Image
                src="/img/mockups/phone_black.png?height=500&width=250"
                alt="SipSmrt App Screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
