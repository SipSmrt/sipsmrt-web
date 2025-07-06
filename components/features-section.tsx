import { Droplets, Smartphone, Battery } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden" id="features">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-sky-300 rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-20 right-20 w-3 h-3 bg-sky-400 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-32 left-1/4 w-1 h-1 bg-sky-500 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-1/3 w-2 h-2 bg-sky-300 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-3 h-3 bg-sky-400 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-1 h-1 bg-sky-500 rounded-full animate-ping opacity-40"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-sky-300 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-1 h-1 bg-sky-400 rounded-full animate-ping opacity-30"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/3 right-8 w-2 h-2 bg-sky-500 rounded-full animate-bounce opacity-40"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-sky-300 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.8s" }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Smart Hydration Technology</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our innovative products combine cutting-edge technology with practical design to keep you perfectly
              hydrated.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Droplets className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Hydration Tracking</h3>
            <p className="text-center text-muted-foreground">
              Precise sensors measure your water intake and sync with our app in real-time.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Smartphone className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Mobile App</h3>
            <p className="text-center text-muted-foreground">
              Track your hydration goals, set reminders, and view insights on your hydration habits.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Battery className="h-12 w-12 text-sky-600" />
            <h3 className="text-xl font-bold">Long Battery Life</h3>
            <p className="text-center text-muted-foreground">
              30-day battery life ensures your hydration tracking never stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
