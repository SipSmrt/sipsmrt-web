import { Droplets, Smartphone, Battery } from "lucide-react"
import Particles from "@/components/home/particles"

export default function FeaturesSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
      id="features"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Particles/>
      </div>

      {/* Foreground content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Smart Hydration Technology
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our products combine cutting-edge technology with practical design to keep you perfectly
              hydrated.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Droplets className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Precise Tracking</h3>
            <p className="text-center text-muted-foreground">
              Intelligent sensors measure your water intake and sync with our app in real-time.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Smartphone className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Mobile Benefits</h3>
            <p className="text-center text-muted-foreground">
              Track your hydration goals, get reminders, and view insights on your hydration health & habits.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Battery className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Long Battery Life</h3>
            <p className="text-center text-muted-foreground">
              Several days of battery life ensures your hydration tracking never stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
