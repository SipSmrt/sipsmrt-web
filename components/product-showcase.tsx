import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50" id="products">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-end justify-center space-y-4 text-right pr-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Smart Hydration Boot
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Engineered with precision to track every sip and keep you perfectly hydrated throughout the day.
            </p>
          </div>
        </div>

        <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[300px]">
              <Image
                src="/img/mockups/wet_hydro_full.png?height=700&width=300"
                alt="SipSmrt Smart Boot"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
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
                <span>Precision sensors track every sip</span>
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
                <span>LED indicators remind you when it's time to hydrate</span>
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
                <span>Double-wall vacuum insulation keeps drinks at ideal temperature</span>
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
                <span>Rechargeable battery lasts up to 30 days</span>
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
                <span>Available in multiple colors and sizes</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold">$49.99</div>
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
