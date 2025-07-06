import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Transform Your Hydration Habits Today
            </h2>
            <p className="max-w-[900px] text-sky-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied customers who have improved their health and wellness with SipSmrt.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-100">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-sky-700 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
